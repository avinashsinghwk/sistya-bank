"use client";

import { MyLink } from "@/components/custom/MyLink";
import { usePathname } from "next/navigation";

export default function TransactionTabs() {
  const pathname = usePathname();
  const activeTab = pathname.split("/").pop();

  const getLinkClass = (tab: string) =>
    `px-4 py-2 rounded font-medium transition ${
      activeTab === tab
        ? "bg-red-600 text-white"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`;

  return (
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
  );
}
