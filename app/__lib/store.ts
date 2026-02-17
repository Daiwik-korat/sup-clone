// ./app/__lib/store.ts
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productSlice";
import faqReducer from "./features/faqSlice";
import reviewReducer from "./features/testiSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsReducer,
      faqs: faqReducer,
      review: reviewReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];