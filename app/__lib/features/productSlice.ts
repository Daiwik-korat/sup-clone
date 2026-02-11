// ./app/__lib/features/productSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product, ProductBundle } from "../types";

const PRODUCTBUNDLES_QUERY = `
  query GetProducts($linkName: String) {
    organizationPartnerIntegrationPublicInfo(linkName: $linkName) {
      productBundles {
        name
        imageUrl
        price
        tag
      }
    }
  }
`;

export const fetchProductsThunk = createAsyncThunk<ProductBundle>(
  "products/fetchProducts",
  async () => {
    const URL: string = process.env.NEXT_PUBLIC_GRAPHQL_URL;
    const name: string = process.env.NEXT_PUBLIC_LINK_NAME;

    if (!URL || !name) {
      throw new Error("Environment variables not defined");
    }
    
    const res = await fetch(URL as string, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: PRODUCTBUNDLES_QUERY,
        variables: { linkName: name as string },
      }),
      cache: "no-store",
    });

    const json = await res.json();
    const rawBundles =
      json.data.organizationPartnerIntegrationPublicInfo.productBundles;

    const products: Product[] = rawBundles.map((item: Product) => ({
      name: item.name,
      imageUrl: item.imageUrl,
      price: item.price,
      tag: item.tag,
    }));

    return {
      products,
    };
  },
);

interface ProductsState {
  productBundle: ProductBundle;
  loading: boolean;
  error: boolean;
}

const initialState: ProductsState = {
  productBundle: { products: [] },
  loading: false,
  error: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.productBundle = action.payload;
        state.loading = false;
        console.log(state.productBundle);
      })
      .addCase(fetchProductsThunk.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default productSlice.reducer;
