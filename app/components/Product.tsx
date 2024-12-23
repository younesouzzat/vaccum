"use client";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function Product() {
  return (
    <div className="custom-container bg-slate-200">
      <div className="h-auto mx-auto py-10 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="flex flex-col justify-center align-middle md:px-10 mb-10">
          <h2 className="text-slate-950 font-bold text-center md:text-left text-2xl md:text-2xl mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            accusamus eum amet nostrum quam vero enim asperiores.
          </h2>
          <p className="text-slate-950 text-center md:text-left text-lg mb-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            recusandae, quod suscipit, officia enim tempore nostrum quas
            reiciendis velit eaque ipsum aperiam mollitia exercitationem
            asperiores harum vitae dolorum repellat libero!
          </p>
          <div className="w-full flex justify-center md:justify-start">
            <Button size="lg" className="w-11/12 md:w-auto dark:bg-brand dark:text-white dark:hover:bg-[#495eb1] rounded-3xl">
              <ShoppingCart /> Shop now
            </Button>
          </div>
        </div>
        <div className="flex justify-center align-middle">
          <div className="relative w-full h-[500px]">
            <Image
              className="rounded-xl"
              src="/images/product/p2.png"
              alt="vacuum"
              layout="fill"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
