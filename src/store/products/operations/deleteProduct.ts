import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import { productRoute } from "@/lib/apiRoutes";
import { DELETE_PRODUCT } from "../types";

type ParamsType = {
  id: string;
};

const deleteProductOperation = createAsyncThunk(
  DELETE_PRODUCT,
  async (params: ParamsType, { rejectWithValue }) => {
    try {
      const { id } = params;
      await axios.delete(productRoute(id));

      return id;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default deleteProductOperation;
