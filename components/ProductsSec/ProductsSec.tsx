"use client";
import ProductCard from "./productCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/__lib/store";
import { Product } from "@/app/__lib/types";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

function ProductsSec() {
  const slider = useRef<HTMLDivElement>(null);
  const cardWidthRef = useRef<number>(0);

  const handleCardWidth = (width: number) => {
    cardWidthRef.current = width;
  };

  const { productBundle, loading: productLoading } = useSelector(
    (state: RootState) => state.products,
  );
  const products: Product[] = productBundle.products;

  const animateSliderRight = () => {
    if (slider.current) {
      const scrollAmount = cardWidthRef.current;

      gsap.to(slider.current, {
        scrollLeft: slider.current.scrollLeft + scrollAmount,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const animateSliderLeft = () => {
    if (slider.current) {
      const scrollAmount = cardWidthRef.current;

      gsap.to(slider.current, {
        scrollLeft: slider.current.scrollLeft - scrollAmount,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  if (productLoading) {
    return <div className="text-center p-10">Loading Products...</div>;
  }

  return (
    <section className="flex flex-col w-screen items-center justify-center py-5 md:py-10 lg:py-15">
      <div className="flex flex-col w-[90%] max-w-380 lg:w-[80%]">
        <div className="flex justify-between items-center w-full mb-6">
          <p className="text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
            Our Products
          </p>
          <div className="flex gap-2">
            <button
              onClick={animateSliderLeft}
              className="rounded-full bg-amber-200 p-3 shadow-md hover:bg-white active:scale-95 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={animateSliderRight}
              className="rounded-full bg-amber-200 p-3 shadow-md hover:bg-white active:scale-95 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={slider}
          className="relative w-full flex overflow-hidden gap-4 no-scrollbar pb-4 pt-10"
        >
          {products.map((item, index) => (
            <ProductCard
              key={index}
              url={item.imageUrl}
              name={item.name}
              category={item.tag}
              price={item.price}
              ChangeFun={index === 0 ? handleCardWidth : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSec;
