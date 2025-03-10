"use client";

import { useEffect, useState } from "react";
import { PasswordInput } from "./custom/PasswordInput";
import { MyLink } from "./custom/MyLink";
import { LoaderButton } from "./custom/LoaderButton";
import { InputBox } from "./custom/InputBox";
import { LockKeyhole, PhoneCall } from "lucide-react";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isBtnDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [isBtnLoading, setIsButtonLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (number.length === 10 && password) setIsButtonDisabled(false);
    else setIsButtonDisabled(true);
  }, [number, password]);

  return (
    <div className="flex flex-col w-full sm:w-2/3 md:w-1/2 lg:w-1/3 shadow-lg p-4">
      <h1 className="font-sans text-3xl font-extrabold text-slate-800 text-center mb-8">
        Login to Sistya Bank
      </h1>
      <div className="w-full flex flex-col gap-6">
        <InputBox
          icon={<PhoneCall color="red" size={18} />}
          placeholder="Mobile Number"
          type="number"
          onChange={(value) => setNumber(value)}
        />
        <PasswordInput
          placeholder="Enter Password"
          icon={<LockKeyhole color="red" size={18} />}
          onChange={(value) => {
            setPassword(value);
          }}
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <MyLink
          className="font-semibold text-sm hover:text-blue-400 text-blue-300"
          href="/forgotpassword"
        >
          Forgot Password?
        </MyLink>

        <MyLink
          className="font-semibold text-sm hover:text-blue-400 text-blue-300"
          href="/register"
        >
          Create Account?
        </MyLink>
      </div>
      <div className="w-full mt-10">
        <LoaderButton
          isDisabled={isBtnDisabled}
          isLoader={isBtnLoading}
          onClick={async () => {
            setIsButtonLoading(true);
            setIsButtonDisabled(true);
            const res = await signIn("credentials", {
              redirect: false,
              number,
              password,
            });
            console.log(res);
            if (!res!.ok) {
              toast.error("Invalid credential");
            } else {
              toast.success("Login successfully");
              router.push("/home");
            }
            setIsButtonLoading(false);
          }}
          className="w-full cursor-pointer bg-red-500 hover:bg-red-600"
          text="Log In"
        />
      </div>
    </div>
  );
}
