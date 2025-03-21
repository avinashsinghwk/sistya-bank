import { Auth_Options } from "@/lib/auth";
import { transferMoneySchema, transferMoneySchemaType } from "@/zod/schema";
import prisma from "@repo/db/prisma";
import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(Auth_Options);
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json(
        { message: "User is not logged in" },
        { status: 401 },
      );
    }
    const body: transferMoneySchemaType = await req.json();
    const zodRes = transferMoneySchema.safeParse(body);
    if (!zodRes.success) {
      return NextResponse.json(
        { message: zodRes.error.errors[0]?.message },
        { status: 400 },
      );
    }
    const sender = await prisma.user.findUnique({
      where: { id: session.user.id },
    });
    if (!sender || !sender.isVerified || sender.balance == null) {
      return NextResponse.json(
        { message: "Sender not found or unverified" },
        { status: 404 },
      );
    }
    if (
      !sender.password ||
      !(await bcrypt.compare(body.password, sender.password))
    ) {
      return NextResponse.json({ message: "Wrong Password" }, { status: 400 });
    }
    if (sender.balance < body.amount) {
      return NextResponse.json(
        { message: "Not sufficient balance" },
        { status: 400 },
      );
    }
    const receiver = await prisma.user.findFirst({
      where: { number: body.receiverNumber },
    });
    if (!receiver || !receiver.isVerified || receiver.balance == null) {
      return NextResponse.json(
        { message: "Receiver not found or unverified" },
        { status: 404 },
      );
    }
    if (sender.number === receiver.number) {
      return NextResponse.json(
        { message: "You can't send money to your own" },
        { status: 411 },
      );
    }
    const transaction = await prisma.transaction.create({
      data: {
        senderId: sender.id,
        receiverId: receiver.id,
        amount: body.amount,
        status: "PENDING",
      },
    });
    prisma.$transaction(async (tx) => {
      await tx.user.update({
        where: { id: sender.id },
        data: {
          balance: {
            decrement: body.amount,
          },
        },
      });
      await tx.user.update({
        where: { id: receiver.id },
        data: {
          balance: {
            increment: body.amount,
          },
        },
      });
      await tx.transaction.update({
        where: { id: transaction.id },
        data: {
          status: "SUCCESS",
        },
      });
    });
    return NextResponse.json(
      { message: "Transaction Successfull" },
      { status: 201 },
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Unable to complete this transaction" },
      { status: 500 },
    );
  }
}
