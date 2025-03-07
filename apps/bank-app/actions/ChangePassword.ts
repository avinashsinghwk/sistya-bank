"use server";

import prisma from "@repo/db/prisma";
import bcrypt from "bcryptjs";
import { forgotPasswordSchema, forgotPasswordSchemaType } from "@/zod/schema";
export default async function ChangePassword({
  number,
  otp,
  password,
}: forgotPasswordSchemaType) {
  const res = forgotPasswordSchema.safeParse({ number, otp, password });
  if (!res.success) {
    return {
      success: false,
      message: res.error.errors[0]?.message,
    };
  }
  try {
    const isUser = await prisma.user.findFirst({ where: { number } });
    if (!isUser || !isUser.isVerified) {
      return {
        success: false,
        message: "This user is not present",
      };
    }
    if (
      isUser.forgotPasswordOtp !== otp ||
      !isUser.forgotPasswordOtpExpiry ||
      new Date(isUser.forgotPasswordOtpExpiry) < new Date()
    ) {
      return {
        success: false,
        message: "Incorrect otp | generate again",
      };
    }
    const user = await prisma.user.update({
      where: { number, forgotPasswordOtp: otp },
      data: {
        password: await bcrypt.hash(password, 12),
        forgotPasswordOtp: null,
        forgotPasswordOtpExpiry: null,
      },
    });
    return {
      success: true,
      message: "Password Changed Successfull",
    };
  } catch (e: unknown) {
    console.log(e);
    return {
      success: false,
      message: "Unable to process your request",
    };
  }
}
