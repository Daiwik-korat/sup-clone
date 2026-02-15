"use client";
import GuideCard from "./guideCard";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/dist/Draggable";

gsap.registerPlugin(useGSAP, Draggable);

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRightEnabled, setIsRightEnabled] = useState(true);

  const getTargetX = () => {
    if (!containerRef.current) return 0;
    const cards = containerRef.current.children;
    const firstCardWidth = (cards[0] as HTMLElement).offsetWidth;
    const gap = 24;
    const width = window.innerWidth;

    if (width > 991) return -(firstCardWidth + gap);
    if (width > 460) return -(containerRef.current.offsetWidth + gap);
    return -(firstCardWidth + gap);
  };

  const { contextSafe } = useGSAP(
    () => {
      if (!containerRef.current) return;

      Draggable.create(containerRef.current, {
        type: "x",
        edgeResistance: 0.65,
        inertia: true,
        bounds: { minX: getTargetX(), maxX: 0 },
        onDragEnd: function () {
          const targetX = getTargetX();
          const halfWay = targetX / 2;

          if (this.x < halfWay) {
            // Snap to the moved position (Right state)
            gsap.to(this.target, {
              x: targetX,
              duration: 0.5,
              ease: "power2.out",
            });
            setIsRightEnabled(false);
          } else {
            // Snap back to start (Left state)
            gsap.to(this.target, { x: 0, duration: 0.5, ease: "power2.out" });
            setIsRightEnabled(true);
          }
        },
      });
    },
    { scope: containerRef },
  );

  const handleButtonClick = contextSafe((direction: "left" | "right") => {
    const targetX = direction === "right" ? getTargetX() : 0;
    gsap.to(containerRef.current, {
      x: targetX,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => setIsRightEnabled(direction === "left"),
    });
  });

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
              onClick={() => handleButtonClick("left")}
              className={`rounded-full p-3 shadow-md transition-all duration-300 border ${
                isRightEnabled
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
                stroke={isRightEnabled ? "#d1d5db" : "black"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={() => handleButtonClick("right")}
              className={`rounded-full p-3 shadow-md transition-all duration-300 border ${
                !isRightEnabled
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
                stroke={!isRightEnabled ? "#d1d5db" : "black"}
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
          ref={containerRef}
          className="flex w-full gap-6 pb-4 touch-none cursor-grab active:cursor-grabbing"
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
