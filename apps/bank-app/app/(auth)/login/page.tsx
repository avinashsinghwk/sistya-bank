"use client";
import { MyLink } from "@/components/custom/MyLink";
import { LoginForm } from "@/components/LoginForm";
import { Label } from "@/components/ui/label";
import { Landmark } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex items-center p-6 sm:p-0 justify-center w-full h-screen relative">
      <div className="absolute top-3 left-3">
        <MyLink className="" href="/">
          <Label className="cursor-pointer font-bold">
            <Landmark color="red" size={24} /> Sistya Bank
          </Label>
        </MyLink>
      </div>
      <LoginForm />
    </div>
  );
}
