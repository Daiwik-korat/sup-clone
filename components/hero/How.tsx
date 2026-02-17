"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HowHero() {
  useGSAP(() => {
    gsap.to("#img", {
      scale: 1,
      filter: "blur(0px)",
      duration: 0.7,
    });
  });
  return (
    <>
      <section
        id="hero"
        className="relative w-full min-[991px]:p-[14.5px] -z-10"
      >
        <div className="rounded-2xl w-full flex justify-center bg-[radial-gradient(circle_at_60%,#7a725f,#464133)] min-h-160 pt-25 relative">
          <div className="flex min-[991px]:flex-row flex-col justify-between w-full max-w-340 px-6 sm:px-10">
            <div className="flex flex-col mb-10 min-[991px]:mb-20  min-[991px]:justify-center">
              <p className="max-[767px]:text-[3.5rem] font-semibold text-[4rem] text-white max-w-100">
                How it Works
              </p>
              <p className="text-[1.25rem] text-white max-w-130 mt-4">
                Book your labs in 15 min, and test 100+ labs in 1 blood draw.
                Get your results within a week.
              </p>
            </div>

            <div id="img" className="relative w-fit scale-110 blur-sm">
              <Image
                src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68dc40167f31dd1a1cdae60f_sp-hiw-hero.avif"
                width={592}
                height={595}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 33vw"
                alt="Model"
                className="self-end object-bottom"
              />
              <div className="absolute top-[25%] right-[8%] flex items-center gap-3 text-white">
                <div className="flex h-5 w-5 items-center justify-center bg-white">
                  <div className="h-2 w-2 rounded-full bg-[#5c3e33]"></div>
                </div>
                <span className="text-xs font-bold tracking-widest uppercase">
                  Reduce Fatigue
                </span>
              </div>

              <div className="absolute top-[50%] left-[30%] flex items-center gap-3 text-white">
                <div className="flex h-5 w-5 items-center justify-center bg-white">
                  <div className="h-2 w-2 rounded-full bg-[#5c3e33]"></div>
                </div>
                <span className="text-xs font-bold tracking-widest uppercase">
                  Slow Ageing
                </span>
              </div>

              <div className="absolute bottom-[18%] right-[5%] flex items-center gap-3 text-white">
                <div className="flex h-5 w-5 items-center justify-center bg-white">
                  <div className="h-2 w-2 rounded-full bg-[#5c3e33]"></div>
                </div>
                <span className="text-xs font-bold tracking-widest uppercase">
                  Balance Hormones
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowHero;
