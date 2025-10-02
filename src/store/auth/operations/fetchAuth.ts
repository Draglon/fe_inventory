import { createAsyncThunk } from "@reduxjs/toolkit";
// import { equals, pathOr } from "ramda";

import axios from "@/lib/axios.js";
// import { HTTP_STATUSES } from "@/lib/constants";
import { ordersRoute } from "@/lib/routes";
import { authLoginRoute } from "@/lib/apiRoutes";
import { FETCH_LOGIN } from "./../types";

type ParamsType = {
  values: {
    email?: string;
    password?: string;
  }
  payload: {
    locale: string;
    router: any;
  },
};

const fetchAuthOperation = createAsyncThunk(
  FETCH_LOGIN,
  async (params: ParamsType, { rejectWithValue }) => {
    try {
      const { values, payload } = params;
      const { locale, router } = payload;
      const { data } = await axios.post(authLoginRoute, values);

      if ("token" in data) {
        localStorage.setItem("token", data.token);
        router.push(ordersRoute, { locale });
      }

      return data;
    } catch (error: any) {
      // if (equals(pathOr(null, ["status"], error.toJSON()), HTTP_STATUSES.notFound)) {
      //   return alert("Не удалось авторизоваться");
      // }
      console.log("error: ", error);
      return rejectWithValue(error.response.data);
    }
  },
);

export default fetchAuthOperation;
