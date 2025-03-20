"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRef } from "react";

export function MyCarousel() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  const images = [
    { src: "/bank.webp", alt: "Bank" },
    { src: "/man.webp", alt: "Man" },
    { src: "/woman.webp", alt: "Woman" },
    { src: "/queue.webp", alt: "Queue" },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
      className="relative w-full max-w-3xl mx-auto"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="flex items-center justify-center">
            <div className="relative w-full h-[60vh]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg shadow-lg"
                priority={index === 0} // Prioritize the first image
                unoptimized
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Navigation Buttons */}
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  );
}
