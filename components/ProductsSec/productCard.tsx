"use client";
import Image from "next/image";

interface Props {
  url: string;
  name: string;
  category: string;
  price: number;
}

function ProductCard({ url, name, category, price }: Props) {
  return (
    <div className="min-w-[100%] md:min-w-[50%] lg:min-w-[25%] p-2 select-none">
      <div className="bg-gray-100 rounded-lg p-4 h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-400">
        
        <div className="flex flex-col items-center w-full mb-4">
          <div className="relative w-full h-48 mb-3">
            <Image
              src={url}
              alt={name}
              fill
              className="object-contain" 
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <span className="text-sm text-gray-500 font-medium uppercase tracking-wide text-center">
            {category}
          </span>
        </div>

        <div className="flex flex-col items-start w-full gap-1 border-t border-gray-200 pt-2">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-1 text-left w-full">
            {name}
          </h3>
          <p className="text-amber-600 font-bold text-xl text-left">
            ${price}
          </p>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;