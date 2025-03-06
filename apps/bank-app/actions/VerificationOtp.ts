"use server";

import { GenerateOtp } from "@/hooks/generateOtp";
import prisma from "@repo/db/prisma";

export default async function VerificationOtp(number: string) {
  if (number.length != 10) {
    return {
      success: false,
      message: "Number should be of 10 digits",
    };
  }
  try {
    const isUserExist = await prisma.user.findFirst({ where: { number } });
    if (isUserExist && isUserExist.isVerified) {
      return {
        success: false,
        message: "This user is alrady present",
      };
    }
    const user = await prisma.user.upsert({
      where: { number },
      create: {
        number,
        verificationOtp: GenerateOtp(6),
        verificationOtpExpiry: new Date(Date.now() + 10 * 60 * 1000),
      },
      update: {
        verificationOtp: GenerateOtp(6),
        verificationOtpExpiry: new Date(Date.now() + 10 * 60 * 1000),
      },
    });
    return {
      success: true,
      otp: user.verificationOtp,
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
