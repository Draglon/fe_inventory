import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import { productsRoute } from "@/lib/apiRoutes";
import { FETCH_PRODUCTS } from "../types";

const fetchProductsOperation = createAsyncThunk(
  FETCH_PRODUCTS,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(productsRoute, {});
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default fetchProductsOperation;
