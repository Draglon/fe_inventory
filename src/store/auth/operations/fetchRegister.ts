import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import { authRegistrationRoute } from "@/lib/apiRoutes";
import { FETCH_REGISTER } from "./../types";

type ParamsType = {
  email?: string;
  password?: string;
};

const fetchRegistrationOperation = createAsyncThunk(
  FETCH_REGISTER,
  async (params: ParamsType, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(authRegistrationRoute, params);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default fetchRegistrationOperation;
