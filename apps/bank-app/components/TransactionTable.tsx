"use client";
import { Transaction } from "@/actions/AllTransactions";
import { transactionSort } from "@/hooks/transactionSort";
import { useSession } from "next-auth/react";
import { TransactionBox } from "./custom/TransactionBox";

export function TransactionTable({
  trxns,
  type,
}: {
  trxns: Transaction[];
  type: "send" | "received" | "all";
}) {
  const { data: session } = useSession();
  if (!session || !session.user || !session.user.id) {
    return null;
  }

  transactionSort(trxns);

  return (
    <div className="bg-white p-4 md:p-6 mt-4 md:mt-6 rounded-2xl shadow-lg">
      <div className="flex flex-col gap-4">
        {trxns.length > 0 ? (
          trxns.map((tx) => (
            <TransactionBox
              key={tx.id}
              accountId={session.user.id}
              type={type}
              tx={tx}
            />
          ))
        ) : (
          <div className="text-center text-gray-500 py-6">
            No transactions found
          </div>
        )}
      </div>
    </div>
  );
}
