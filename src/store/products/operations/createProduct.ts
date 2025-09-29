import { createAsyncThunk } from "@reduxjs/toolkit";
// import { equals, pathOr } from "ramda";

import axios from "@/lib/axios.js";
// import { HTTP_STATUSES } from "@/lib/constants";
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
    // try {
    //   const { data } = await axios.post(productsRoute, params);
    //   return data;
    // } catch (error: any) {
    //   if (equals(pathOr(null, ["status"], error.toJSON()), HTTP_STATUSES.notFound)) {
    //     return alert("Не удалось создать продукт");
    //   }
    //   console.log("error: ", error.toJSON());
    // }
  },
);

export default createProductOperation;
