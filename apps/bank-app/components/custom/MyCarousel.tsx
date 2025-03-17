"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";

export function MyCarousel() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
      className="relative w-full max-w-3xl mx-auto"
    >
      <CarouselContent>
        {["/bank.webp", "/man.webp", "/woman.webp", "/queue.webp"].map(
          (src, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center"
            >
              <img
                className="w-full h-[60vh] object-cover rounded-lg shadow-lg"
                src={src}
                alt={`Slide ${index + 1}`}
              />
            </CarouselItem>
          ),
        )}
      </CarouselContent>
      {/* Navigation Buttons */}
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  );
}
