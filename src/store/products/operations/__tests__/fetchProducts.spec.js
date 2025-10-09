import { configureStore } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import fetchProducts from "../fetchProducts";
import productsReducer from "../../reducer";

describe("fetchProducts thunk", () => {
  let store;
  let axiosGetSpy;

  beforeEach(() => {
    axiosGetSpy = jest.spyOn(axios, "get");
    store = configureStore({
      reducer: {
        products: productsReducer,
      },
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should handle successful GET request", async () => {
    const mockProducts = [{ id: "1" }];
    axiosGetSpy.mockResolvedValueOnce({ data: mockProducts });

    await store.dispatch(fetchProducts());

    expect(axiosGetSpy).toHaveBeenCalledWith("/products", {});
    expect(store.getState().products.status).toBe("loaded");
    expect(store.getState().products.data).toEqual(mockProducts);
    expect(store.getState().products.error).toBe(null);
  });

  it("should handle failed GET request", async () => {
    const mockError = { message: "Failed to GET request" };
    axiosGetSpy.mockRejectedValueOnce({ response: { data: mockError } });
  
    await store.dispatch(fetchProducts());
  
    expect(axiosGetSpy).toHaveBeenCalledWith("/products", {});
    expect(store.getState().products.status).toBe("error");
    expect(store.getState().products.error).toEqual(mockError);
  });
});
