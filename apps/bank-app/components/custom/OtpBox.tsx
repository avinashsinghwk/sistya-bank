"use client";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

export function OtpBox({ setOtp }: { setOtp: (value: string) => void }) {
  return (
    <InputOTP
      onChange={(value) => {
        setOtp(value);
      }}
      maxLength={6}
      className="w-full"
    >
      <InputOTPGroup className="w-full">
        <div className="flex w-full justify-between">
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </div>
      </InputOTPGroup>
    </InputOTP>
  );
}
