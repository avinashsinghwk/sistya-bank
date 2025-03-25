"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "./UserAvatar";
import { signOut } from "next-auth/react";
import { MyLink } from "./MyLink";
import {
  LogOut,
  User,
  ShieldCheck,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

export function DropMenu({ username }: { username: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none cursor-pointer transition-transform duration-200 hover:scale-105">
          <UserAvatar text={username[0] || ""} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg animate-fadeIn">
        <DropdownMenuLabel className="flex items-center gap-3 p-2 font-semibold text-gray-800">
          <div className="flex-shrink-0">
            <span className="font-bold text-xs flex items-center justify-center rounded-full bg-amber-600 text-white h-8 w-8">
              {username[0]!.toUpperCase()}
            </span>
          </div>
          <span
            className="truncate text-gray-700 text-base max-w-[150px] md:max-w-[200px]"
            title={username}
          >
            {username}
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-md">
          <MyLink
            href="/account"
            className="w-full h-full flex items-center gap-2 py-2 px-2"
          >
            <User size={18} />
            Profile
          </MyLink>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-md">
          <MyLink
            href="/policy"
            className="w-full h-full flex items-center gap-2 py-2 px-2"
          >
            <ShieldCheck size={18} />
            Our Policy
          </MyLink>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-md">
          <MyLink
            href="https://github.com/avinashsinghwk"
            changeTab={true}
            className="w-full h-full flex items-center gap-2 py-2 px-2"
          >
            <Github size={18} />
            Developer
          </MyLink>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-md">
          <MyLink
            href="https://github.com/avinashsinghwk/sistya-bank"
            changeTab={true}
            className="w-full h-full flex items-center gap-2 py-2 px-2"
          >
            <Github size={18} />
            Github
          </MyLink>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-md">
          <MyLink
            href="https://x.com/avinashsinghwk"
            changeTab={true}
            className="w-full h-full flex items-center gap-2 py-2 px-2"
          >
            <Twitter size={18} />
            Twitter
          </MyLink>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-md">
          <MyLink
            href="https://www.linkedin.com/in/avinash-singh-a27769239"
            changeTab={true}
            className="w-full h-full flex items-center gap-2 py-2 px-2"
          >
            <Linkedin size={18} />
            LinkedIn
          </MyLink>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex items-center gap-2 hover:bg-red-100 dark:hover:bg-red-800 transition-colors rounded-md text-red-600 dark:text-red-400 cursor-pointer"
          variant="destructive"
          onClick={async () => {
            await signOut();
          }}
        >
          <span className="h-full flex items-center gap-2 py-2 px-2">
            <LogOut size={18} />
            Log out
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
