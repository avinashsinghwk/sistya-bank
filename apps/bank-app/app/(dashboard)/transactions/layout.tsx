import { ArrowLeftRight } from "lucide-react";
import TransactionTabs from "@/components/custom/TransactionTabs";

export const metadata = {
  title: "Transaction - Sistya Bank",
  description: "Know your transactions details here",
};

export default function TransactionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-600 flex items-center gap-2">
          <ArrowLeftRight className="w-6 h-6" /> Transactions History
        </h1>
        <TransactionTabs />
      </div>
      {children}
    </div>
  );
}
