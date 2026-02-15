"use client";
import Image from "next/image";

interface Props {
  id: string;
  url: string;
  title: string;
  description: string;
  points: {
    point1: string;
    point2: string;
    point3: string;
  };
  day: string;
}

export default function Step(props: Props) {
  return (
    <div
      id={props.id}
      className="
        relative 
        lg:absolute 
        w-full 
        max-w-7xl 
        lg:px-10
        left-1/2 
        -translate-x-1/2
        flex flex-col lg:flex-row lg:flex-row-3 flex-1
        items-start lg:items-center lg:justify-evenly
        gap-4 lg:gap-8
      "
    >
      <Image
        src={props.url}
        alt="Image URL no response OR URL Wrong"
        width={555}
        height={555}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 40vw"
        className="w-full lg:max-w-138.75 flex-1 rounded-2xl object-contain"
      />

      <div className="bg-orange-600 flex flex-none justify-center items-center min-w-15 font-[1rem] text-center lg:text-left text-white">
        {props.day}
      </div>

      <div className="flex-1 lg:max-w-100 lg:min-w-120 w-full">
        <h3 className="text-4xl lg:max-w-129.5 max-[1024px]:min-w-full sm:text-4xl md:text-4xl lg:text-4xl font-semibold leading-tight">
          {props.title}
        </h3>

        <div className="mt-2 text-lg md:text-xl lg:text-base max-[1024px]:min-w-full wrap-break-word">
          {props.description}
        </div>

        <ul className="mt-3 text-lg md:text-xl lg:text-base max-[1024px]:min-w-full list-disc pl-5">
          <li>{props.points.point1}</li>
          <li>{props.points.point2}</li>
          <li>{props.points.point3}</li>
        </ul>
      </div>
    </div>
  );
}
