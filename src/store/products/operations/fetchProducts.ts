import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import { productsRoute } from "@/lib/apiRoutes";
import { FETCH_PRODUCTS } from "../types";

const fetchProductsOperation = createAsyncThunk(
  FETCH_PRODUCTS,
  async () => {
    try {
      const { data } = await axios.get(productsRoute, {});
      return data;
    } catch (error) {
      console.log("error: ", error);
    }
  },
);

export default fetchProductsOperation;
