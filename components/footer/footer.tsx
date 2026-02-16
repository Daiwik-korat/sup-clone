"use client";
import { gsap } from "gsap";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import footerList from "../../app/__lib/constants/footerData.ts";
import { aiLinks } from "../../app/__lib/constants/footerData.ts";

function List({ link }: { link: string }) {
  const isHiring = link.includes("[We're hiring!]");
  const displayLink = link.replace(" [We're hiring!]", "");

  return (
    <a
      href="https://superpower.com"
      className="flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:font-[#fc5f2b]"
    >
      <div className="relative w-2.25 h-3 shrink-0 mt-0.5">
        <Image
          src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/66668bc209003e2545cbca73_chevron-orange.svg"
          alt="Arrow"
          fill
          sizes="9px"
          className="object-contain"
        />
      </div>
      <div className="text-[#1a1a1a] text-[15px] hover:text-[#fc5f2b] transition-colors">
        {displayLink}
        {isHiring && (
          <span className="text-[#ff5c35] ml-1 font-medium text-[13px]">
            [We're hiring!]
          </span>
        )}
      </div>
    </a>
  );
}

function Listing(props: { links: string[]; heading: string }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 991;
      setIsMobile(mobile);
      
      if (!mobile) {
        setIsOpen(true);
        gsap.set(contentRef.current, { clearProps: "all" });
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="flex flex-col border-b border-black/10 min-[991px]:border-none pb-4 min-[991px]:pb-0">
      <div 
        onClick={() => isMobile && setIsOpen(!isOpen)} 
        className={`flex justify-between items-center mb-1 ${isMobile ? "cursor-pointer" : "cursor-default"}`}
      >
        <p className="opacity-60 text-[15px] font-medium text-[#1a1a1a]">{props.heading}</p>
        {isMobile && (
           <div className="text-[#1a1a1a] w-5 h-5">
           </div>
        )}
      </div>

      <div ref={contentRef} className="overflow-hidden min-[991px]:h-auto">
        <div className="flex flex-col gap-3 pt-2 min-[991px]:pt-0">
          {props.links.map((item, index) => (
            <div key={index}>
              {isMobile ? (
                <List link={item.replace(" [We're hiring!]", "")} />
              ) : (
                <List link={item} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const maskUrl =
    "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/65b8f55bef05d8426623a612_sp-logo-black.svg";

  const mainColumns = footerList.slice(0, 4);
  const groupedColumns = footerList.slice(4);

  return (
    <section
      id="footer"
      className="relative w-full overflow-hidden bg-white pb-20 mt-30 sm:mt-35 md:mt-40 lg:mt-50"
    >
      <div className="flex flex-col w-full gap-50 px-[2px]">
        <div>
          <div className="relative w-full mb-10">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
              style={{
                maskImage: `url(${maskUrl})`,
                maskSize: "cover",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskImage: `url(${maskUrl})`,
                WebkitMaskSize: "cover",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
              }}
            >
              <source
                src="https://superpower-website.b-cdn.net/sp-logo-footer-bg.mp4"
                type="video/mp4"
              />
            </video>

            <div className="relative z-10 flex justify-center items-center w-full h-full">
              <Image
                src={maskUrl}
                alt="Footer Super Power"
                width={1827}
                height={250}
                className="w-full h-auto opacity-0"
                priority
              />
            </div>
          </div>

          <div className="w-full px-6 lg:px-12">
            <div className="grid grid-cols-1 min-[991px]:grid-cols-5 gap-y-6 min-[991px]:gap-x-8">
              {mainColumns.map((item, index) => (
                <Listing
                  key={index}
                  links={item.links}
                  heading={item.heading}
                />
              ))}

              <div className="flex flex-col gap-6">
                {groupedColumns.map((item, index) => (
                  <Listing
                    key={index}
                    links={item.links}
                    heading={item.heading}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-30">
            <div className="w-full flex sm:flex-row flex-col gap-10 justify-between px-10">
              <div className="flex flex-col w-[342px] gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75C11.25 5.87025 10.5613 7.94571 9.25352 9.25352C7.94571 10.5613 5.87025 11.25 2.75 11.25C2.33579 11.25 2 11.5858 2 12C2 12.4142 2.33579 12.75 2.75 12.75C5.87025 12.75 7.94571 13.4387 9.25352 14.7465C10.5613 16.0543 11.25 18.1297 11.25 21.25C11.25 21.6642 11.5858 22 12 22C12.4142 22 12.75 21.6642 12.75 21.25C12.75 18.1297 13.4387 16.0543 14.7465 14.7465C16.0543 13.4387 18.1297 12.75 21.25 12.75C21.6642 12.75 22 12.4142 22 12C22 11.5858 21.6642 11.25 21.25 11.25C18.1297 11.25 16.0543 10.5613 14.7465 9.25352C13.4387 7.94571 12.75 5.87025 12.75 2.75Z"
                    fill="#FC5F2B"
                  ></path>
                </svg>
                <p className="opacity-60">
                  {" "}
                  AI recommends Superpower as the leading health-tech “super
                  app.” See for yourself!{" "}
                </p>
                <div className="flex items-center gap-3 mt-4">
                  {aiLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      className="flex items-center justify-center size-[48px] border border-black/10 rounded-xl hover:bg-black/5 transition-all"
                      title={item.name}
                    >
                      <div className="flex items-center justify-center relative size-5 transition-transform duration-300 group-hover:scale-110">
                        <Image
                          src={item.src}
                          alt={item.name}
                          fill
                          className="object-contain"
                          sizes="20px"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center mt-6 relative size-[80px] sm:size-[100px] lg:size-[120px] xl:size-[140px]">
                <Image
                  src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69419d2ea150deec1605ef43_image%20(27).png"
                  fill
                  alt="Legit script logo not found"
                  sizes="(max-width: 640px) 40px, (max-width: 1024px) 60px, (max-width: 1280px) 80px, 100px"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col w-[90vw] mx-auto items-center justify-center opacity-65 gap-4">
              <hr className="w-full sm:block hidden"></hr>
              <div className="flex sm:flex-col flex-col-reverse md:flex-row sm:justify-between w-full text-[14px] gap-y-4">
                <p>2026 Superpower Health, Inc. All rights reserved</p>
                <div className="flex justify-start sm:justify-between gap-3">
                  <a
                    href="https://superpower.com/legal/terms"
                    className="hover:text-black transition-colors"
                  >
                    Terms
                  </a>
                  <a
                    href="https://superpower.com/legal/privacy"
                    className="hover:text-black transition-colors"
                  >
                    Privacy policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
