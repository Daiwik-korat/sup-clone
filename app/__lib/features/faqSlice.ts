import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAQ } from "../types";

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
    const res = await fetch(
      "https://api-staging.care360-next.carevalidate.com/graphql/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: FAQ_QUERY,
          variables: { linkName: "senavida" },
        }),
        cache: "no-store",
      }
    );

    const json = await res.json();

    const rawfaqs = json.data.organizationPartnerIntegrationPublicInfo.faq;

    const faqs: FAQ[] = rawfaqs.map((item: FAQ) => ({
      answer: item.answer,
      question: item.question,
    }));

    return faqs;
  }
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFAQThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchFAQThunk.fulfilled, (state, action) => {
        state.faqs = action.payload;
        state.loading = false;
        console.log(state.faqs);
      })
      .addCase(fetchFAQThunk.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default faqSlice.reducer;