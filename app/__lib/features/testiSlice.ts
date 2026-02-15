import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Review } from "../types";

const TESTIMONIAL_QUERY = `
  query GetReviews($linkName: String) {
    organizationPublicTestimonials(linkName: $linkName) {
        content
        createdAt
        isVerified
        rating
        customerName
        title
      }
    }
`;

export const fetchTestiThunk = createAsyncThunk<Review[]>(
  "testi/fetchreview",
  async () => {
    const URL: string = process.env.NEXT_PUBLIC_GRAPHQL_URL;
    const name: string = process.env.NEXT_PUBLIC_LINK_NAME;

    if (!URL || !name) {
      return [];
    }

    const res = await fetch(
      "https://api-staging.care360-next.carevalidate.com/graphql/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: TESTIMONIAL_QUERY,
          variables: { linkName: name as string },
        }),
        cache: "no-store",
      },
    );

    const json = await res.json();

    const rawReviews = json.data.organizationPublicTestimonials;

    const review: Review[] = rawReviews.map((item: Review) => ({
      content: item.content,
      createdAt: item.createdAt,
      isVerified: item.isVerified,
      customerName: item.customerName,
      title: item.title,
      rating: item.rating,
    }));

    console.log(review);

    return review;
  },
);
interface ReviewState {
  review: Review[];
  loading: boolean;
  error: boolean;
}

const initialState: ReviewState = {
  review: [],
  loading: false,
  error: false,
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestiThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTestiThunk.fulfilled, (state, action) => {
        state.review = action.payload;
        state.loading = false;
        console.log(state.review);
      })
      .addCase(fetchTestiThunk.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default reviewSlice.reducer;
