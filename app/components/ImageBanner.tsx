"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export default function ImageBanner() {
  return (
    <div className="w-full banner-2">
      <div className="container h-auto mx-auto px-4 py-10 md:px-20 md:py-10 grid grid-cols-1 gap-5">
        <div className="relative w-full h-[200px] md:h-[500px]">
          <Image
            className="rounded-xl"
            src="/images/img-1.jpg"
            alt="vacuum"
            layout="fill"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute w-full bottom-3 md:bottom-3 z-20 flex justify-center">
            <Button size="lg" className="w-11/12 md:w-auto">
              <ShoppingCart /> Shop now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
