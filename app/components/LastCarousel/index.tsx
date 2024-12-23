'use client';
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

import { Product } from "./Product";

type Product = {
  src: string;
};
export default function LastBanner() {
  const products: Product[] = [
    { src: "/images/product/p1.png" },
    { src: "/images/product/p2.png" },
    { src: "/images/product/p3.png" },
    { src: "/images/product/p4.png" },
    { src: "/images/product/p1.png" },
    { src: "/images/product/p2.png" },
    { src: "/images/product/p3.png" },
    { src: "/images/product/p4.png" }
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="custom-container">
      <div className="relative md:w-3/4 mx-auto py-20 md:py-20 grid grid-rows-1 gap-5">
        <div className="text-space md:mb-10">
          <h2 className="text-slate-950 dark:text-white text-center font-bold text-2xl md:text-2xl mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            aliquid tempore et hic incidunt culpa iure ipsam assumenda saepe.
          </h2>
          <p className="text-slate-950 dark:text-white text-center text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            aliquid tempore et hic incidunt culpa iure ipsam assumenda saepe
            aspernatur odio veritatis perspiciatis earum, molestiae, nisi,
            tempora doloribus totam consequatur.
          </p>
        </div>

        <div className="flex justify-center align-middle">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full lg:w-3/4"
          >
            <CarouselContent>
              {products.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <Product src={item.src} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
