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
    const receiver = await prisma.user.findFirst({
      where: { number: body.receiverNumber },
    });
    if (!receiver || !receiver.isVerified || receiver.balance == null) {
      return NextResponse.json(
        { message: "Receiver not found or unverified" },
        { status: 404 },
      );
    }

    if (session.user.id === receiver.id) {
      return NextResponse.json(
        { message: "You can't send money to your own" },
        { status: 411 },
      );
    }

    try {
      await prisma.$transaction(async (tx) => {
        // Todo: have to lock the db so that user can't send two transaction at a time
        const sender = await tx.user.findUnique({
          where: { id: session.user.id },
          select: { id: true, balance: true, password: true, isVerified: true },
        });
        if (!sender || !sender.isVerified || sender.balance == null) {
          throw new Error("Sender not found or unverified");
        }
        if (
          !sender.password ||
          !(await bcrypt.compare(body.password, sender.password))
        ) {
          throw new Error("Wrong Password");
        }
        if (sender.balance < body.amount) {
          throw new Error("Insufficient balance");
        }
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
        await tx.transaction.create({
          data: {
            senderId: sender.id,
            receiverId: receiver.id,
            amount: body.amount,
            status: "SUCCESS",
          },
        });
      });
      return NextResponse.json(
        { message: "Transaction Successfull" },
        { status: 201 },
      );
    } catch (e: unknown) {
      return NextResponse.json(
        { message: e instanceof Error ? e.message : "Transaction failed" },
        { status: 400 },
      );
    }
  } catch (e: unknown) {
    return NextResponse.json(
      {
        message:
          e instanceof Error ? e.message : "unable to process your request",
      },
      { status: 500 },
    );
  }
}
