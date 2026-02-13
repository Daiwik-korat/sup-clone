"use client";

import React from "react";

import Image from "next/image";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type DetailsProps = {
  id: string;

  title: string;

  description: string;
};

type Details = {
  title: string;

  description: string;
};

const numbers: number[] = [1, 2, 3];

const urls: string[] = [
  "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68bf3ed15e90d22210f8cc53_Img%20Frame-p-800.avif",

  "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68bf3ed15e90d22210f8cc56_Img%20Frame-1-p-800.avif",

  "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68bf3ed1b9ed1cceda29fecc_Img%20Frame-2-p-800.avif",
];

const details: Details[] = [
  {
    title: "Test your whole body",

    description:
      "Get a comprehensive blood draw at one of our 2,000+ partner labs or from the comfort of your own home.",
  },

  {
    title: "An actionable plan",

    description:
      "Easy to understand results and a clear health plan with tailored recommendations on diet, lifestyle changes & supplements.",
  },

  {
    title: "A connected ecosystem",

    description:
      "You can book additional diagnostics, buy curated supplements with members-only discounts in your Superpower dashboard.",
  },
];

function NumberBlock({ num, id }: { num: number; id: string }) {
  return (
    <div className="relative z-10 flex justify-start">
      <div
        id={id}
        className="size-[32px] bg-[#fc5f2b] flex items-center justify-center text-white font-semibold"
      >
        {num}
      </div>
    </div>
  );
}

function ImageBlock({ url, id }: { url: string; id: string }) {
  return (
    <div id={id} className="w-full">
      <Image
        src={url}
        width={400}
        height={280}
        alt="first Step, URL no res"
        className="w-full h-auto object-cover"
      />
    </div>
  );
}

function DetailsBlock(props: DetailsProps) {
  return (
    <div id={props.id} className="flex flex-col gap-2 items-start">
      <p className="font-semibold text-2xl">{props.title}</p>

      <p className="text-md">{props.description}</p>
    </div>
  );
}

function VerticalView() {
  return (
    <div className="relative grid grid-cols-[32px_1fr] gap-x-6 gap-y-12 items-start w-full">
      <div
        id="connecting-line"
        className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#fc5f2b] from-90% to-transparent z-0"
      />

      {numbers.map((item, index) => (
        <React.Fragment key={index}>
          <NumberBlock num={item} id={`Num${item}`} />

          <div className="flex flex-col gap-4">
            <ImageBlock id={`img${item}`} url={urls[index]} />

            <DetailsBlock id={`Details${item}`} {...details[index]} />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

function HorizontalView() {
  return (
    <div
      id="howsteps"
      className="grid grid-cols-3 gap-x-10 lg:gap-x-20 gap-y-6 items-start w-full"
    >
      {urls.map((item, index) => (
        <ImageBlock key={index} id={`img${index + 1}`} url={item} />
      ))}

      <div className="col-span-3 relative grid grid-cols-3 gap-x-10 lg:gap-x-20 items-center">
        <div
          id="connecting-line"
          className="absolute left-1/2 -translate-x-1/2 w-screen top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#fc5f2b] from-90% to-transparent z-0"
        />

        {numbers.map((item, index) => (
          <div key={index} className="flex justify-start">
            <NumberBlock id={`Num${index + 1}`} num={item} />
          </div>
        ))}
      </div>

      {details.map((item, index) => (
        <DetailsBlock key={index} id={`Details${index + 1}`} {...item} />
      ))}
    </div>
  );
}

function HowItWorks() {
  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(max-width: 768px)": () => {
        gsap.fromTo(
          "#connecting-line",

          {
            transformOrigin: "center",
            scaleY: 0.5,
          },

          {
            scaleY: 1,

            scrollTrigger: {
              trigger: "#howsec",

              start: "top top",

              end: "bottom top",

              scrub: 1,
            },
          },
        );
      },

      "(min-width: 991px)": () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#howsec",

            start: "top top",

            end: "bottom top",

            scrub: 1,

            pin: true,
          },

          defaults: { ease: "none" },
        });

        tl.fromTo(
          "#img2",

          { y: -32, filter: "blur(5px)", opacity: 0, duration: 1 },

          { y: 0, filter: "blur(0px)", opacity: 1 },
        );

        tl.fromTo(
          "#Details2",

          { y: 22, filter: "blur(5px)", opacity: 0 },

          { y: 0, filter: "blur(0px)", opacity: 1 },

          "<",
        );

        tl.fromTo(
          "#Num2",

          { scale: 0, opacity: 0 },

          { scale: 1, opacity: 1 },

          "<",
        );

        tl.fromTo(
          "#connecting-line",

          { transformOrigin: "left center", scaleX: 0 },

          { scaleX: 0.4 },

          "<",
        );

        tl.fromTo(
          "#img3",

          { y: -32, filter: "blur(5px)", opacity: 0, duration: 1 },

          { y: 0, filter: "blur(0px)", opacity: 1 },
        );

        tl.fromTo(
          "#Details3",

          { y: 22, filter: "blur(5px)", opacity: 0 },

          { y: 0, filter: "blur(0px)", opacity: 1 },

          "<",
        );

        tl.fromTo(
          "#Num3",

          { scale: 0, opacity: 0 },

          { scale: 1, opacity: 1 },

          "<",
        );

        tl.fromTo(
          "#connecting-line",

          { transformOrigin: "left center", scaleX: 0.4 },

          { scaleX: 0.6 },

          "<",
        );

        tl.fromTo(
          "#connecting-line",

          { transformOrigin: "left center", scaleX: 0.6 },

          { scaleX: 1 },
        );
      },
    });
  });

  return (
    <section
      id="howsec"
      className="flex flex-col justify-start items-center gap-50 w-full max-w-380 mx-auto px-6 lg:px-20 xl:px-30 mt-15 sm:mt-20 lg:mt-25 xl:mt-30"
    >
      <p className="text-3xl sm:text-6xl w-[100%] sm:relative ml-5 mt-5 min:[540px]-text-center">
        How it Works
      </p>

      <div className="md:block hidden w-full">
        <HorizontalView />
      </div>

      <div className="block md:hidden w-full">
        <VerticalView />
      </div>
    </section>
  );
}

export default HowItWorks;
