"use client";
import Image from "next/image";

function ViewSample({ isBlack }: { isBlack: boolean }) {
  return (
    <a
      href="https://superpower.com/checkout"
      className={`group flex items-center justify-center gap-2 rounded-full w-40 h-13 font-medium transition-all 
        max-[991px]:absolute max-[991px]:left-1/2 max-[991px]:bottom-8 max-[991px]:-translate-x-1/2
        ${isBlack ? "text-white bg-black hover:bg-gray-800" : "text-black bg-white hover:bg-gray-100 shadow-sm"}
      `}
    >
      View sample
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform group-hover:translate-y-0.5"
      >
        <path
          d="M16.5 11.1355V14.4688C16.5 14.9109 16.3244 15.3348 16.0118 15.6473C15.6993 15.9599 15.2754 16.1355 14.8333 16.1355H3.16667C2.72464 16.1355 2.30072 15.9599 1.98816 15.6473C1.67559 15.3348 1.5 14.9109 1.5 14.4688V11.1355M4.83333 6.96883L9 11.1355M9 11.1355L13.1667 6.96883M9 11.1355V1.1355"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

function ActionPlan() {
  return (
    <section
      id="actionplan"
      className="w-full flex flex-col items-center py-12 md:py-20 px-6 overflow-hidden"
    >
      <div className="w-full max-w-7xl flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-[2rem] md:text-[3rem] font-medium tracking-tight">
            Compare our Action Plans
          </h2>
          <p className="text-lg opacity-60">
            Testing is step one. Superpower helps you actually get healthier.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[991px]:grid-cols-2 gap-6 w-full">
          <div className="relative bg-white border border-[#fc5f2b] rounded-[0.85rem] p-8 md:p-10 h-90 md:h-95 overflow-hidden flex flex-col justify-between">
            <div className="relative z-20 flex flex-col items-start w-fit">
              <Image
                src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68756d60749a9d4add4303c6_superpower-logo.svg"
                width={160}
                height={24}
                alt="Superpower Logo"
                className="w-32 md:w-40 brightness-0 scale-110"
              />
              <p className="text-[12px] font-medium text-black self-end -mt-0.5">
                Action Plan
              </p>
            </div>

            <div className="relative z-20 mt-auto min-[991px]:block">
              <ViewSample isBlack={true} />
            </div>

            <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
              <Image
                src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68bf490357c25d2fac6cc61f_Nature%20Superpower%201.avif"
                fill
                alt="Background Design"
                className="object-contain object-top-right opacity-80"
              />
            </div>
            <div className="absolute -right-4 bottom-[-10%] w-[60%] h-[90%] z-10 pointer-events-none">
              <Image
                src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68ddb5146c331cb64685a697_Frame%2016.avif"
                fill
                alt="Document Sample"
                className="object-contain object-bottom-right"
              />
            </div>
          </div>

          <div className="relative bg-[#f2f2f2] rounded-4xl p-8 md:p-10 h-90 md:h-95 overflow-hidden flex flex-col justify-between">
            <div className="relative z-20">
              <h3 className="text-xl font-medium text-black">
                General check up
              </h3>
            </div>

            <div className="relative z-20 mt-auto">
              <ViewSample isBlack={false} />
            </div>

            <div className="absolute right-[-5%] bottom-[-10%] w-[70%] h-[90%] pointer-events-none">
              <Image
                src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68bf49e24405bd4261bb8306_Group%201321315803.avif"
                fill
                alt="General checkup documents"
                className="object-contain object-bottom-right"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <a
            href="https://superpower.com/checkout"
            className="group cursor-pointer bg-[#fc5f2b] text-white px-10 h-14 md:h-16 rounded-full flex items-center justify-center font-semibold text-lg hover:brightness-110 hover:shadow-[0_10px_25px_rgba(252,95,43,0.4)] transition-all"
          >
            Start testing
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 25 25"
              fill="none"
              className="ml-2 transition-transform group-hover:translate-x-1"
            >
              <path
                d="M9.5 18.5967L15.5 12.5967L9.5 6.59668"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ActionPlan;
