import { MyLink } from "@/components/custom/MyLink";
import { RegisterForm } from "@/components/RegisterForm";
import { Label } from "@/components/ui/label";
import { Landmark } from "lucide-react";

export default async function RegisterPage() {
  return (
    <div className="flex items-center justify-center w-full h-screen relative">
      <div className="absolute top-3 left-3">
        <MyLink className="" href="/">
          <Label className="cursor-pointer font-bold">
            <Landmark color="red" size={24} /> Sistya Bank
          </Label>
        </MyLink>
      </div>
      <RegisterForm />
    </div>
  );
}
