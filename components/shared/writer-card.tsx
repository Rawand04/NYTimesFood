"use client";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

interface WriterCardProps {
  writer: { title: string; image: string };
}

const WriterCard = ({ writer }: WriterCardProps) => {
  return (
    <Card
      className="
        overflow-hidden
        bg-transparent
        border-0
        ring-0
        shadow-none
        font-franklin
        gap-2
        underline
        text-center
        shrink-0
        w-[120px]
        sm:w-[140px]
        md:w-[160px]
      "
    >
      <Link href="">
        <Image
          src={writer.image}
          alt={writer.title}
          width={120}
          height={120}
          className="object-cover rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 m-auto"
        />
      </Link>

      <CardContent className="p-0">
        <div className="line-clamp-2">{writer.title}</div>
      </CardContent>
    </Card>
  );
};

export default WriterCard;
