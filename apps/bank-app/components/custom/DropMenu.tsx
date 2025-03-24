"use client";
import { Button } from "@/components/ui/button";
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

export function DropMenu({ username }: { username: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="outline-none cursor-pointer" variant={"ghost"}>
          <UserAvatar text={username[0] || ""} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{`Hii, ${username.split(" ")[0]}`}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <MyLink href="/account" className="w-full h-full">
            Profile
          </MyLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MyLink href="/policy" className="w-full h-full">
            Our Policy
          </MyLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MyLink
            href="https://github.com/avinashsinghwk"
            changeTab={true}
            className="w-full h-full"
          >
            Developer
          </MyLink>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <MyLink
            href="https://github.com/avinashsinghwk/sistya-bank"
            changeTab={true}
            className="w-full h-full"
          >
            Github
          </MyLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MyLink
            href="https://x.com/avinashsinghwk"
            changeTab={true}
            className="w-full h-full"
          >
            Twitter
          </MyLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MyLink
            href="https://www.linkedin.com/in/avinash-singh-a27769239"
            changeTab={true}
            className="w-full h-full"
          >
            Linkdin
          </MyLink>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <button
            className="w-full h-full text-start cursor-pointer"
            onClick={async () => {
              await signOut();
            }}
          >
            Log out
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
