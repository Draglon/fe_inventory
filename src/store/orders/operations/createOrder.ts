import { createAsyncThunk } from "@reduxjs/toolkit";
// import { equals, pathOr } from "ramda";

import axios from "@/lib/axios.js";
// import { HTTP_STATUSES } from "@/lib/constants";
import { ordersRoute } from "@/lib/apiRoutes";
import { CREATE_ORDER } from "../types";

type ParamsType = {
  title: string;
  description: string;
  date: string;
};

const createOrderOperation = createAsyncThunk(
  CREATE_ORDER,
  async (params: ParamsType, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(ordersRoute, params);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
      // if (equals(pathOr(null, ["status"], error.toJSON()), HTTP_STATUSES.notFound)) {
      //   return alert("Не удалось создать ордер");
      // }
      // console.log("error: ", error.toJSON());
  },
);

export default createOrderOperation;
