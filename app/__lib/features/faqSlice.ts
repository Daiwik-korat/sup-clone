import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAQ } from "../types";
import FAQ_FALLBACKs from "../constants/faqFallback";

const FAQ_QUERY = `
  query GetFAQs($linkName: String) {
    organizationPartnerIntegrationPublicInfo(linkName: $linkName) {
      faq {
        answer
        question
      }
    }
  }
`;

export const fetchFAQThunk = createAsyncThunk<FAQ[]>(
  "faq/fetchfaq",
  async () => {
    const URL: string = process.env.NEXT_PUBLIC_GRAPHQL_URL || "";
    const name: string = process.env.NEXT_PUBLIC_LINK_NAME || "";

    if (!URL || !name) {
      console.log(FAQ_FALLBACKs);
      return FAQ_FALLBACKs;
    }

    const res = await fetch(
      "https://api-staging.care360-next.carevalidate.com/graphql/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: FAQ_QUERY,
          variables: { linkName: name as string },
        }),
        cache: "no-store",
      },
    );

    if (!res.ok) {
      return FAQ_FALLBACKs;
    }

    const json = await res.json();

    const rawfaqs = json.data.organizationPartnerIntegrationPublicInfo.faq;

    if (rawfaqs.length === 0) {
      return FAQ_FALLBACKs;
    }

    const faqs: FAQ[] = rawfaqs.map((item: FAQ) => ({
      answer: item.answer,
      question: item.question,
    }));

    return faqs;
  },
);

interface FAQState {
  faqs: FAQ[];
  loading: boolean;
  error: boolean;
}

const initialState: FAQState = {
  faqs: [],
  loading: false,
  error: false,
};

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    setFAQs: (state, action) => {
      state.faqs = action.payload;
      state.loading = false;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFAQThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchFAQThunk.fulfilled, (state, action) => {
        state.faqs = action.payload;
        state.error = false;
        state.loading = false;
        console.log(state.faqs);
      })
      .addCase(fetchFAQThunk.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});
export const { setFAQs } = faqSlice.actions;
export default faqSlice.reducer;
