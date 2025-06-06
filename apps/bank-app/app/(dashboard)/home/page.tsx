import { Service } from "@/components/custom/Service";
import {
  ArrowLeftRight,
  History,
  IndianRupee,
  MoveDownLeft,
  MoveUpRight,
  ShieldCheck,
  Headset,
  Newspaper,
} from "lucide-react";

export const metadata = {
  title: "Home - Sistya Bank",
  description: "Welcome to Sistya Bank, your trusted financial partner.",
};

export default function HomePage() {
  const services = [
    {
      icon: <IndianRupee color="red" />,
      title: "Check Balance",
      route: "/home/checkbalance",
    },
    {
      icon: <ArrowLeftRight color="red" />,
      title: "Transfer Money",
      route: "/home/transfer",
    },
    {
      icon: <History color="red" />,
      title: "All Transactions",
      route: "/transactions/all",
    },
    {
      icon: <MoveUpRight color="red" />,
      title: "Send Transactions",
      route: "/transactions/send",
    },
    {
      icon: <MoveDownLeft color="red" />,
      title: "Received Transactions",
      route: "/transactions/received",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Hero Section */}
      <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold">Welcome to Sistya Bank</h1>
        <p className="mt-2 text-lg">
          Secure, Fast, and Reliable Banking at Your Fingertips
        </p>
      </div>

      {/* Services Section */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {services.map((service, index) => (
          <Service
            key={index}
            icon={service.icon}
            title={service.title}
            route={service.route}
          />
        ))}
      </div>

      {/* Promotions & Offers */}
      <div className="bg-gray-100 p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-red-600">
          Exclusive Offers for You
        </h2>
        <ul className="mt-2 space-y-2 text-gray-700">
          <li>💳 Get 10% cashback on your first transaction</li>
          <li>🎁 Refer a friend and earn ₹500</li>
          <li>📈 New Investment Plans with High Returns</li>
        </ul>
      </div>

      {/* Security & Support */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow flex items-center gap-3">
          <ShieldCheck className="text-red-500 w-10 h-10" />
          <div>
            <h3 className="font-bold text-gray-900">Secure Banking</h3>
            <p className="text-sm text-gray-600">
              Your transactions are protected with advanced encryption.
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow flex items-center gap-3">
          <Headset className="text-red-500 w-10 h-10" />
          <div>
            <h3 className="font-bold text-gray-900">24/7 Support</h3>
            <p className="text-sm text-gray-600">
              Need help? Our support team is available anytime.
            </p>
          </div>
        </div>
      </div>

      {/* News & Updates */}
      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-red-600 flex items-center gap-2">
          <Newspaper className="w-6 h-6 text-red-500" /> Bank Updates
        </h2>
        <ul className="mt-2 space-y-2 text-gray-700">
          <li>🏦 New branch opened in Mumbai</li>
          <li>📢 Revised interest rates for savings accounts</li>
          <li>🛡️ Beware of phishing scams – Stay secure</li>
        </ul>
      </div>
    </div>
  );
}
