"use client";
import Image from "next/image";

interface Props {
  url: string;
  title: string;
  desc: string;
}

function GuideCard({ url, title, desc }: Props) {
  return (
    <div
      className="
      relative flex shrink-0 select-none
      flex-col max-[991px]:flex-row
      w-1/2
      max-[460px]:w-full
      min-[991px]:w-95
      min-[1200px]:w-100
      min-[1500px]:w-105
      gap-3
    "
    >
      <div
        className="
        relative overflow-hidden rounded-2xl shrink-0
        w-[40%] aspect-square
        max-[991px]:max-w-45
        min-[991px]:w-full"
      >
        <Image
          src={url}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 991px) 20vw, 25vw"
        />
      </div>

      <div className="flex flex-col justify-center min-[991px]:justify-start min-[991px]:w-full w-[60%] min-w-0">
        <h3
          className="
            w-full leading-tight font-medium mb-1
            text-[clamp(18px,3vw,30px)]
            min-[991px]:text-[2rem]"
        >
          {title}
        </h3>
        <p
          className="
          w-full leading-snug opacity-60 line-clamp-3
          text-[clamp(13px,2vw,17px)]
          min-[991px]:text-[1rem]"
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

export default GuideCard;