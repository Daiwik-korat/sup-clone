"use client";
import GuideCard from "./guideCard";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

interface DataItem {
  imgUrl: string;
  title: string;
  desc: string;
}

const GUIDE_DATA: DataItem[] = [
  {
    imgUrl: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68db0c05e445f893e1bec67e_Prescriptions.avif",
    title: "Prescriptions",
    desc: "Medication & peptides you can buy from us, at discounted prices.",
  },
  {
    imgUrl: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/691b435c24cfaf4a07d48f10_marketplace-orange-bg-p-500.avif",
    title: "Supplements",
    desc: "Curated supplements and health products, cheaper than Amazon.",
  },
  {
    imgUrl: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68db0c4476b037b40ee2e998_Img%20Frame.avif",
    title: "Add-on Testing",
    desc: "Further advanced testing across gut health, cancer risk and toxins.",
  },
  {
    imgUrl: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/6909a982dbe21af11d0e9b06_Img%20Frame.avif",
    title: "Unlimited Concierge",
    desc: "Use your 24/7 message access to ask questions, our care team will answer within 24 hours on weekdays",
  },
];

function GuideSec() {
  const containerRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Start with Left disabled (start), Right enabled (assuming content overflows)
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const updateButtonState = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    
    // Tolerance of 2px for float calculation differences
    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 2);
  };

  useEffect(() => {
    // Check initially and on resize
    updateButtonState();
    window.addEventListener("resize", updateButtonState);
    return () => window.removeEventListener("resize", updateButtonState);
  }, []);

  const slide = contextSafe((direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const gap = 8; // Corresponds to gap-2

    // Scroll exactly the visible width + gap to swipe the whole set
    // On mobile this moves 2 cards. On desktop (if overflow existed) it would move 4.
    const scrollAmount = slider.clientWidth + gap;
    
    const currentScroll = slider.scrollLeft;
    const targetScroll = direction === "right" 
      ? currentScroll + scrollAmount 
      : currentScroll - scrollAmount;

    gsap.to(slider, {
      scrollLeft: targetScroll,
      duration: 0.5,
      ease: "power2.out",
      onComplete: updateButtonState,
    });
  });

  return (
    <section ref={containerRef} className="w-full px-4 pt-16 flex flex-col">
      {/* This Container ensures everything aligns to the same grid.
        Both Text and Cards live inside here.
      */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-8">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div className="flex flex-col gap-0">
            <p className="text-[1rem]">After your health plan</p>
            <p className="sm:text-[4rem] text-[36px] leading-tight font-medium">
              We guide you <br className="hidden sm:block" /> to what you need
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-2 min-w-[100px]">
            <button
              onClick={() => canScrollLeft && slide("left")}
              disabled={!canScrollLeft}
              className={`rounded-full p-3 shadow-md transition-all duration-300 border
                ${!canScrollLeft 
                  ? "bg-gray-100 text-gray-300 border-gray-100 cursor-not-allowed" 
                  : "bg-amber-200 text-black border-amber-200 hover:bg-white active:scale-95 cursor-pointer"
                }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            
            <button
              onClick={() => canScrollRight && slide("right")}
              disabled={!canScrollRight}
              className={`rounded-full p-3 shadow-md transition-all duration-300 border
                ${!canScrollRight 
                  ? "bg-gray-100 text-gray-300 border-gray-100 cursor-not-allowed" 
                  : "bg-amber-200 text-black border-amber-200 hover:bg-white active:scale-95 cursor-pointer"
                }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        {/* Slider Container
           - overflow-x-hidden: hides scrollbar
           - gap-2: 8px gap
           - The width is constrained by the parent max-w-7xl
        */}
        <div 
          ref={sliderRef} 
          className="flex w-full gap-2 overflow-x-hidden pb-4"
        >
          {GUIDE_DATA.map((item, index) => (
            <GuideCard 
              key={index} 
              url={item.imgUrl} 
              title={item.title} 
              desc={item.desc} 
            />
          ))}
        </div>

        {/* Bottom Button */}
        <div>
          <button className="cursor-pointer bg-[#fc5f2b] text-white w-[220px] h-14 md:h-15 rounded-full flex items-center justify-center hover:brightness-110 hover:shadow-[0_0_25px_rgba(252,95,43,0.7)] transition-all">
            Book my blood test
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 25 25" fill="none" className="ml-2">
              <path d="M9.5 18.5967L15.5 12.5967L9.5 6.59668" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}

export default GuideSec;