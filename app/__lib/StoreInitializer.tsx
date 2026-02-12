"use client";

import { useRef } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/__lib/store";
import { fetchProductsThunk } from "@/app/__lib/features/productSlice";

export default function StoreInitializer() {
  const dispatch = useDispatch<AppDispatch>();
  const initialized = useRef(false);

  if (!initialized.current) {
    dispatch(fetchProductsThunk());
    initialized.current = true;
  }

  return null; 
}