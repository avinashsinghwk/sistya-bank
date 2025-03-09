import { MyLink } from "@/components/custom/MyLink";
import { Label } from "@/components/ui/label";
import { Landmark } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="absolute top-3 left-3 z-10">
        <MyLink className="" href="/">
          <Label className="cursor-pointer font-bold">
            <Landmark color="red" size={24} /> Sistya Bank
          </Label>
        </MyLink>
      </div>
      {children}
    </div>
  );
}
