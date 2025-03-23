import { TransactionTableSkleton } from "@/components/custom/TransactionTableSkleton";

export default function Loading() {
  return (
    <div>
      {Array.from({ length: 3 }).map((_, index) => (
        <TransactionTableSkleton key={index} />
      ))}
    </div>
  );
}
