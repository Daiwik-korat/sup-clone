"use client";
import Join from "./JoinButton.tsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Hero() {
  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1024px)": () => {
        gsap.to("#herosec", {
          opacity: 0,
          scrollTrigger: {
            trigger: "#parent",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            pinSpacing: true,
          },
        });
      },

      "(max-width: 1023px)": () => {
        gsap.fromTo(
          "#herosec",
          { opacity: 1 },
          {
            opacity: 0.3,
            scrollTrigger: {
              trigger: "#parent",
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      },
    });
  }, []);

  return (
    <section
      id="parent"
      className="h-[100svh] w-full flex items-center justify-center lg:p-4"
    >
      <main className="opacity:0.3 bg-orange-100 lg:opacity:1 lg:w-[100%] lg:h-[100%] w-screen h-screen lg:rounded-2xl flex items-center justify-center px-6 md:px-10">
        <div
          id="herosec"
          className="w-full max-w-5xl flex flex-col items-center text-center"
        >
          <p className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
            Unlock your new
            <br />
            health intelligence
          </p>
          <p className="mt-6 max-w-xl text-sm sm:text-base md:text-lg text-center">
            100+ lab tests. Every year. Detect early signs of 1,000+ .
            <br />
            conditions. All for only $17/month
          </p>

          <div className="mt-8">
            <Join />
          </div>

          <img
            src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/689c37321e74752df5514537_hsa-fsa.svg"
            className="mt-8 w-24 md:w-28"
            alt="NO URL RESPONSE"
          />
        </div>
      </main>
    </section>
  );
}

export default Hero;
