import { TransferMoneyForm } from "@/components/TransferMoneyForm";

export const metadata = {
  title: "Transfer - Sistya Bank",
  description:
    "Transfer money to your family and friends just on your fingertips",
};

export default function TransferPage() {
  return (
    <div className="min-h-[calc(100vh-3rem)] bg-gradient-to-br from-gray-100 to-gray-300 p-4 flex items-center justify-center">
      <TransferMoneyForm />
    </div>
  );
}
