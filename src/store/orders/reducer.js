import { createSlice } from "@reduxjs/toolkit";

import fetchOrders from "./operations/fetchOrders";
import createOrder from "./operations/createOrder";
import deleteOrder from "./operations/deleteOrder";

const initialState = {
  data: null,
  status: undefined,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    logout: state => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => {
      state.data = null;
      state.status = "loading";
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchOrders.rejected, (state) => {
      state.data = null;
      state.status = "error";
    });

    builder.addCase(createOrder.pending, (state) => {
      state.data = null;
      state.status = "loading";
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    });
    builder.addCase(createOrder.rejected, (state) => {
      state.data = null;
      state.status = "error";
    });

    builder.addCase(deleteOrder.pending, (state) => {
      state.data = null;
      state.status = "loading";
    });
    builder.addCase(deleteOrder.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    });
    builder.addCase(deleteOrder.rejected, (state) => {
      state.data = null;
      state.status = "error";
    });
  },
});

export default ordersSlice.reducer;
