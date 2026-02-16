"use client";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

interface FAQProp {
  question: string;
  answer: string;
  id: number;
  openId: number;
  ToggleFun: (index: number) => void;
}

function FAQ({ question, answer, id, ToggleFun, openId }: FAQProp) {
  const signRef = useRef<HTMLDivElement>(null);
  const verticalBarRef = useRef<HTMLDivElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);

  const isOpen = openId === id;

  useEffect(() => {
    gsap.to(signRef.current, {
      rotate: isOpen ? 180 : 0,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(verticalBarRef.current, {
      opacity: isOpen ? 0 : 1,
      duration: 0.3,
    });

    gsap.to(answerRef.current, {
      height: isOpen ? "auto" : 0,
      opacity: isOpen ? 1 : 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  }, [isOpen]);

  return (
    <div
      onClick={() => ToggleFun(id)}
      className="mt-2 w-full text-[1.25rem] flex flex-col gap-4 border-b border-black/10 pb-4 cursor-pointer"
    >
      <div className="flex justify-between items-center group">
        <p className="font-medium">{question}</p>
        <div
          ref={signRef}
          className="flex items-center justify-center relative w-4 h-4 shrink-0"
        >
          <div className="absolute w-full h-0.5 bg-current rounded-full"></div>
          <div
            ref={verticalBarRef}
            className="absolute h-full w-0.5 bg-current rounded-full"
          ></div>
        </div>
      </div>

      <div ref={answerRef} className="h-0 opacity-0 overflow-hidden">
        <div
          className="pt-2 pb-2 block text-gray-700"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </div>
  );
}

export default FAQ;
