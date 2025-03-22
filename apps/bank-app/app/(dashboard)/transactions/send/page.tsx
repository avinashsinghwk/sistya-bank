"use client";
import { Transaction } from "@/actions/AllTransactions";
import SendTransactions from "@/actions/SendTransactions";
import { TransactionTableSkleton } from "@/components/custom/TransactionTableSkleton";
import { TransactionTable } from "@/components/TransactionTable";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function SendTransactionsPage() {
  const [trxns, setTrxns] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function main() {
      const res = await SendTransactions();
      if (!res.success) {
        toast.error(res.message);
      } else {
        if (res.trxns) {
          setTrxns(res.trxns);
          setLoading(false);
        }
      }
    }
    main();
  }, []);
  return (
    <div>
      {loading ? (
        Array.from({ length: 3 }).map((_, index) => (
          <TransactionTableSkleton key={index} />
        ))
      ) : (
        <TransactionTable type="send" trxns={trxns} />
      )}
    </div>
  );
}
