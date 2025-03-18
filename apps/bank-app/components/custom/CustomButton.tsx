"use client";
import { Button } from "../ui/button";

export function CustomButton({
  children,
  className,
  onClick,
  varient
}: {
  children: React.ReactNode;
  className?: string;
  onClick: any;
  varient?: 'default'| 'destructive' | 'outline' | 'secondary' | 'link' | 'ghost'
}) {
  return (
    <Button variant={varient} onClick={onClick} className={`cursor-pointer ${className}`}>
      {children}
    </Button>
  );
}
