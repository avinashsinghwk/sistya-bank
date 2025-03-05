"use client";

import { Eye, EyeOff } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";

interface PasswordInputProps {
  placeholder: string;
  onChange: (value: string) => void;
  icon: React.ReactNode;
}

export function PasswordInput({
  placeholder,
  onChange,
  icon,
}: PasswordInputProps) {
  const [type, setType] = useState<"text" | "password">("password");
  return (
    <div className="relative w-full">
      <span className="absolute left-2 bottom-2">{icon}</span>
      <Input
        onChange={(e) => {
          onChange(e.target.value);
        }}
        type={type}
        placeholder={placeholder}
        className="pl-8 focus-visible:border-2 focus-visible:border-red-700 placeholder:font-light font-bold text-slate-800"
      />
      <button
        onClick={() => setType((t) => (t == "password" ? "text" : "password"))}
        className="absolute bottom-2 right-3 cursor-pointer"
      >
        {type == "text" ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    </div>
  );
}
