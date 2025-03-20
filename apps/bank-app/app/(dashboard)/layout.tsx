"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { NavBar } from "@/components/NavBar";
import { SideBar } from "@/components/SideBar";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isSideBar, setIsSideBar] = useState<boolean>(false);

  if (status === "loading") return null;

  if (!session || !session.user || !session.user.name) {
    router.push("/login");
    return null;
  }

  return (
    <div>
      <NavBar setIsSideBar={setIsSideBar} session={session} />
      <div className="w-full flex">
        <SideBar setIsSideBar={setIsSideBar} isSideBar={isSideBar} />
        <div className="w-full sm:w-[calc(100vw-18rem)]">{children}</div>
      </div>
    </div>
  );
}
