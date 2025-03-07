"use server";

import { GenerateOtp } from "@/hooks/generateOtp";
import prisma from "@repo/db/prisma";

export default async function ForgotPasswordOtp(number: string) {
  if (number.length != 10) {
    return {
      success: false,
      message: "Number should be of 10 digits",
    };
  }
  try {
    const isUserExist = await prisma.user.findFirst({ where: { number } });
    if (!isUserExist || !isUserExist.isVerified) {
      return {
        success: false,
        message: "This user is not present",
      };
    }
    const user = await prisma.user.update({
      where: { number },
      data: {
        forgotPasswordOtp: GenerateOtp(6),
        forgotPasswordOtpExpiry: new Date(Date.now() + 10 * 60 * 1000),
      },
    });
    return {
      success: true,
      otp: user.forgotPasswordOtp,
      message: "Otp send successfully",
    };
  } catch (e: unknown) {
    console.log(e);
    return {
      success: false,
      message: "Unable to process your request",
    };
  }
}
