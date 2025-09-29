import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import { authUserRoute } from "@/lib/apiRoutes";
import { FETCH_USER } from "./../types";

const fetchUserOperation = createAsyncThunk(
  FETCH_USER,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(authUserRoute, {});
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default fetchUserOperation;
