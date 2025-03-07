"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../ui/input-otp";

export function OtpBox({ setOtp }: { setOtp: (value: string) => void }) {
  return (
    <InputOTP
      onChange={(value) => {
        setOtp(value);
      }}
      maxLength={6}
    >
      <InputOTPGroup className="gap-7.5">
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup className="gap-7.5">
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}
