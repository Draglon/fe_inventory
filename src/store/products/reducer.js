import { createSlice } from "@reduxjs/toolkit";

import fetchProducts from "./operations/fetchProducts";
import createProduct from "./operations/createProduct";
import deleteProduct from "./operations/deleteProduct";

const initialState = {
  data: null,
  status: undefined,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    logout: state => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.data = null;
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.data = null;
      state.status = "error";
    });

    builder.addCase(createProduct.pending, (state) => {
      state.data = null;
      state.status = "loading";
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    });
    builder.addCase(createProduct.rejected, (state) => {
      state.data = null;
      state.status = "error";
    });

    builder.addCase(deleteProduct.pending, (state) => {
      state.data = null;
      state.status = "loading";
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    });
    builder.addCase(deleteProduct.rejected, (state) => {
      state.data = null;
      state.status = "error";
    });
  },
});

export default productsSlice.reducer;
