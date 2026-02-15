import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productSlice";
import faqReducer from "./features/faqSlice";
import reviewReducer from "./features/testiSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    faqs: faqReducer,
    review: reviewReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
