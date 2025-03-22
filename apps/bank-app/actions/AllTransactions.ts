"use server";

import { Auth_Options } from "@/lib/auth";
import prisma from "@repo/db/prisma";
import { getServerSession } from "next-auth";

export interface Transaction {
  id: string;
  amount: number;
  status: "SUCCESS" | "PENDING" | "FAILURE";
  startedAt: Date;
  senderId: string;
  receiverId: string;
  sender: {
    name: string | null;
    number: string;
    id: string;
  };
  receiver: {
    name: string | null;
    number: string;
    id: string;
  };
}

export default async function AllTransactions() {
  const session = await getServerSession(Auth_Options);
  if (!session || !session.user || !session.user.id) {
    return {
      success: false,
      message: "User not logged in",
    };
  }
  try {
    const alltrx: Transaction[] = await prisma.transaction.findMany({
      where: {
        OR: [{ senderId: session.user.id }, { receiverId: session.user.id }],
      },
      select: {
        id: true,
        startedAt: true,
        senderId: true,
        receiverId: true,
        amount: true,
        status: true,
        sender: {
          select: { name: true, number: true, id: true },
        },
        receiver: {
          select: { name: true, number: true, id: true },
        },
      },
    });
    return {
      success: true,
      trxns: alltrx,
    };
  } catch (e: unknown) {
    console.log(e);
    return {
      success: false,
      message: "Unable to process your request",
    };
  }
}
