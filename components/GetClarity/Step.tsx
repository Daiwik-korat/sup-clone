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
        w-full
        flex
        flex-col
        items-start
        gap-6
        py-8
        bg-white
        lg:absolute 
        lg:top-0 
        lg:left-0 
        lg:h-full
        lg:flex-row
        lg:items-center
        lg:justify-between
        lg:py-0
        lg:bg-transparent
      "
    >
      <div className="w-full lg:w-1/2 flex justify-start lg:justify-end lg:pr-12 xl:pr-16">
        <div className="relative w-full aspect-square lg:max-w-125">
          <Image
            src={props.url}
            alt={props.title}
            fill
            className="object-cover rounded-2xl shadow-sm"
          />
        </div>
      </div>

      <div className="
         z-20
         flex 
         justify-start 
         lg:justify-center
         lg:absolute lg:left-1/2 lg:-translate-x-1/2
      ">
        <div className="
          w-15 
          h-7.5 
          bg-orange-600 
          text-white 
          rounded-none 
          flex 
          justify-center 
          items-center 
          font-medium 
          text-sm
          shadow-none 
          lg:shadow-md
        ">
          {props.day}
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-12 xl:pl-16">
        <div className="w-full lg:max-w-lg mx-0">
          <h3 className="text-3xl lg:text-4xl font-semibold leading-tight text-gray-900 text-left">
            {props.title}
          </h3>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed text-left">
            {props.description}
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="shrink-0 mt-1">
                <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_306_4716)">
                    <path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71427 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333M6.00007 7.33333L8.00007 9.33333L14.6667 2.66666" stroke="#FC5F2B" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_306_4716"><rect width="16" height="16" fill="white" /></clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-gray-700 text-lg leading-snug">{props.points.point1}</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="shrink-0 mt-1">
                <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_306_4716)">
                    <path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71427 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333M6.00007 7.33333L8.00007 9.33333L14.6667 2.66666" stroke="#FC5F2B" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_306_4716"><rect width="16" height="16" fill="white" /></clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-gray-700 text-lg leading-snug">{props.points.point2}</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="shrink-0 mt-1">
                <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_306_4716)">
                    <path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71427 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333M6.00007 7.33333L8.00007 9.33333L14.6667 2.66666" stroke="#FC5F2B" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_306_4716"><rect width="16" height="16" fill="white" /></clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-gray-700 text-lg leading-snug">{props.points.point3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}