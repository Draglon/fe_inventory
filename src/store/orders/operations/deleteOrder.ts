import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import { orderRoute } from "@/lib/apiRoutes";
import { DELETE_ORDER } from "../types";

type ParamsType = {
  id: string;
};

const deleteOrderOperation = createAsyncThunk(
  DELETE_ORDER,
  async (params: ParamsType, { rejectWithValue }) => {
    try {
      const { id } = params;
      const { data } = await axios.delete(orderRoute(id));
  
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default deleteOrderOperation;
