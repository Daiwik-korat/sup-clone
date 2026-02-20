"use client";
import Image from "next/image";

interface Props {
  url: string;
  name: string;
  category: string;
  price: number;
}

function ProductCard(props: Props) {
  return (
    <div className="w-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] shrink-0 select-none">
      <div className="bg-gray-100 rounded-lg p-4 h-full flex flex-col justify-between hover:shadow-lg duration-300 transition-all hover:shadow-black-300 hover:scale-105">
        <div className="flex flex-col items-center w-full mb-4">
          <div className="relative w-full h-48 mb-3">
            <Image
              src={props.url}
              alt={props.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">
            {props.category}
          </span>
        </div>

        <div className="flex flex-col items-start w-full gap-1 border-gray-200 pt-2">
          <h3 className="text-lg font-bold text-gray-800 w-full truncate" title={props.name}>
            {props.name}
          </h3>
          <p className="text-amber-600 font-bold text-xl">${props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;