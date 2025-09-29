import { configureStore } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import fetchRegister from "../fetchRegister";
import authReducer from "../../reducer";

describe("fetchRegister thunk", () => {
  let store;
  let axiosPostSpy;
  const mockUser = {
    email: "email@gmail.com",
    password: "123456",
  };

  beforeEach(() => {
    axiosPostSpy = jest.spyOn(axios, "post");
    store = configureStore({
      reducer: {
        auth: authReducer,
      },
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should handle successful POST request", async () => {
    axiosPostSpy.mockResolvedValueOnce({ data: mockUser });

    await store.dispatch(fetchRegister(mockUser));

    expect(axiosPostSpy).toHaveBeenCalledWith("/auth/register", mockUser);
    expect(store.getState().auth.status).toBe("loaded");
    expect(store.getState().auth.data).toEqual(mockUser);
    expect(store.getState().auth.error).toEqual(null);
  });

  it("should handle failed POST request", async () => {
    const mockError = { message: "Failed to create POST request" };
    axiosPostSpy.mockRejectedValueOnce({ response: { data: mockError } });
  
    await store.dispatch(fetchRegister(mockUser));
  
    expect(axiosPostSpy).toHaveBeenCalledWith("/auth/register", mockUser);
    expect(store.getState().auth.status).toBe("error");
    expect(store.getState().auth.data).toBe(null);
    expect(store.getState().auth.error).toEqual(mockError);
  });
});
