import { configureStore } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import createProduct from "../createProduct";
import productsReducer from "../../reducer";

describe("createProduct thunk", () => {
  let store;
  let axiosPostSpy;
  const mockProduct = {
    title: "Title",
    description: "Description",
    date: "Date",
  };

  beforeEach(() => {
    axiosPostSpy = jest.spyOn(axios, "post");
    store = configureStore({
      reducer: {
        products: productsReducer,
      },
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should handle successful POST request", async () => {
    axiosPostSpy.mockResolvedValueOnce({ data: mockProduct });

    await store.dispatch(createProduct(mockProduct));

    expect(axiosPostSpy).toHaveBeenCalledWith("/products", mockProduct);
    expect(store.getState().products.status).toBe("loaded");
    expect(store.getState().products.data).toEqual(mockProduct);
    expect(store.getState().products.error).toEqual(null);
  });

  it("should handle failed POST request", async () => {
    const mockError = { message: "Failed to create POST request" };
    axiosPostSpy.mockRejectedValueOnce({ response: { data: mockError } });
  
    await store.dispatch(createProduct(mockProduct));
  
    expect(axiosPostSpy).toHaveBeenCalledWith("/products", mockProduct);
    expect(store.getState().products.status).toBe("error");
    expect(store.getState().products.error).toEqual(mockError);
  });
});
