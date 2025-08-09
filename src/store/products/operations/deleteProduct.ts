import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import { productRoute } from "@/lib/apiRoutes";
import { DELETE_PRODUCT } from "../types";

type ParamsType = {
  id: string;
};

const deleteProductOperation = createAsyncThunk(
  DELETE_PRODUCT,
  async (params: ParamsType) => {
    const { id } = params;
    const { data } = await axios.delete(productRoute(id));

    console.log("data: ", data);
    return data;
  },
);

export default deleteProductOperation;
