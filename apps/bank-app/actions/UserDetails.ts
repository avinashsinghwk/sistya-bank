"use server";

import prisma from "@repo/db/prisma";

export interface UserDetailsResponse {
  id: string;
  number: string;
  isVerified: boolean;
  name: string | null;
  sendTransactionsNo: number;
  receivedTransactionsNo: number;
  allTransactionsNo: number;
}

export default async function UserDetails(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        number: true,
        isVerified: true,
        name: true,
        sendTransactions: {
          select: { id: true },
        },
        receivedTransactions: { select: { id: true } },
      },
    });
    if (!user) {
      return {
        success: false,
      };
    }
    return {
      success: true,
      userDetails: {
        id: user.id,
        number: user.number,
        isVerified: user.isVerified,
        name: user.name,
        sendTransactionsNo: user.sendTransactions.length,
        receivedTransactionsNo: user.receivedTransactions.length,
        allTransactionsNo:
          user.sendTransactions.length + user.receivedTransactions.length,
      },
    };
  } catch (e: unknown) {
    console.log(e);
    return {
      success: false,
    };
  }
}
