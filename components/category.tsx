import { GroupedData, Product } from "@/app/__lib/types";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface PropsCategory {
  data: GroupedData;
  onMouseEnter: () => void;
}

interface PropsCatProducts {
  products: Product[];
  onMouseExit: () => void;
}

function Category({ data, onMouseEnter }: PropsCategory) {
  return (
    <button
      className="cursor-pointer px-2 py-1"
      type="button"
      onMouseEnter={onMouseEnter}
    >
      {data.categoryName}
    </button>
  );
}


export function CatProducts({products, onMouseExit}: PropsCatProducts) {
  const [isExiting, setIsExiting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { y: -12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.25, ease: "power2.out" }
      );
    }
  }, []); 

  const handleExit = () => {
    if (containerRef.current && !isExiting) {
      setIsExiting(true);
      gsap.to(containerRef.current, {
        y: -12,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          onMouseExit(); 
        }
      });
    }
  };

  if (products.length === 0) return null;

  return (
    <div
        ref={containerRef}
        className="absolute left-0 right-0 top-full pt-2 flex justify-center"
        onMouseLeave={handleExit}
      >
        <div className="absolute top-0 left-0 right-0 h-2" />
        
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-6xl w-full mx-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-sm">
                <Image
                  src={products[0].imageUrl}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={`${products[0].tag} category`}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Available Items
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {products.map((item, index) => (
                  <li
                    key={index}
                    className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-gray-700 text-sm"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}


export default Category;