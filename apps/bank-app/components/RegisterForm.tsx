"use client";
import { useEffect, useState } from "react";
import { PasswordInput } from "./custom/PasswordInput";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { MyLink } from "./custom/MyLink";
import { LoaderButton } from "./custom/LoaderButton";
import { InputBox } from "./custom/InputBox";
import { LockKeyhole, PhoneCall, User } from "lucide-react";
import { OtpBox } from "./custom/OtpBox";
import VerificationOtp from "@/actions/VerificationOtp";

export function RegisterForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [isBtnDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [isBtnLoading, setIsButtonLoading] = useState<boolean>(false);
  const [isVerifyBtnDisabled, setIsVerifyButtonDisabled] =
    useState<boolean>(true);
  const [isVerifyBtnLoading, setIsVerifyButtonLoading] =
    useState<boolean>(false);

  useEffect(() => {
    if (name && number && password) setIsButtonDisabled(false);
    else setIsButtonDisabled(true);
  }, [name, password, number]);

  useEffect(() => {
    if (number.length < 10) setIsVerifyButtonDisabled(true);
    else setIsVerifyButtonDisabled(false);
  }, [number]);

  return (
    <div className="flex flex-col w-1/3 shadow-lg p-4">
      <h1 className="font-sans text-3xl font-extrabold text-slate-800 text-center mb-8">
        Create Account
      </h1>
      <div className="w-full flex flex-col gap-6">
        <InputBox
          icon={<PhoneCall color="red" size={18} />}
          placeholder="Mobile Number"
          type="number"
          onChange={(value) => setNumber(value)}
        />
        <div className="flex gap-4">
          <OtpBox />
          <LoaderButton
            onClick={async () => {
              const res = await VerificationOtp(number)
              if(!res.success){

              } else {
                
              }
            }}
            className="bg-red-500 hover:bg-red-600"
            isLoader={isVerifyBtnLoading}
            text="Get Otp"
            isDisabled={isVerifyBtnDisabled}
          />
        </div>
        <InputBox
          icon={<User color="red" size={18} />}
          placeholder="Full Name"
          type="text"
          onChange={(value) => setName(value)}
        />
        <div className="flex gap-4">
          <PasswordInput
            placeholder="Enter Password"
            icon={<LockKeyhole color="red" size={18} />}
            onChange={(value) => {
              setPassword(value);
            }}
          />
          <PasswordInput
            placeholder="Confirm Password"
            icon={<LockKeyhole color="red" size={18} />}
            onChange={(value) => {
              setConfirmPassword(value);
            }}
          />
        </div>
      </div>
      <div className="flex items-center text-slate-800 justify-end gap-1.5 mt-4">
        <Label>Already Have an account? </Label>
        <MyLink
          className="font-semibold text-sm hover:text-blue-400 text-blue-300"
          href="/login"
          text="LogIn"
        />
      </div>
      <div className="w-full mt-10">
        <LoaderButton
          isDisabled={isBtnDisabled}
          isLoader={isBtnLoading}
          onClick={async () => {
            if (!name || !password || !number) return;
            setIsButtonLoading(true);
          }}
          className="w-full cursor-pointer bg-red-500 hover:bg-red-600"
          text="Create Account"
        />
      </div>
    </div>
  );
}
