"use client";
import { useAppSelector } from "@/app/__lib/hooks";
import { RootState } from "@/app/__lib/store";
import { useState } from "react";
import FAQ from "./faq";

function FAQSec() {
  const [openId, setOpenId] = useState<number>(0);

  const { faqs, loading: faqLoading, error: faqError } = useAppSelector(
    (state: RootState) => state.faqs,
  );

  if(!faqLoading && faqError) {
    throw new Error("FAQs Failed to load");
  }

  if (faqLoading === true) {
    return (
      <>
        <section className="w-screen flex justify-center items-center">
          <div className="text-8xl w-[80%]">Loading FAQ</div>;
        </section>
        ;
      </>
    );
  }
  const handleToggle = (id: number) => {
    if (openId === id) {
      setOpenId(0);
    } else {
      setOpenId(id);
    }
  };

  return (
    <>
      <section
        id="FAQ"
        className="w-screen flex justify-center items-center pt-[10%] lg:pt-20"
      >
        <div className="w-[80%] max-w-7xl flex flex-col items-start">
          <p className="text-[3rem] font-semibold -ml-[5%]">
            Frequently Asked Questions
          </p>

          <div className="mt-5 w-full flex flex-col gap-4">
            {faqs.map((item, index) => (
              <FAQ
                key={index}
                question={item.question}
                answer={item.answer}
                id={index + 1}
                openId={openId}
                ToggleFun={handleToggle}
              ></FAQ>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQSec;
