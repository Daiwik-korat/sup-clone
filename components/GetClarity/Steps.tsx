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

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const imgtl = gsap.timeline({
          scrollTrigger: {
            trigger: "#Images",
            start: "top top",
            end: "+=3000",
            scrub: 1,
            pin: true,
          },
        });

        imgtl.fromTo(
          "#img0",
          { scale: 1, opacity: 1 },
          { scale: 0.8, opacity: 0, duration: 1 },
          0,
        );

        imgtl.fromTo(
          "#img1",
          { scale: 1, opacity: 0, y: "100vh" },
          { scale: 1, opacity: 1, y: 0, duration: 1 },
          "-=0.5",
        );

        imgtl.fromTo(
          "#img1",
          { scale: 1, opacity: 1 },
          { scale: 0.8, opacity: 0, duration: 1 },
        );

        imgtl.fromTo(
          "#img2",
          { scale: 1, opacity: 0, y: "100vh" },
          { scale: 1, opacity: 1, y: 0, duration: 1 },
          "-=0.5",
        );

        const totalDuration = imgtl.duration();

        imgtl.fromTo(
          "#varline",
          { height: "10%" },
          {
            height: "100%",
            duration: totalDuration,
            ease: "none",
          },
          0,
        );
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="relative w-full">
      <div
        id="Images"
        className="relative w-full h-auto lg:h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="relative w-full h-full mx-auto max-w-315 px-5 lg:px-10">
          <div className="absolute left-1/2 sm:top-15 top-8 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 block z-0 h-[80vh] my-auto">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gray-200">
              <div className="w-full h-full bg-[#fc5f2b]"></div>
            </div>

            <div
              id="varline"
              className="w-full h-[5%] bg-[linear-gradient(to_bottom,#fc5f2b_90%,transparent)]"
            ></div>
          </div>

          <div className="relative w-full h-full flex flex-col lg:justify-center">
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
    </div>
  );
}
