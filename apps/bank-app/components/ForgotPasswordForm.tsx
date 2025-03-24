"use client";
import { useEffect, useState } from "react";
import { PasswordInput } from "./custom/PasswordInput";
import { MyLink } from "./custom/MyLink";
import { LoaderButton } from "./custom/LoaderButton";
import { InputBox } from "./custom/InputBox";
import { LockKeyhole, PhoneCall } from "lucide-react";
import { OtpBox } from "./custom/OtpBox";
import { toast } from "sonner";
import { TopInfoShower } from "./custom/TopInfoShower";
import { useRouter } from "next/navigation";
import ForgotPasswordOtp from "@/actions/ForgotPasswordOtp";
import ChangePassword from "@/actions/ChangePassword";

export function ForgotPasswordForm() {
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isVerifyBtnDisabled, setIsVerifyButtonDisabled] =
    useState<boolean>(true);
  const [isVerifyBtnLoading, setIsVerifyButtonLoading] =
    useState<boolean>(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isBtnDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [isBtnLoading, setIsButtonLoading] = useState<boolean>(false);
  const [hideTopInfo, setHideTopInfo] = useState<boolean>(true);
  const [receivedOtp, setReceivedOtp] = useState<string | null | undefined>("");
  const router = useRouter();

  useEffect(() => {
    if (
      number.length === 10 &&
      password &&
      confirmPassword &&
      password === confirmPassword &&
      otp.length === 6
    )
      setIsButtonDisabled(false);
    else setIsButtonDisabled(true);
  }, [password, number, confirmPassword, otp]);

  useEffect(() => {
    if (number.length === 10) setIsVerifyButtonDisabled(false);
    else setIsVerifyButtonDisabled(true);
  }, [number]);

  return (
    <div className="flex flex-col w-full sm:w-2/3 md:w-1/2 lg:w-1/3 shadow-lg p-4">
      <TopInfoShower setHide={setHideTopInfo} hide={hideTopInfo}>
        <p className="font-bold text-white">
          I am Gareeb <span className="text-2xl">🤒</span>, can&apos;t send you
          otp. Use{" "}
          <span className="text-lg tracking-widest">{receivedOtp}</span> as temp
          otp
        </p>
      </TopInfoShower>
      <h1 className="font-sans text-3xl font-extrabold text-slate-800 text-center mb-8">
        Change Password
      </h1>
      <div className="w-full flex flex-col gap-6">
        <InputBox
          icon={<PhoneCall color="red" size={18} />}
          placeholder="Mobile Number"
          type="number"
          onChange={(value) => setNumber(value)}
        />
        <div className="w-full flex gap-6 flex-wrap sm:flex-nowrap justify-end sm:justify-between">
          <OtpBox setOtp={setOtp} />
          <LoaderButton
            onClick={async () => {
              setIsVerifyButtonLoading(true);
              setIsVerifyButtonDisabled(true);
              setHideTopInfo(true);
              const res = await ForgotPasswordOtp(number);
              if (!res.success) {
                toast.error(res.message);
              } else {
                toast.success(res.message);
                setReceivedOtp(res.otp);
                setHideTopInfo(false);
              }
              setIsVerifyButtonLoading(false);
            }}
            className="bg-red-500 hover:bg-red-600 cursor-pointer"
            isLoader={isVerifyBtnLoading}
            text="Get Otp"
            isDisabled={isVerifyBtnDisabled}
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-6">
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
      <div className="flex justify-between items-center mt-4">
        <MyLink
          className="font-semibold text-sm hover:text-blue-400 text-blue-300"
          href="/register"
        >
          Create Account?
        </MyLink>

        <MyLink
          className="font-semibold text-sm hover:text-blue-400 text-blue-300"
          href="/login"
        >
          Log In?
        </MyLink>
      </div>
      <div className="w-full mt-10">
        <LoaderButton
          isDisabled={isBtnDisabled}
          isLoader={isBtnLoading}
          onClick={async () => {
            setIsButtonLoading(true);
            setIsButtonDisabled(true);
            if (confirmPassword != password) {
              toast.error("Passwords should be same");
              setIsButtonLoading(false);
              return;
            }
            const res = await ChangePassword({ number, otp, password });
            if (!res?.success) {
              toast.error(res?.message);
            } else {
              toast.success(res.message);
              router.push("/login");
            }
            setIsButtonLoading(false);
          }}
          className="w-full cursor-pointer bg-red-500 hover:bg-red-600"
          text="Change Password"
        />
      </div>
    </div>
  );
}
