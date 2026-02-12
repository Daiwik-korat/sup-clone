"use client"
import Image from "next/image";
import { gsap} from "gsap/all";
import { useGSAP } from "@gsap/react";

function FeatVids() {
  useGSAP(() => {
    gsap.fromTo(
      "#items",
      {
        scale: 1.3,
        filter: "blur(50px)",
        opacity: 0, 
      },
      {
        scale: 1,
        filter: "blur(0px)",
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#items", 
          start: "top 80%",
          toggleActions: "play none none none", 
        },
      },
    );
  });

  return (
    <>
      <section id="items">
        <div className="relative flex flex-col items-center justify-center max-w-3xl mx-auto mt-20 space-y-6">
          <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl -mt-15 sm:mt-8 lg:mt-10">
            It Starts with 100+ labs
          </p>
          <p className="flex text-center text-gray-600 text-base sm:text-lg">
            From heart health to hormone balance our comprehensive test panels
            detect early signs of over 1,000 conditions
          </p>
          <button className="flex justify-center items-center w-52 h-14 rounded-full gap-2 hover:bg-gray-100 transition border border-gray-200">
            <p>Explore all biomarkers</p>
            <img
              src="/explorebiomarkarrow.svg"
              className="w-4 h-4 mt-1.5"
              alt="arrow"
            />
          </button>
        </div>
        <div className="relative w-full overflow-hidden py-10">
          <div className="hidden sm:flex justify-center items-center w-full">
            <div className="relative w-[60%] mx-auto">
              <div className="absolute top-0 bottom-0 right-[100%] mr-4 flex items-center justify-end">
                <Image
                  src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68a7a9565b28afd609739daa_Superpower%20Score.avif"
                  width={0}
                  height={0}
                  sizes="30vw"
                  alt="Feature Photo 1"
                  className="h-full w-auto max-w-none object-contain"
                />
              </div>

              <Tablet />

              <div className="absolute top-0 bottom-0 left-[100%] ml-4 flex items-center justify-start">
                <Image
                  src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68a7a91e594b8d4029a38fb8_Group%201410124615.avif"
                  width={0}
                  height={0}
                  sizes="30vw"
                  alt="Feature Photo 2"
                  className="h-full w-auto max-w-none object-contain"
                />
              </div>
            </div>
          </div>

          <div className="block sm:hidden w-full">
            <div className="relative w-[50%] mx-auto">
              <div className="absolute top-0 bottom-0 right-[100%] mr-2 flex items-center justify-end">
                <Image
                  src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68a8fbd1251843351bf65078_Frame.avif"
                  width={0}
                  height={0}
                  sizes="30vw"
                  alt="Feature Photo 1"
                  className="h-full w-auto max-w-none object-contain object-right"
                />
              </div>

              <Phone />

              <div className="absolute top-0 bottom-0 left-[100%] ml-2 flex items-center justify-start">
                <Image
                  src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68a7a9565b28afd609739daa_Superpower%20Score.avif"
                  width={0}
                  height={0}
                  sizes="30vw"
                  alt="Feature Photo 2"
                  className="h-full w-auto max-w-none object-contain object-left"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  function Tablet() {
    return (
      <div className="relative w-full border-[12px] border-black rounded-[2rem] overflow-visible shadow-[0_30px_60px_-5px_#00000059]">
        <video
          poster="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68daedbbb8ee5ec72970f065_Data%20_%C2%A0Summary.jpg"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-[1.5rem]"
        >
          <source
            src="https://superpower-website.b-cdn.net/sp-labs-dashboard-video.mp4"
            type="video/mp4"
          />
        </video>

        <Image
          src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68a7a98ca28b2a7760e72cd0_Group%201321315829.avif"
          width={200}
          height={800}
          alt="Tube"
          className="absolute bottom-0 right-0 translate-x-6 translate-y-8 z-20 w-20 scale-45 sm:w-24 md:w-28 h-auto origin-bottom-right"
        />
      </div>
    );
  }

  function Phone() {
    return (
      <div className="relative w-full mx-auto rounded-2xl overflow-visible shadow-[0_30px_60px_-5px_#00000059]">
        <Image
          src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68a8fbb1ba9665c2cd71afd8_Group%201321315830.avif"
          width={200}
          height={500}
          alt="Mobile Image"
          className="w-full h-auto"
        />
      </div>
    );
  }
}

export default FeatVids;
