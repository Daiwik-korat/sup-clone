"use client";
import GuideCard from "./guideCard";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

interface DataItem {
  imgUrl: string;
  title: string;
  desc: string;
}

const GUIDE_DATA: DataItem[] = [
  {
    imgUrl:
      "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68db0c05e445f893e1bec67e_Prescriptions.avif",
    title: "Prescriptions",
    desc: "Medication & peptides you can buy from us, at discounted prices.",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/691b435c24cfaf4a07d48f10_marketplace-orange-bg-p-500.avif",
    title: "Supplements",
    desc: "Curated supplements and health products, cheaper than Amazon.",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68db0c4476b037b40ee2e998_Img%20Frame.avif",
    title: "Add-on Testing",
    desc: "Further advanced testing across gut health, cancer risk and toxins.",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/6909a982dbe21af11d0e9b06_Img%20Frame.avif",
    title: "Unlimited Concierge",
    desc: "Use your 24/7 message access to ask questions, our care team will answer within 24 hours on weekdays",
  },
];

function GuideSec() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="w-screen px-4 pt-16 overflow-x-hidden flex flex-col">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-8">
        <div className="flex items-center justify-between gap-4 w-full">
          <div className="flex-1 min-w-0">
            <p className="text-[1rem]">After your health plan</p>
            <p className="text-[28px] sm:text-[36px] md:text-[4rem] font-medium wrap-break-word">
              We guide you{" "}
              <span className="hidden sm:inline-block">
                <br />
              </span>{" "}
              to what you need
            </p>
          </div>

          <div className="flex gap-2 shrink-0 items-center min-w-25">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              disabled={isBeginning}
              className={`rounded-full p-3 shadow-md transition-all duration-300 border ${
                isBeginning
                  ? "cursor-not-allowed border-gray-100"
                  : "cursor-pointer border-gray-200"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={isBeginning ? "#d1d5db" : "black"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={() => swiperInstance?.slideNext()}
              disabled={isEnd}
              className={`rounded-full p-3 shadow-md transition-all duration-300 border ${
                isEnd
                  ? "cursor-not-allowed border-gray-100"
                  : "cursor-pointer border-gray-200"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={isEnd ? "#d1d5db" : "black"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          slidesPerView="auto"
          spaceBetween={24}
          className="w-full pb-4"
        >
          {GUIDE_DATA.map((item, index) => (
            <SwiperSlide key={index} className="!w-auto flex shrink-0">
              <GuideCard
                url={item.imgUrl}
                title={item.title}
                desc={item.desc}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div>
          <a
            href="https://superpower.com/checkout"
            className="cursor-pointer bg-[#fc5f2b] text-white w-55 h-14 md:h-15 rounded-full flex items-center justify-center hover:brightness-110 hover:shadow-[0_0_25px_rgba(252,95,43,0.7)] transition-all mb-5"
          >
            Start Testing
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 25 25"
              fill="none"
              className="ml-2"
            >
              <path
                d="M9.5 18.5967L15.5 12.5967L9.5 6.59668"
                stroke="#FAFAFA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default GuideSec;