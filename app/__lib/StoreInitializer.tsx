"use client";

import { useRef, useEffect } from "react"; // Import useEffect
import { useAppDispatch } from "@/app/__lib/hooks";
import { setProducts } from "@/app/__lib/features/productSlice";
import { setFAQs } from "@/app/__lib/features/faqSlice";
import { setReviews } from "@/app/__lib/features/testiSlice";
import { ProductBundle, FAQ, Review } from "@/app/__lib/types";

interface Props {
  products: ProductBundle;
  faqs: FAQ[];
  reviews: Review[];
}

export default function StoreInitializer({ products, faqs, reviews }: Props) {
  const initialized = useRef(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!initialized.current) {
      dispatch(setProducts(products));
      dispatch(setFAQs(faqs));
      dispatch(setReviews(reviews));
      initialized.current = true;
    }
  }, [dispatch, products, faqs, reviews]);

  return null;
}