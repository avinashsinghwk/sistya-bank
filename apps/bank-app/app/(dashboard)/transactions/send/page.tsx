import SendTransactions from "@/actions/SendTransactions";
import { TransactionTable } from "@/components/TransactionTable";

export default async function SendTransactionsPage() {
  const res = await SendTransactions();

  if (!res.success || !res.trxns) {
    return <p className="text-red-500">Failed to fetch sent transactions.</p>;
  }

  return <TransactionTable type="send" trxns={res.trxns} />;
}
