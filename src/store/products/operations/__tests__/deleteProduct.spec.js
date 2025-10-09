import { configureStore } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import deleteProduct from "../deleteProduct";
import productsReducer from "../../reducer";

describe("deleteProduct thunk", () => {
  let store;
  let axiosDeleteSpy;
  const productId = "1";
  const mockProducts = [{ _id: productId }];

  beforeEach(() => {
    axiosDeleteSpy = jest.spyOn(axios, "delete");
    store = configureStore({
      reducer: {
        products: productsReducer,
      },
      preloadedState: {
        products: {
          data: mockProducts,
          status: "loading",
          error: null,
        },
      },
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should handle successful DELETE request", async () => {
    axiosDeleteSpy.mockResolvedValueOnce({
      data: { message: "Resource deleted successfully" },
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
      request: {}
    });

    await store.dispatch(deleteProduct({ id: productId }));

    expect(axiosDeleteSpy).toHaveBeenCalledWith(`/products/${productId}`);
    expect(store.getState().products.status).toBe("loaded");
    expect(store.getState().products.data).toEqual([]);
    expect(store.getState().products.error).toEqual(null);
  });

  it("should handle failed DELETE request", async () => {
    const mockError = { message: "Failed to create DELETE request" };
    axiosDeleteSpy.mockRejectedValueOnce({ response: { data: mockError } });
  
    await store.dispatch(deleteProduct({ id: productId }));
  
    expect(axiosDeleteSpy).toHaveBeenCalledWith(`/products/${productId}`);
    expect(store.getState().products.status).toBe("error");
    expect(store.getState().products.error).toEqual(mockError);
  });
});
