"use client";
import "swiper/css";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import ProductCard from "./productCard";
import { useAppSelector } from "@/app/__lib/hooks";
import { RootState } from "@/app/__lib/store";
import { Product } from "@/app/__lib/types";

function ProductsSec() {
  const swiperRef = useRef<SwiperType>(null);

  const { productBundle, loading: productLoading, error: productError } = useAppSelector(
    (state: RootState) => state.products,
  );

  if (productError && !productLoading) {
    throw new Error("Products Failed to load");
  }

  const products: Product[] = productBundle.products;

  if (productLoading) {
    return <div className="text-center p-10">Loading Products...</div>;
  }

  return (
    <section className="flex flex-col w-full items-center justify-center py-5 md:py-10 lg:py-15">
      <div className="flex flex-col w-[90%] max-w-380 lg:w-[80%]">
        <div className="flex justify-between items-center w-full mb-6">
          <p className="text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
            Our Products
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="rounded-full bg-amber-200 p-3 shadow-md hover:bg-white active:scale-95 transition-all z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="rounded-full bg-amber-200 p-3 shadow-md hover:bg-white active:scale-95 transition-all z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation]}
          spaceBetween={16} 
          slidesPerView={"auto"} 
          grabCursor={true} 
          className="w-full pb-4 pt-10"
        >
          {products.map((item, index) => (
            <SwiperSlide key={index} className="!w-auto"> 
              <ProductCard
                url={item.imageUrl}
                name={item.name}
                category={item.tag}
                price={item.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProductsSec;