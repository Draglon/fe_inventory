import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import { productsRoute } from "@/lib/apiRoutes";
import { appliedFiltersSelector } from "../selectors";
import { FETCH_PRODUCTS } from "../types";

type paramsTypes = {
  filters: {
    type: string;
    specification: string;
  },
};

const fetchProductsOperation = createAsyncThunk(
  FETCH_PRODUCTS,
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const params: paramsTypes = {
      filters: appliedFiltersSelector(state),
    };

    try {
      const { data } = await axios.get(productsRoute, { params });
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default fetchProductsOperation;
