"use client";
import Step from "./Step";
import Data from "./stepsData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Steps() {
  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1024px)": () => {
        const imgtl = gsap.timeline({
          scrollTrigger: {
            trigger: "#Images",
            start: "top top",
            end: "+=3000",
            scrub: 2,
            pin: true,
          },
        });

        imgtl.fromTo(
          "#img0",
          { scale: 1, opacity: 1 },
          { scale: 0.8, opacity: 0, duration: 1 },
        );

        imgtl.fromTo(
          "#img1",
          { scale: 1, opacity: 1, y: "120vh" },
          { scale: 1, opacity: 1, y: 0, duration: 1 },
          "-=0.6",
        );

        imgtl.fromTo(
          "#img1",
          { scale: 1, opacity: 1 },
          { scale: 0.8, opacity: 0, duration: 1 },
        );

        imgtl.fromTo(
          "#img2",
          { scale: 1, opacity: 1, y: "120vh" },
          { scale: 1, opacity: 1, y: 0, duration: 1 },
          "-=0.6",
        );

        imgtl.fromTo(
          "#img2",
          { scale: 1, opacity: 1 },
          { scale: 0.8, opacity: 0.3, duration: 1 },
        );
      },
    });
  }, []);

  return (
    <>
      <div
        id="Images"
        className="relative lg:pt-[20vh] lg:h-screen px-10 h-auto w-full flex flex-col gap-13 justify-start items-start"
      >
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
    </>
  );
}
