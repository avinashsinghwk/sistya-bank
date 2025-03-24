"use client";
import { LockKeyhole, PhoneCall } from "lucide-react";
import { InputBox } from "./custom/InputBox";
import { useState } from "react";
import { PasswordInput } from "./custom/PasswordInput";
import { LoaderButton } from "./custom/LoaderButton";
import { toast } from "sonner";

export function TransferMoneyForm() {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [password, setPassword] = useState<string>("");
  const [isBtnLoading, setIsButtonLoading] = useState<boolean>(false);

  async function handleTransferButton() {
    if (!number || !amount || !password) {
      toast.error("All fields are required");
      return;
    }
    try {
      setIsButtonLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/api/transfermoney`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            receiverNumber: number,
            amount: Number(amount),
            password,
          }),
        },
      );
      const response = await res.json();
      if (!res.ok) {
        throw new Error(
          response.message || `Error: ${res.status} ${res.statusText}`,
        );
      }
      toast.success(response.message);
    } catch (e: unknown) {
      if (e instanceof Error) {
        toast.error(e.message);
      } else {
        toast.error("An unknown error occurred");
      }
    } finally {
      setAmount("");
      setPassword("");
      setNumber("");
      setIsButtonLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md p-6 shadow-2xl bg-white rounded-2xl border border-gray-200">
      <h2 className="text-red-600 text-xl font-bold text-center mb-4">
        Transfer Money
      </h2>
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Send to
          </label>
          <InputBox
            value={number}
            icon={<PhoneCall color="red" size={18} />}
            placeholder="Mobile Number"
            type="number"
            onChange={(value) => setNumber(value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount
          </label>
          <InputBox
            value={amount}
            icon={<PhoneCall color="red" size={18} />}
            placeholder="Enter amount"
            type="number"
            onChange={(value) => setAmount(value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <PasswordInput
            value={password}
            icon={<LockKeyhole color="red" size={18} />}
            onChange={(value) => {
              setPassword(value);
            }}
            placeholder="Enter your password"
          />
        </div>
        <LoaderButton
          isDisabled={false}
          isLoader={isBtnLoading}
          onClick={handleTransferButton}
          className="w-full cursor-pointer bg-red-500 hover:bg-red-600"
          text="Transfer Money"
        />
      </div>
    </div>
  );
}
