import ReceivedTransactions from "@/actions/ReceivedTransactions";
import { TransactionTable } from "@/components/TransactionTable";

export default async function ReceivedTransactionsPage() {
  const res = await ReceivedTransactions();

  if (!res.success || !res.trxns) {
    return <p className="text-red-500">Failed to fetch transactions.</p>;
  }

  return <TransactionTable type="received" trxns={res.trxns} />;
}
