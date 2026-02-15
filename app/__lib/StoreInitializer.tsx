// ./components/StoreInitializer.tsx
"use client";

import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsThunk } from "@/app/__lib/features/productSlice";
import { fetchFAQThunk } from "@/app/__lib/features/faqSlice";
import { fetchTestiThunk } from "@/app/__lib/features/testiSlice";
import { AppDispatch } from "@/app/__lib/store";

function StoreInitializer() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductsThunk());
    dispatch(fetchFAQThunk());
    dispatch(fetchTestiThunk());
  }, []);

  return null;
}

export default StoreInitializer;
