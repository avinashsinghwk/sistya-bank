"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export function ServerButtonRouter({
  children,
  className,
  to,
}: {
  children: React.ReactNode;
  className?: string;
  to: string;
}) {
  const router = useRouter();

  return (
    <Button
      className={className}
      onClick={() => {
        router.push(to);
      }}
    >
      {children}
    </Button>
  );
}
