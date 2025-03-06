"use server";
import { GenerateOtp } from "@/hooks/generateOtp";
import { registerAccountSchemaType, registerAccountSchema } from "@/zod/schema";
import prisma from "@repo/db/prisma";
import bcrypt from "bcryptjs";

export default async function Register({
  number,
  otp,
  password,
  name,
}: registerAccountSchemaType) {
  const res = registerAccountSchema.safeParse({ number, otp, password, name });
  if (!res.success) {
    return {
      success: false,
      message: res.error.errors[0]?.message,
    };
  }
  try {
    const isUser = await prisma.user.findFirst({ where: { number } });
    if (!isUser) {
      return {
        success: false,
        message: "First get otp",
      };
    }
    if (isUser && isUser.isVerified) {
      return {
        success: false,
        message: "This user is already present",
      };
    }
    if (
      isUser.verificationOtp !== otp ||
      !isUser.verificationOtpExpiry ||
      new Date(isUser.verificationOtpExpiry) < new Date()
    ) {
      return {
        success: false,
        message: "Incorrect otp | generate again",
      };
    }
    const user = await prisma.user.update({
      where: { number, verificationOtp: otp },
      data: {
        isVerified: true,
        password: await bcrypt.hash(password, 12),
        name,
        verificationOtp: null,
        verificationOtpExpiry: null,
        balance: Number(GenerateOtp(5)),
      },
    });
    return {
      success: true,
      message: "Account Created Successfull",
    };
  } catch (e: unknown) {
    console.log(e);
    return {
      success: false,
      message: "Unable to process your request",
    };
  }
}
