"use client";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StatBlockData {
  id: number;
  value: number;
  text: string;
  icon: string;
  label: string;
}

interface StatBlockProps {
  data: StatBlockData;
}

const stats_data: StatBlockData[] = [
  {
    id: 1,
    value: 63,
    text: "find early risk factors for diabetes",
    icon: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68def0679cbb818651dd2a13_Frame%201597885470.avif",
    label: "Diabetes Risk",
  },
  {
    id: 2,
    value: 44,
    text: "find elevated heart disease risk",
    icon: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68def8182c785a6de4f745c9_Frame%201597885470%20(1).avif",
    label: "Heart Disease Risk",
  },
];

function CounterNumber({ val }: { val: number }) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const counter = { value: 0 };

      gsap.to(counter, {
        value: val,
        duration: 0.7,
        ease: "back.out",
        snap: { value: 1 },
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.textContent = counter.value.toLocaleString();
          }
        },
        scrollTrigger: {
          trigger: numberRef.current,
          start: "top bottom",
          end: "bottom top",
        },
      });
    },
    { dependencies: [val] },
  );

  return (
    <div className="flex gap-1 items-baseline text-black">
      <span
        ref={numberRef}
        className="text-[4.25rem] font-medium leading-none tracking-tighter"
      >
        0
      </span>
      <p className="text-[2rem] font-medium opacity-80">%</p>
    </div>
  );
}

const RiskStatBlock = ({ data }: StatBlockProps) => {
  return (
    <div className="flex flex-col justify-between h-full w-full p-8 text-black">
      <div>
        <CounterNumber val={data.value} />
        <p className="text-[1.1rem] opacity-60 mt-2 leading-tight">
          {data.text}
        </p>
      </div>

      <div className="w-full relative h-10 flex items-center">
        <div className="w-full h-1.5 bg-[#f4f4f5] rounded-full overflow-hidden absolute">
          <div
            className={`h-full bg-[#ff68de] rounded-full transition-all duration-1000 ease-out w-[${data.value}%]`}
          ></div>
        </div>

        <div
          className={`absolute top-6 transition-all duration-1000 ease-out left-[${data.value}%] -translate-x-1/2`}
        >
          <svg
            width="10"
            height="9"
            viewBox="0 0 10 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.40775 1.27461C5.79191 0.207943 4.25231 0.207942 3.63647 1.27461L0.865184 6.07461C0.249343 7.14128 1.01914 8.47461 2.25082 8.47461L7.79339 8.47461C9.02507 8.47461 9.79487 7.14128 9.17903 6.07461L6.40775 1.27461Z"
              className="fill-[#ff68de]"
            />
          </svg>
        </div>
      </div>

      <div className="flex gap-3 items-center mt-2">
        <Image
          src={data.icon}
          width={30}
          height={30}
          className="rounded-full"
          alt={data.label}
        />
        <p className="text-[1rem] font-medium">{data.label}</p>
      </div>
    </div>
  );
};

const FirstBlock = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full p-8 text-black">
      <CounterNumber val={70} />
      <div className="grow flex items-center justify-center my-4">
        <Image
          src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68df249ea8fe836663ddfddf_Bio-age%20graph.avif"
          width={465}
          height={286}
          className="w-full h-auto object-contain"
          sizes="(max-width: 991px) 100vw, 40vw"
          alt="Bio-age graph"
        />
      </div>
      <p className="text-[1.1rem] opacity-60 leading-tight">
        slow their speed of ageing
      </p>
    </div>
  );
};

export default function Statastics() {
  return (
    <section className="w-screen bg-[#f4f4f5] flex items-center justify-center py-12 min-[991px]:py-20 mt-14">
      <div className="w-full max-w-7xl flex flex-col mx-auto px-6">
        <div className="flex flex-col mb-10 max-[991px]:text-[3rem] text-[3.5rem] font-medium leading-tight">
          <p className="text-[#a1a1aa]">Members See results</p>
          <p className="text-black">in just 6 months</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col min-[991px]:flex-row gap-4 w-full h-auto min-[991px]:h-[500px]">
            <div className="bg-white rounded-2xl w-full min-[991px]:w-1/2 min-h-[350px] min-[991px]:h-full border border-gray-300 overflow-hidden">
              <FirstBlock />
            </div>

            <div className="w-full min-[991px]:w-1/2 flex flex-col gap-4">
              {stats_data.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl min-h-[240px] flex-1 border border-gray-300 overflow-hidden"
                >
                  <RiskStatBlock data={item} />
                </div>
              ))}
            </div>
          </div>

          <p className="text-[13px] opacity-60 mt-2">
            * Study conducted over 3,000 Superpower members, aggregated
            population health data over one year
          </p>
        </div>
      </div>
    </section>
  );
}
