import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import { ordersRoute } from "@/lib/apiRoutes";
import { FETCH_ORDERS } from "../types";

const fetchOrdersOperation = createAsyncThunk(
  FETCH_ORDERS,
  async () => {
    try {
      const { data } = await axios.get(ordersRoute, {});
      return data;
    } catch (error) {
      console.log("error: ", error);
    }
  },
);

export default fetchOrdersOperation;
