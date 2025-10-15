import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import { productsRoute } from "@/lib/apiRoutes";
import { CREATE_PRODUCT } from "../types";

type ParamsType = {
  title?: string;
  type?: string;
  serialNumber?: string;
  isNew: number;
  photo?: string;
  specification?: string;
  guarantee?: {
    start: string;
    end: string;
  };
  price: {
    value: number;
    symbol: string;
    isDefault: number;
  }[];
  date: string;
};

const createProductOperation = createAsyncThunk(
  CREATE_PRODUCT,
  async (params: ParamsType, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(productsRoute, params);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default createProductOperation;
