"use client";
import { MyLink } from "@/components/custom/MyLink";
import { ArrowLeftRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function TransactionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Get the last part of the route
  const activeTab = pathname.split("/").pop();

  // Function to set active styles
  const getLinkClass = (tab: string) =>
    `px-4 py-2 rounded font-medium transition ${
      activeTab === tab
        ? "bg-red-600 text-white"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`;

  return (
    <div>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-600 flex items-center gap-2">
          <ArrowLeftRight className="w-6 h-6" /> Transactions History
        </h1>
        <div className="mt-4 flex gap-4">
          <MyLink href="all" className={getLinkClass("all")}>
            ALL
          </MyLink>
          <MyLink href="received" className={getLinkClass("received")}>
            RECEIVED
          </MyLink>
          <MyLink href="send" className={getLinkClass("send")}>
            SEND
          </MyLink>
        </div>
      </div>
      {children}
    </div>
  );
}
