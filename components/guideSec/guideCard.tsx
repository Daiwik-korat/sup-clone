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
        relative flex flex-shrink-0 select-none
        /* --- Mobile Styling (<991px) --- */
        /* Row layout. Width = (100% - 1 gap of 8px) / 2 */
        flex-row 
        w-[calc(50%-4px)]
        h-auto
        gap-2
        
        /* --- Desktop Styling (>=991px) --- */
        /* Column layout. Width = (100% - 3 gaps of 8px) / 4 */
        min-[991px]:flex-col 
        min-[991px]:w-[calc(25%-6px)] 
        min-[991px]:gap-2
      "
    >
      {/* Image Container */}
      <div
        className="
        relative overflow-hidden rounded-2xl flex-shrink-0
        /* Mobile: Small square */
        w-[35%] aspect-square
        /* Desktop: Full width large square */
        min-[991px]:w-full min-[991px]:aspect-square
      "
      >
        <Image
          src={url}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 991px) 20vw, 25vw"
        />
      </div>

      {/* Text Container */}
      <div className="flex flex-col justify-center min-[991px]:justify-start w-full">
        <h3 className="text-[14px] leading-tight font-medium mb-1 min-[991px]:text-[2rem] min-[991px]:mb-2">
          {title}
        </h3>
        <p className="text-[10px] leading-snug opacity-60 min-[991px]:text-[1rem] line-clamp-3">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default GuideCard;
