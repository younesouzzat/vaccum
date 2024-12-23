"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export default function MultiImgBanner() {
  return (
    <div className="custom-container">
      <div className="relative flex lg:flex-row flex-col lg:gap-x-20 lg:gap-y-0 gap-y-10 pt-28 lg:pb-60 pb-96">
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            className="absolute object-cover rounded-xl"
            src="/images/img-1.jpg"
            alt="vacuum"
            layout="fill"
          />
        </div>
        <div className="relative w-full">
          <p className="text-slate-950 dark:text-white text-center md:text-left text-xl mb-5 lg:mb-10 lg:mt-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            error maxime provident itaque! Libero impedit ea iure, officia nulla
            quam veritatis aliquam eos ratione doloremque explicabo non
            sapiente, sit commodi.
          </p>
          <Button className="w-full md:w-auto">
            <ShoppingCart /> Shop Now
          </Button>
        </div>
        <Image
          className="absolute object-cover rounded-xl bottom-20 lg:bottom-24 lg:right-0 w-full h-[250px] lg:w-[300px]"
          src="/images/img-1.jpg"
          alt="vacuum"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
