import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productSlice";
import faqReducer from "./features/faqSlice"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    faqs: faqReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;