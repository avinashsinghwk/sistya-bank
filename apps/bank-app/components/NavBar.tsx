"use client";
import { Label } from "./ui/label";
import { MyLink } from "./custom/MyLink";
import { Landmark, MenuIcon } from "lucide-react";
import { DropMenu } from "./custom/DropMenu";
import { CustomButton } from "./custom/CustomButton";

export function NavBar({
  session,
  setIsSideBar,
}: {
  session: any;
  setIsSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <nav className="px-4 z-30 sticky top-0 w-full h-12 bg-gray-50 flex justify-between items-center border-b-2 border-gray-200">
      <div className="flex items-center">
        <MyLink className="hidden sm:flex" href="/home">
          <Label className="cursor-pointer font-bold flex">
            <Landmark color="red" size={24} /> Sistya Bank
          </Label>
        </MyLink>
        <CustomButton
          varient="ghost"
          onClick={() => {
            setIsSideBar(true);
          }}
          className="sm:hidden cursor-pointer"
        >
          <MenuIcon />
        </CustomButton>
      </div>
      <DropMenu username={`${session.user.name || ""}`} />
    </nav>
  );
}
