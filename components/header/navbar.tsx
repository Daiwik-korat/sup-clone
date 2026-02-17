// ./components/navbar.tsx
"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useAppSelector } from "@/app/__lib/hooks";
import { RootState } from "@/app/__lib/store";
import { CatProducts } from "./category";
import Category from "./category";
import { GroupedData, Product } from "../../app/__lib/types";
import NextImage, { ImageProps } from "next/image";

function Navbar() {
  const Image = NextImage as React.ComponentType<ImageProps>;

  const [hoveredCategory, setHoveredCategory] = useState<GroupedData | null>(
    null,
  );

  const {
    productBundle,
    loading: productLoading,
    error: productError,
  } = useAppSelector((state: RootState) => state.products);

  if (productError && !productLoading) {
    throw new Error("Products Failed to load");
  }

  const groupedData: GroupedData[] = useMemo(() => {
    if (!productBundle.products || productBundle.products.length === 0)
      return [];

    const categories = [
      ...new Set(productBundle.products.map((item: Product) => item.tag)),
    ];

    const temp = categories.map((catName) => {
      const matchingProducts = productBundle.products.filter(
        (product: Product) => product.tag === catName,
      );

      return {
        categoryName: catName,
        products: matchingProducts,
      };
    });

    return temp;
  }, [productBundle.products]);

  const handleHeaderLeave = () => {
    setTimeout(() => {
      setHoveredCategory(null);
    }, 200);
  };

  return (
    <>
      <header
        onMouseLeave={handleHeaderLeave}
        className="min-[991px]:bg-black/70 bg-white/70 fixed inset-x-0 z-999 h-15 min-[991px]:text-white text-black lg:h-18 flex justify-between w-full backdrop-blur-xl max-[991px]:backdrop-blur-md lg:w-[95%] px-5 lg:rounded-full items-center max-w-[85rem] lg:mt-8 lg:pl-6 pb-[0] lg:pr-[0.5rem] lg:mx-auto"
      >
        {" "}
        <div className="flex-none flex items-center justify-start mt-2">
          <div className="w-32 lg:w-40">
            <Link href="/" className="w-32 lg:w-40 block">
              <div className="relative w-full h-8 lg:h-10">
                <Image
                  src="/nav1-white.svg"
                  alt="Logo"
                  fill
                  className="hidden min-[991px]:block object-contain"
                />
                <Image
                  src="/nav1-black.svg"
                  alt="Logo"
                  fill
                  className="block min-[991px]:hidden object-contain"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:flex flex-1 hidden items-center justify-center gap-4">
          {groupedData.length === 0 ? (
            <div className="text-gray-200 animate-pulse"> Loading </div>
          ) : (
            groupedData.map((item) => (
              <Category
                key={item.categoryName}
                data={item}
                hoveredCategory={hoveredCategory}
                onMouseEnter={() => setHoveredCategory(item)}
              />
            ))
          )}
        </div>
        {hoveredCategory && (
          <CatProducts
            products={hoveredCategory.products}
            onMouseExit={() => setHoveredCategory(null)}
          />
        )}
        <div className="flex-none flex items-center gap-6 justify-end">
          <Link
            className="cursor-pointer tracking-tight transition-transform hover:scale-110 inline-block"
            href={
              "https://app.superpower.com/signin?_gl=1*vr879l*_gcl_au*MTA1MTExMDM5LjE3NzAwMTMwMDk.*_ga*Mjk0MjA1NTQ4LjE3NzAwMTMwMDk.*_ga_BT53JGR46J*czE3NzA3MTU4MjYkbzMwJGcxJHQxNzcwNzE2MDY1JGoxOCRsMCRoMA.."
            }
          >
            Login
          </Link>

          <Link
            className="cursor-pointer tracking-tight transition-transform hover:scale-110 inline-block"
            href={"/how-it-works"}
          >
            How it works
          </Link>

          <div className="lg:flex hidden lg:items-center lg:justify-center">
            <Link
              href="https://superpower.com/checkout"
              className="cursor-pointer whitespace-nowrap rounded-full bg-[#fc5f2b] 
               px-3 py-2 text-sm          
               md:px-5 md:text-base     
               lg:py-4                    
               border border-black transition-transform hover:scale-110 inline-block"
            >
              Try Superpower
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
