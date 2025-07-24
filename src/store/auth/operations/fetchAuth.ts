import { createAsyncThunk } from "@reduxjs/toolkit";
import { equals, pathOr } from "ramda";

import axios from "@/lib/axios.js";
import { HTTP_STATUSES } from "@/lib/constants";
import { authLoginRoute } from "@/lib/apiRoutes";
import { FETCH_LOGIN } from "./../types";

type ParamsType = {
  email?: string;
  password?: string;
};

const fetchAuthOperation = createAsyncThunk(
  FETCH_LOGIN,
  async (params: ParamsType) => {
    try {
      const { data } = await axios.post(authLoginRoute, params);
      return data;
    } catch (error: any) {
      if (equals(pathOr(null, ["status"], error.toJSON()), HTTP_STATUSES.notFound)) {
        return alert("Не удалось авторизоваться");
      }
      console.log("error: ", error.toJSON());
    }
  },
);

export default fetchAuthOperation;
