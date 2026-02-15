"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";

interface Props {
  url: string;
  name: string;
  category: string;
  price: number;
  ChangeFun?: (num: number) => void;
}

function ProductCard(props: Props) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current && props.ChangeFun) {
      props.ChangeFun(elementRef.current.offsetWidth);
    }
  }, [props.ChangeFun]);

  return (
    <div
      ref={elementRef}
      className="w-full sm:w-75 md:w-[45%] lg:w-[30%] xl:w-[23%] shrink-0 select-none snap-start"
    >
      <div className="bg-gray-100 rounded-lg p-4 h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
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
          <h3
            className="text-lg font-bold text-gray-800 w-full truncate"
            title={props.name}
          >
            {props.name}
          </h3>
          <p className="text-amber-600 font-bold text-xl">${props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
