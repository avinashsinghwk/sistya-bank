"use client";
import { useRouter } from "next/navigation";
import { Card } from "./Card";

export function Service({
  icon,
  title,
  route,
}: {
  icon: React.ReactNode;
  title: string;
  route: string;
}) {
  const router = useRouter();

  function handleCardClick() {
    router.push(route);
  }

  return (
    <div
      onClick={handleCardClick}
      className="cursor-pointer group perspective-1000"
    >
      <Card className="flex flex-col items-center justify-center gap-2 p-3 sm:p-5 lg:p-6 w-full h-36 sm:h-44 md:h-52 lg:h-56 xl:h-60 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-red-500/50 transform group-hover:rotate-1 group-hover:scale-105">
        <span className="text-2xl md:text-3xl lg:text-4xl">{icon}</span>
        <h2 className="font-semibold text-sm md:text-base lg:text-lg text-center">
          {title}
        </h2>
      </Card>
    </div>
  );
}
