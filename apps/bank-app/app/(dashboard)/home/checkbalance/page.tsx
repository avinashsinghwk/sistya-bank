"use client";

import { useState } from "react";
import { LockKeyhole } from "lucide-react";
import CheckBalance from "@/actions/CheckBalance";
import { LoaderButton } from "@/components/custom/LoaderButton";
import { PasswordInput } from "@/components/custom/PasswordInput";
import { toast } from "sonner";

export default function CheckBalancePage() {
  const [password, setPassword] = useState("");
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const [balance, setBalance] = useState<number | null>(null);

  const handleCheckBalance = async () => {
    if (!password) {
      toast.error("Please enter your password.");
      return;
    }
    setBalance(null);
    setIsBtnLoading(true);
    const response = await CheckBalance(password);
    setIsBtnLoading(false);

    if (!response.success || !response.balance) {
      toast.error(response.message || "Failed to fetch balance.");
    } else {
      setPassword("");
      setBalance(response.balance);
      toast.success("Balance retrieved successfully!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-[calc(100vh-3rem)] bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2 text-red-600">
          Check Balance
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Enter your password to view your account balance.
        </p>
        <div className="flex flex-col gap-4">
          <PasswordInput
            placeholder="Enter Password"
            icon={<LockKeyhole color="red" size={18} />}
            value={password}
            onChange={(value) => {
              setPassword(value);
            }}
          />
          <LoaderButton
            isDisabled={!password}
            isLoader={isBtnLoading}
            onClick={handleCheckBalance}
            className="w-full cursor-pointer bg-red-500 hover:bg-red-600"
            text="Check Balance"
          />
        </div>
        {balance !== null && (
          <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg text-center">
            <p className="text-green-700 font-semibold text-lg">
              Your balance:
            </p>
            <p className="text-green-900 text-2xl font-bold">Rs {balance}</p>
          </div>
        )}
      </div>
    </div>
  );
}
