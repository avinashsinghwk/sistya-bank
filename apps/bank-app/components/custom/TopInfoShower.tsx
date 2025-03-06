"use client";
import { X } from "lucide-react";
interface TopInfoShowerProps {
  children: React.ReactNode;
  hide: boolean;
  setHide: (value: boolean) => void;
}
export function TopInfoShower({ children, hide, setHide }: TopInfoShowerProps) {
  if (hide) return null;
  return (
    <div
      className={`w-full bg-red-700 text-white h-12 absolute top-0 left-0 right-0`}
    >
      <div className="w-full h-full relative flex items-center justify-center">
        {children}
        <button
          className="cursor-pointer absolute top-1 right-2"
          onClick={() => {
            setHide(true);
          }}
        >
          <X />
        </button>
      </div>
    </div>
  );
}
