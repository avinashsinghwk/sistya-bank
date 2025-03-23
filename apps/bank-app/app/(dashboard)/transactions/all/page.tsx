import AllTransactions from "@/actions/AllTransactions";
import { TransactionTable } from "@/components/TransactionTable";

export default async function AllTransactionsPage() {
  const res = await AllTransactions();

  if (!res.success || !res.trxns) {
    return <p className="text-red-500">Failed to fetch all transactions.</p>;
  }

  return <TransactionTable type="all" trxns={res.trxns} />;
}
