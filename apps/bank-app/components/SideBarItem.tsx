"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const SidebarItem = ({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const selected =
    pathname.includes(href) ||
    (pathname.includes("transactions") && href.includes("transactions"));

  return (
    <div
      className={`flex ${selected ? "text-red-600" : "text-red-300"} cursor-pointer  p-2 pl-8`}
      onClick={() => {
        router.push(href);
      }}
    >
      <div className="pr-2">{icon}</div>
      <div
        className={`font-bold ${selected ? "text-red-600" : "text-red-300"}`}
      >
        {title}
      </div>
    </div>
  );
};
