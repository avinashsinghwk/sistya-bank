import { Transaction } from "@/actions/AllTransactions";
import { TransactionBy } from "./TransactionBy";

export function TransactionBox({
  tx,
  type,
  accountId,
}: {
  tx: Transaction;
  accountId: string;
  type: "send" | "received" | "all";
}) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg text-gray-800">
          ₹{tx.amount}
        </span>
        <span
          className={`text-sm font-semibold ${
            tx.status === "SUCCESS"
              ? "text-green-600"
              : tx.status === "PENDING"
                ? "text-yellow-600"
                : "text-red-600"
          }`}
        >
          {tx.status}
        </span>
      </div>
      <TransactionBy
        accountId={accountId}
        sender={tx.sender}
        receiver={tx.receiver}
        type={type}
      />
      <div className="text-xs text-gray-500 mt-2">
        <strong>Time:</strong> {tx.startedAt.toLocaleString()}
      </div>
      <div className="text-xs text-gray-400">
        <strong>ID:</strong> {tx.id}
      </div>
    </div>
  );
}
