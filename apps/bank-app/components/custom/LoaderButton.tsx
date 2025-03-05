"use client";

import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

interface LoaderButtonProps {
  text: string;
  isLoader: boolean;
  isDisabled: boolean;
  className: string;
  onClick: () => void;
}

export function LoaderButton({
  text,
  isLoader,
  className,
  onClick,
  isDisabled,
}: LoaderButtonProps) {
  return (
    <Button onClick={onClick} className={className} disabled={isDisabled}>
      {isLoader && <Loader2 className="animate-spin" />}
      {text}
    </Button>
  );
}
