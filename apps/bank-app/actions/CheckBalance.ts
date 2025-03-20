"use server";

import { Auth_Options } from "@/lib/auth";
import prisma from "@repo/db/prisma";
import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";

interface CheckBalanceResponse {
  success: boolean;
  message?: string;
  balance?: number;
}

export default async function CheckBalance(
  password: string,
): Promise<CheckBalanceResponse> {
  try {
    const session = await getServerSession(Auth_Options);
    if (!session?.user?.id) {
      return {
        success: false,
        message: "User is not logged in",
      };
    }
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { password: true, balance: true, isVerified: true },
    });
    if (!user || !user.isVerified) {
      return {
        success: false,
        message: "User is not registered",
      };
    }
    if (!user.password || !(await bcrypt.compare(password, user.password!))) {
      return {
        success: false,
        message: "Incorrect password",
      };
    }
    return {
      success: true,
      balance: user.balance || 0,
    };
  } catch (e: unknown) {
    console.log(e);
    return {
      success: false,
      message: "unable to process your request",
    };
  }
}
