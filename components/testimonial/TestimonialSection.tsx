"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import { useAppSelector } from "@/app/__lib/hooks";
import { RootState } from "@/app/__lib/store";
import TestimonialCard from "./TestimonialCard";
import { Review } from "@/app/__lib/types";

function TestimonialSec() {
  const swiperRef = useRef<SwiperType>(null);

  const {
    review,
    loading: reviewLoading,
    error: reviewError,
  } = useAppSelector((state: RootState) => state.review);

  if (!reviewLoading && reviewError) {
    throw new Error("Testimonials Failed to load");
  }

  const reviews: Review[] = review;

  if (reviewLoading) {
    return <div className="text-center p-10">Loading Reviews...</div>;
  }

  if (reviewError) {
    return <div className="text-center p-10">Reviews Can't be Found</div>;
  }

  return (
    <section className="flex flex-col w-screen items-center justify-center py-30">
      <div className="flex flex-col w-[90%] max-w-380 lg:w-[80%]">
        <div className="flex justify-between items-center w-full mb-6">
          <p className="text-black font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            What Our Client Says about us
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
          className="w-full pb-4 pt-10 px-2"
        >
          {reviews.map((item: Review, index: number) => (
            <SwiperSlide key={index} className="!w-auto">
              <TestimonialCard
                star={item.rating}
                title={item.title}
                customerName={item.customerName}
                content={item.content}
                isVerified={item.isVerified || item.isVerified}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialSec;