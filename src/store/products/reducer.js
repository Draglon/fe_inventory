import { createSlice } from "@reduxjs/toolkit";

import fetchProducts from "./operations/fetchProducts";
import createProduct from "./operations/createProduct";
import deleteProduct from "./operations/deleteProduct";

const initialState = {
  data: [],
  filters: {
    type: "",
    specification: "",
  },
  status: undefined,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilterParams: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });

    builder.addCase(createProduct.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
      state.error = null;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });

    builder.addCase(deleteProduct.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.data = state.data.filter((item) => item._id !== action.payload); 
      state.status = "loaded";
      state.error = null;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});

export default productsSlice.reducer;
