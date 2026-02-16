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
      flex flex-col lg:flex-row
      items-start lg:items-center
      gap-5 lg:gap-10
    "
    >
      {/* Image */}
      <div className="w-full lg:flex-[1.1] lg:max-w-138.75 flex-shrink-0">
        <Image
          src={props.url}
          alt="Step image"
          width={555}
          height={555}
          className="w-full rounded-2xl object-contain"
        />
      </div>

      <div className="bg-orange-600 flex justify-center items-center max-w-15 max-h-7.5 lg:max-w-14 lg:max-h-6.75 px-4 py-2 text-white whitespace-nowrap">
        {props.day}
      </div>

      {/* Right Side */}
      <div className="flex w-full lg:flex-[0.9] min-w-0 lg:max-w-125 items-start gap-4">
        <div className="flex-1">
          <h3 className="text-4xl font-semibold leading-tight">
            {props.title}
          </h3>

          <div className="mt-2 text-[20px]">{props.description}</div>

          <ul className="mt-3 text-base list-disc pl-5">
            <li>{props.points.point1}</li>
            <li>{props.points.point2}</li>
            <li>{props.points.point3}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
