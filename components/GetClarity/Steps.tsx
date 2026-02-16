"use client";
import Step from "./Step";
import Data from "./stepsData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Steps() {
  const container = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const imgtl = gsap.timeline({
        scrollTrigger: {
          trigger: "#Images",
          start: "top top",
          end: () => "+=" + window.innerHeight * (Data.length + 1),
          scrub: 1,
          pin: true,
        },
      });


      imgtl.to("#v-line-fill", { height: "100%", duration: 4, ease: "none" }, 0);


      imgtl.fromTo(
        "#img0",
        { scale: 1, opacity: 1 },
        { scale: 0.8, opacity: 0, duration: 1 },
        0 
      );

      imgtl.fromTo(
        "#img1",
        { scale: 1, opacity: 0, y: "100vh" },
        { scale: 1, opacity: 1, y: 0, duration: 1 },
        "-=0.5" 
      );

      imgtl.fromTo(
        "#img1",
        { scale: 1, opacity: 1 },
        { scale: 0.8, opacity: 0, duration: 1 }
      );

      imgtl.fromTo(
        "#img2",
        { scale: 1, opacity: 0, y: "100vh" },
        { scale: 1, opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      );

    });
  }, { scope: container });

  return (
    <div ref={container}>
      <div
        id="Images"
        className="relative h-screen overflow-hidden bg-white"
      >
        <div className="absolute left-1/2 top-[15vh] -translate-x-1/2 flex flex-col items-center z-0 lg:block hidden">
            
            <div className="relative w-[48px] h-[2px] bg-[#fc5f2b]">
                <div className="absolute top-0 left-0 h-full w-0 bg-[#fc5f2b]"></div>
            </div>

            <div className="relative w-[2px] h-[70vh] bg-gray-200 mx-auto -mt-[1px]">
                <div id="v-line-fill" className="absolute top-0 left-0 w-full h-0 bg-[#fc5f2b]"></div>
            </div>
        </div>

        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col justify-center">
          {Data.map((item, index) => (
            <Step
              id={`img${index}`}
              key={index}
              url={item.url}
              title={item.title}
              description={item.description}
              points={item.points}
              day={item.day}
            />
          ))}
        </div>
      </div>
    </div>
  );
}