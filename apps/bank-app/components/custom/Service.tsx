"use client";
import { useRouter } from "next/navigation";
import { Card } from "./Card";

export function Service({
  icon,
  title,
  route,
}: {
  icon: any;
  title: string;
  route: string;
}) {
  const router = useRouter();
  function CardClick() {
    router.push(route);
  }
  return (
    <div onClick={CardClick}>
      <Card className="flex flex-col items-center justify-center gap-4 cursor-pointer">
        <span>{icon}</span>
        <h2 className="font-semibold">{title}</h2>
      </Card>
    </div>
  );
}
