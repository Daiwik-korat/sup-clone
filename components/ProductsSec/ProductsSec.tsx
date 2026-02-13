"use client";
import { useRef } from "react";
import ProductCard from "./productCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/__lib/store";

function ProductsSec() {
  const { productBundle, loading: productLoading } = useSelector(
    (state: RootState) => state.products,
  );

  const products = productBundle.products;

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth / 4;

      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (productLoading) {
    return <div className="text-center p-10">Loading Products...</div>;
  }

  return (
    <section className="flex flex-col w-screen items-center justify-center py-5 md:py-10 lg:py-15">
      <div className="flex flex-col w-[90%] lg:w-[80%]">
        <div className="flex justify-between items-center w-full mb-6">
          <p className="text-black font-bold md:text-3xl lg:text-5xl xl:text-6xl">
            Our Products
          </p>

          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => scrollSlider("left")}
              className="rounded-full bg-amber-200 hover:bg-white transition-colors cursor-pointer w-12 h-12 flex justify-center items-center shadow-md active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => scrollSlider("right")}
              className="rounded-full bg-amber-200 hover:bg-white transition-colors cursor-pointer w-12 h-12 flex justify-center items-center shadow-md active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {productLoading ? (
          <div className="flex justify-center items-center text-2xl">
            Loading Products
          </div>
        ) : (
          <div
            ref={sliderRef}
            className="w-full flex overflow-x-auto scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((item, index) => (
              <ProductCard
                key={index}
                url={item.imageUrl}
                name={item.name}
                category={item.tag}
                price={item.price}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductsSec;
