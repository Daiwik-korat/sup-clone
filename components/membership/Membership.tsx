"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import MasterCard from "./MasterCard";
import gsap from "gsap";

const benefits = [
  "One appointment, one draw for your annual panel.",
  "100+ biomarkers per year",
  "A personalized plan that evolves with you",
  "Get your biological age and track your health over a lifetime",
];

const imagesurl = [
  "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68735de71136bc431f931f0a_membership-sku-1.avif",
  "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/688046649437614ee5ce9828_SKU%20Frame%202.avif",
  "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/688a8c0fd46fba51230bdfcc_image%20(6).avif",
  "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68a4d57ea732f68822a4d11e_image%20(13).avif",
  "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/691b435b09ee408729527dd3_marketplace-white-bg.avif",
];

function NavImage(props: {
  url: string;
  index: number;
  current: number;
  func: (n: number) => void;
}) {
  const isSelected = props.index === props.current;

  const baseClass =
    "relative flex-1 min-w-[50px] aspect-square min-[991px]:flex-none min-[991px]:w-16 min-[991px]:h-16 rounded-lg overflow-hidden transition-all duration-200 cursor-pointer";

  const activeClass = isSelected
    ? "border-2 border-[#fc5f2b] ring-2 ring-[#fc5f2b]/20 z-10 scale-105"
    : "border border-[#e4e4e7] hover:border-zinc-400 opacity-80 hover:opacity-100";

  return (
    <button
      className={`${baseClass} ${activeClass}`}
      onClick={() => props.func(props.index)}
    >
      
      <Image
        src={props.url}
        fill
        sizes="100px"
        alt={`Thumbnail ${props.index}`}
        className={props.index === 0 ? "object-contain p-1" : "object-cover"}
      />
    </button>
  );
}

function ImageShow({ number}: { number: number;}) {
  const imgUrl = imagesurl[number];
  if (!imgUrl) return null;

  return (
    <div className="relative w-full h-full p-6">
      <Image
        src={imgUrl}
        fill
        sizes="(max-width: 768px) 100vw, 800px"
        className="object-contain rounded-xl"
        alt="Preview"
        priority={true}
      />
    </div>
  );
}

function ImagePlaceHolder({ targetNumber }: { targetNumber: number }) {
  const [visibleNumber, setVisibleNumber] = useState(targetNumber);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      gsap.set(containerRef.current, { opacity: 1 });
      return;
    }

    if (targetNumber !== visibleNumber) {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          setVisibleNumber(targetNumber);
        },
      });
    }
  }, [targetNumber]);

  useEffect(() => {
    if (!isMounted.current) return;
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power2.out" },
    );
  }, [visibleNumber]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center opacity-0"
    >
      <div
        key={visibleNumber}
        className="w-full h-full flex items-center justify-center"
      >
        {visibleNumber === 0 ? (
          <div className="w-full max-w-[90%]">
            <MasterCard />
          </div>
        ) : (
          <ImageShow number={visibleNumber} />
        )}
      </div>
    </div>
  );
}

function Membership() {
  const [activeImage, setActiveImage] = useState<number>(0);

  return (
    <section className="flex items-start justify-center w-full mt-3 sm:mt-6 md:mt-10 px-4 max-[991px]:px-6">
      <div className="flex flex-col min-[991px]:flex-row items-stretch gap-8 w-full min-[991px]:w-[85vw] max-w-300">
        <div className="flex flex-1 flex-col gap-3 w-full">
          <div className="w-full rounded-3xl border border-[#e4e4e7] bg-white overflow-hidden relative h-[450px] sm:h-[550px] md:h-[650px]">
            <ImagePlaceHolder targetNumber={activeImage} />
          </div>

          <div className="flex gap-2 w-full mt-1">
            {imagesurl.map((item, index) => (
              <NavImage
                key={index}
                url={item}
                index={index}
                current={activeImage}
                func={setActiveImage}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-3 p-0 min-[991px]:p-4 w-full">
          <div className="flex flex-col gap-0 w-full">
            <p className="text-[#71717A]">
              What could cost you $15,000 is $199
            </p>
            <p className="text-[3rem] md:text-[4rem] font-medium leading-tight -mt-2 w-full">
              Superpower <br /> Membership
            </p>
          </div>

          <p className="w-full">
            Your membership includes one comprehensive blood draw each year,
            covering 100+ biomarkers in a single collection
          </p>

          <ul className="space-y-1 w-full">
            {benefits.map((item, index) => (
              <li key={index} className="flex gap-3 items-start w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="13"
                  viewBox="0 0 17 13"
                  fill="none"
                  className="mt-1 shrink-0"
                >
                  <path
                    d="M1 6.11887L6.19766 11.5967L16 1.59668"
                    stroke="#FC5F2B"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-[#71717A]">{item}</p>
              </li>
            ))}
          </ul>

          <div className="flex items-end gap-3 w-full">
            <div className="flex items-start">
              <span className="text-[1.25rem] font-semibold mt-2">$</span>
              <span className="text-[3.5rem] md:text-[4rem] font-semibold leading-none">
                17
              </span>
            </div>
            <div className="text-[1.1rem] md:text-[1.25rem] text-[#5B6472] mb-1">
              /month <span className="px-1">·</span> billed annually
            </div>
          </div>

          <p className="text-[0.875rem] mt-2 w-full">
            Pricing for members in NY & NJ is $399 with 90+ biomarkers tested.
          </p>

          <div className="flex flex-wrap w-full items-center gap-4">
            <p className="text-[1rem] opacity-60 mt-2">
              Flexible Payment options
            </p>
            <Image
              src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68bf5ab8ebd836a9d9b6398d_Frame%20(1).avif"
              alt="Payment options"
              width={216}
              height={100}
              className="mt-2"
            />
          </div>

          <button className="cursor-pointer bg-[#fc5f2b] text-white h-14 md:h-15 rounded-full flex items-center justify-center w-full hover:brightness-130 hover:shadow-[0_0_25px_rgba(252,95,43,0.7)] transition-all">
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
          </button>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 w-full mt-4 text-[#71717A]">
            <div className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 17 17"
                fill="none"
                className="w-4 h-4 shrink-0"
              >
                <path
                  d="M13.8334 4.09668L6.50002 11.43L3.16669 8.09668"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-sm font-medium">Cancel anytime</p>
            </div>

            <div className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 17 17"
                fill="none"
                className="w-4 h-4 shrink-0"
              >
                <path
                  d="M15.034 6.76334C15.3385 8.25754 15.1215 9.81095 14.4192 11.1645C13.717 12.5181 12.5719 13.59 11.175 14.2016C9.7781 14.8131 8.21376 14.9272 6.74287 14.5249C5.27199 14.1226 3.98347 13.2283 3.09219 11.991C2.20091 10.7536 1.76075 9.24816 1.84511 7.7256C1.92948 6.20303 2.53326 4.7554 3.55577 3.62412C4.57829 2.49284 5.95773 1.74629 7.46405 1.50897C8.97037 1.27166 10.5125 1.55791 11.8333 2.32001M6.50001 7.43001L8.5 9.43001L15.1667 2.76334"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-sm font-medium">HSA/FSA eligible</p>
            </div>

            <div className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4 shrink-0"
              >
                <path
                  d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-sm font-medium">Result within a week</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Membership;
