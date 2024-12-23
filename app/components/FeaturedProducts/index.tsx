"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Product } from "./Product";

type Product = {
  src: string;
};

export default function FeaturedProducts() {
  const products: Product[] = [
    { src: "/images/product/p1.png" },
    { src: "/images/product/p2.png" },
    { src: "/images/product/p3.png" },
    { src: "/images/product/p4.png" },
  ];

  return (
    <div className="custom-container bg-slate-200">
      <div className="container h-auto mx-auto px-4 py-10 md:py-20 grid grid-cols-1 gap-2">
        <div className="title mb-10">
          <h2 className="text-slate-950 font-bold text-center text-2xl md:text-2xl md:mb-5">
            Featured products
          </h2>
          <p className="text-slate-950 text-center text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <div className="flex gap-2 justify-center align-middle relative">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full w-3/4"
          >
            <div className="hidden md:flex gap-x-3 justify-end mb-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
            <CarouselContent>
              {products.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Product src={item.src} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex md:hidden gap-x-3 justify-center mt-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
