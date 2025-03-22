import { Transaction } from "@/actions/AllTransactions";

export function transactionSort(trxns: Transaction[]) {
  return trxns.sort((a, b) => b.startedAt.getTime() - a.startedAt.getTime());
}
