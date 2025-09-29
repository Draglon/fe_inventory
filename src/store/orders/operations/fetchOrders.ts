import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import { ordersRoute } from "@/lib/apiRoutes";
import { FETCH_ORDERS } from "../types";

const fetchOrdersOperation = createAsyncThunk(
  FETCH_ORDERS,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(ordersRoute, {});
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default fetchOrdersOperation;
