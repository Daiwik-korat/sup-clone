"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import gsap from "gsap";

const benefits = [
  "One appointment, one draw for your annual panel.",
  "100+ biomarkers per year",
  "A personalized plan that evolves with you",
  "Get your biological age and track your health over a lifetime",
];

const imagesurl = [
  "/Master_Card.png",
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

function ImageShow({ number }: { number: number }) {
  const imgUrl = imagesurl[number];

  if (!imgUrl) return null;

  return (
    <div className="w-full flex items-center justify-center p-4">
      <Image
        src={imgUrl}
        width={0}
        height={0}
        sizes="(max-width: 768px) 100vw, 800px"
        className="w-full h-auto max-h-[600px] object-contain rounded-xl"
        alt="Preview"
      />
    </div>
  );
}

function MasterCard() {
  return (
    <div className="flex justify-center items-center py-10 w-full">
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        perspective={1000}
        transitionSpeed={1000}
        scale={1.02}
        className="relative preserve-3d cursor-pointer w-full flex justify-center"
      >
        <div className="relative w-full max-w-[340px] sm:max-w-[450px] min-[991px]:max-w-[500px]">
          <Image
            src="/Master_Card.png"
            width={661}
            height={377}
            alt="Master Card"
            className="w-full h-auto drop-shadow-2xl rounded-xl"
            priority
          />

          <div
            className="absolute inset-0 flex flex-col justify-between p-[6%] text-white"
            style={{ transform: "translateZ(40px)" }}
          >
            <div>
              <svg
                viewBox="0 0 222 30"
                className="w-[30%] drop-shadow-md"
                fill="currentColor"
              >
                <path
                  d="M1.03669 6.94685C1.03669 -0.956311 17.1038 -2.59711 18.1114 6.86481C18.1386 7.49378 17.8663 7.79459 17.4033 7.79459H13.4002C12.9372 7.79459 12.7194 7.57582 12.6104 7.08358C11.9841 3.36445 6.45594 4.21219 6.45594 6.94685C6.45594 11.2129 18.5199 8.06806 18.5199 16.108C18.5199 25.0229 0.927765 25.2417 0.0018645 15.7524C-0.0253679 15.1782 0.246956 14.932 0.737138 14.932H4.7403C5.17602 14.932 5.42111 15.1782 5.53004 15.6978C6.21084 19.4169 12.91 19.2528 12.91 16.108C12.91 12.1154 1.03669 14.932 1.03669 6.94685ZM34.478 1.69631C34.478 1.17673 34.6959 0.875909 35.295 0.875909H39.1075C39.6794 0.875909 39.9517 1.17673 39.9517 1.69631V12.3888C39.9517 17.6941 36.6566 22.5891 30.1209 22.5891C23.5851 22.5891 20.2627 17.6941 20.2627 12.3888L20.2355 1.69631C20.2355 1.17673 20.5351 0.875909 21.0797 0.875909H24.9467C25.573 0.875909 25.7909 1.17673 25.7909 1.69631L25.8181 12.3888C25.8181 16.4088 27.8606 17.6667 30.1209 17.6667C32.3811 17.6667 34.4508 16.4088 34.4508 12.3888L34.478 1.69631ZM81.9713 9.24396H71.623C71.623 7.08358 73.7198 4.5677 77.0694 4.5677C80.419 4.5677 81.9713 7.08358 81.9713 9.24396ZM87.4177 12.4435V11.6778C87.4177 5.52483 83.9047 0.219591 76.9333 0.219591C71.7591 0.219591 68.0555 3.66526 66.6939 8.17745C66.0948 10.1464 66.0131 12.2794 66.4488 14.3304C67.5381 19.3622 71.4323 23.1907 76.9333 23.1907C77.8047 23.1907 84.994 23.1907 87.1999 16.1353C87.336 15.6704 87.1454 15.5063 86.7642 15.5063H82.407C82.1347 15.5063 81.944 15.6431 81.8079 15.9165C81.3721 16.8463 80.2284 18.6785 76.9333 18.6785C74.0194 18.6785 71.623 16.0533 71.623 13.3186H86.5735C87.1182 13.3186 87.4177 12.9904 87.4177 12.4435ZM200.405 9.29866H190.819C190.819 7.19297 192.589 4.73178 195.884 4.73178C199.179 4.73178 200.405 7.19297 200.405 9.29866ZM206.26 12.4435V11.6778C206.26 5.52483 202.719 0.219591 195.748 0.219591C190.574 0.219591 186.87 3.63792 185.509 8.17745C184.882 10.1464 184.801 12.2794 185.264 14.3304C186.326 19.3622 190.247 23.1907 195.748 23.1907C196.619 23.1907 203.809 23.1907 206.042 16.1626C206.178 15.6704 205.987 15.5063 205.579 15.5063H201.249C200.949 15.5063 200.759 15.6431 200.623 15.9165C200.187 16.8463 199.043 18.7059 195.748 18.7059C192.834 18.7059 190.71 16.0806 190.71 13.3186H205.388C205.96 13.3186 206.26 12.9904 206.26 12.4435ZM220.856 0.875909C221.619 0.875909 222 1.31346 222 2.10651V5.30606C222 6.12646 221.564 6.48196 220.747 6.48196C215.982 6.48196 213.694 8.72438 213.694 14.4945V21.7413C213.694 22.2609 213.367 22.5344 212.904 22.5344H208.847C208.384 22.5344 208.111 22.2609 208.111 21.7413V14.4945C208.111 9.51743 209.5 0.875909 220.856 0.875909ZM170.531 0.875909H166.146C165.847 0.875909 165.738 0.985295 165.629 1.31346L161.217 14.4398L157.786 1.31346C157.704 0.985295 157.568 0.875909 157.269 0.875909H152.122C151.686 0.875909 151.741 1.14938 151.822 1.45019L157.105 21.9601C157.214 22.425 157.405 22.5344 157.922 22.5344H163.396C163.804 22.5344 164.05 22.3703 164.186 21.9328L168.352 9.13457L172.492 21.9328C172.628 22.3703 172.9 22.5344 173.281 22.5344H178.782C179.3 22.5344 179.49 22.425 179.599 21.9601L184.882 1.45019C184.964 1.14938 185.018 0.875909 184.556 0.875909H179.436C179.109 0.875909 178.973 0.985295 178.891 1.31346L175.46 14.4398L171.075 1.31346C170.967 0.985295 170.83 0.875909 170.531 0.875909ZM134.993 11.6778C134.993 7.82194 137.062 5.3334 140.357 5.3334C143.653 5.3334 146.022 7.82194 146.022 11.6778C146.022 15.5337 143.571 18.0769 140.357 18.0769C137.144 18.0769 134.993 15.561 134.993 11.6778ZM140.357 0.219591C133.931 0.219591 129.301 5.52483 129.301 11.6778C129.301 17.8308 133.931 23.1907 140.357 23.1907C146.784 23.1907 151.713 17.9949 151.713 11.6778C151.713 5.36075 146.539 0.219591 140.357 0.219591ZM102.178 0.875909C102.94 0.875909 103.321 1.31346 103.321 2.10651V5.30606C103.321 6.12646 102.886 6.48196 102.069 6.48196C97.3031 6.48196 95.0155 8.72438 95.0155 14.4945V21.7413C95.0155 22.2609 94.6888 22.5344 94.2258 22.5344H90.1682C89.7052 22.5344 89.4329 22.2609 89.4329 21.7413V14.4945C89.4329 9.51743 90.8218 0.875909 102.178 0.875909ZM110.783 11.2403C110.783 15.0414 112.826 17.53 116.066 17.53C119.307 17.53 121.594 15.0688 121.594 11.2403C121.594 7.41174 119.225 5.00525 116.066 5.00525C112.907 5.00525 110.783 7.46644 110.783 11.2403ZM111.083 20.3193V29.207C111.083 29.7265 110.783 30 110.32 30H106.235C105.772 30 105.5 29.7265 105.5 29.207V2.07916C105.5 1.28611 105.936 0.875909 106.725 0.875909H110.102C110.919 0.875909 111.083 1.28611 111.083 2.07916V4.04812H111.382C115.549 -3.82769 127.422 0.438365 127.422 11.2403C127.422 22.8352 115.358 24.9135 111.083 20.3193ZM47.604 11.2403C47.604 15.0414 49.6737 17.53 52.8871 17.53C56.1005 17.53 58.4153 15.0688 58.4153 11.2403C58.4153 7.41174 56.0733 5.00525 52.8871 5.00525C49.7009 5.00525 47.604 7.46644 47.604 11.2403ZM47.8491 20.3193V29.207C47.8491 29.7265 47.5223 30 47.0594 30H43.0018C42.5116 30 42.2665 29.7265 42.2665 29.207V2.07916C42.2665 1.28611 42.675 0.875909 43.4647 0.875909H46.8688C47.6857 0.875909 47.8491 1.28611 47.8491 2.07916V4.04812H48.1214C52.288 -3.82769 64.1613 0.438365 64.1613 11.2403C64.1613 22.8352 52.0974 24.9135 47.8491 20.3193Z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-[10px] md:text-sm lg:text-base uppercase tracking-widest mt-2 opacity-90">
                membership
              </p>
            </div>
            <div>
              <div className="flex items-start gap-1">
                <h1 className="text-3xl md:text-5xl font-semibold">$17</h1>
                <p className="text-xs md:text-base mt-2">/mo</p>
              </div>
              <p className="text-xs md:text-sm opacity-90">
                Billed annually at $199
              </p>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

function ImagePlaceHolder({ targetNumber }: { targetNumber: number }) {
  const [visibleNumber, setVisibleNumber] = useState(targetNumber);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (targetNumber !== visibleNumber) {
      const ctx = gsap.context(() => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.25,
          onComplete: () => {
            setVisibleNumber(targetNumber);
            
            gsap.to(containerRef.current, {
              opacity: 1,
              duration: 0.35,
            });
          },
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, [targetNumber, visibleNumber]);

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      {visibleNumber === 0 ? <MasterCard /> : <ImageShow number={visibleNumber} />}
    </div>
  );
}

function Membership() {
  const [activeImage, setActiveImage] = useState<number>(0);

  return (
    <section className="flex items-start justify-center w-full mt-3 sm:mt-6 md:mt-10 px-4 max-[991px]:px-6">
      <div className="flex flex-col min-[991px]:flex-row items-stretch gap-8 w-full min-[991px]:w-[85vw] max-w-[1200px]">
        <div className="flex flex-1 flex-col gap-3 w-full">
          <div className="w-full rounded-3xl border border-[#e4e4e7] bg-white overflow-hidden relative flex items-center justify-center min-h-[400px]">
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