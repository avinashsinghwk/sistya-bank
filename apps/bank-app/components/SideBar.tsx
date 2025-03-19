"use client";
import { CircleUser, History, Home, Landmark, X } from "lucide-react";
import { SidebarItem } from "./SideBarItem";
import { MyLink } from "./custom/MyLink";
import { Label } from "./ui/label";

export function SideBar({
  isSideBar,
  setIsSideBar,
}: {
  isSideBar: boolean;
  setIsSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className={`sm:w-72 w-0 transition-all duration-300`}>
      <div
        className={`bg-gray-50 border-r-2 border-gray-200 flex flex-col h-screen sm:h-[calc(100vh-3rem)] w-72 fixed top-0 left-0 bottom-0 sm:top-12 z-30 ${
          isSideBar ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 transition-transform duration-300`}
      >
        <div className="flex sm:hidden justify-between p-4">
          <MyLink className="" href="/home">
            <Label className="cursor-pointer font-bold flex">
              <Landmark color="red" size={24} /> Sistya Bank
            </Label>
          </MyLink>
          <button onClick={() => setIsSideBar(false)}>
            <X />
          </button>
        </div>

        {/* Sidebar items */}
        <div className="flex flex-col gap-2 pt-40 z-30">
          <SidebarItem href="/home" title="Home" icon={<Home />} />
          <SidebarItem href="/account" title="Account" icon={<CircleUser />} />
          <SidebarItem
            href="/transactions"
            title="History"
            icon={<History />}
          />
        </div>
      </div>
    </div>
  );
}
