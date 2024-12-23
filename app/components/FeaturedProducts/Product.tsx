import {
    Card,
    CardContent
  } from "@/components/ui/card";
import Image from "next/image";

type Product = {
    src: string
}

export const Product = ({src}: Product) => {
  return (
    <Card className="bg-white dark:bg-white border-none">
    <CardContent className="relative flex aspect-square items-center justify-center p-6">
      <Image
        className="absolute object-contain rounded-xl p-10"
        src={src}
        alt={`Product`}
        layout="fill"
      />
    </CardContent>
  </Card>
  )
}
