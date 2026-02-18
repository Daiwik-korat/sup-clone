"use client";
import Join from "../JoinButton.tsx";
import Image from "next/image";
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
      className="h-svh w-full flex items-center justify-center lg:p-4"
    >
      <main 
      className="
          relative 
          overflow-hidden 
          w-full h-screen 
          lg:w-full lg:h-full lg:rounded-2xl 
          flex 
          items-end         
          justify-start     
          md:items-center 
          md:justify-center
          px-6 
          pb-12             
          md:px-10 
          md:pb-0
        ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://superpower-website.b-cdn.net/superpower-100-year-potential-video-hero.mp4"
            type="video/mp4"
          />
        </video>
        <div
          id="herosec"
          className="
            relative 
            z-10 
            w-full 
            max-w-5xl 
            flex 
            flex-col 
            items-start     
            text-left        
            md:items-center 
            md:text-center
            text-white
          "
        >
          <p className="font-semibold max-[770px]:text-[4rem] min-[770px]:text-3xl md:text-[4.5rem] lg:text-[5rem] xl:text-6xl leading-tight">
            Unlock your new
            <br />
            health intelligence
          </p>
          <p className="mt-6 max-w-xl text-[1.125rem] sm:text-base md:text-lg min-[770px]:text-center">
            100+ lab tests. Every year. Detect early signs of 1,000+ .
            <br />
            conditions. All for only $17/month
          </p>
          <div className="mt-8">
            <Join />
          </div>
          <Image
            src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/689c37321e74752df5514537_hsa-fsa.svg"
            className="mt-8 w-24 md:w-28"
            alt="HSA/FSA eligible"
            width={112}
            height={112}
          />
        </div>
      </main>
    </section>
  );
}

export default Hero;
