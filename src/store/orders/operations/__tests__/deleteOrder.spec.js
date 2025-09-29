import { configureStore } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import deleteOrder from "../deleteOrder";
import ordersReducer from "../../reducer";

describe("deleteOrder thunk", () => {
  let store;
  let axiosDeleteSpy;
  const orderId = "1";

  beforeEach(() => {
    axiosDeleteSpy = jest.spyOn(axios, "delete");
    store = configureStore({
      reducer: {
        orders: ordersReducer,
      },
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should handle successful DELETE request", async () => {
    axiosDeleteSpy.mockResolvedValueOnce({ data: {} });
    await store.dispatch(deleteOrder({ id: orderId }));

    expect(axiosDeleteSpy).toHaveBeenCalledWith(`/orders/${orderId}`);
    expect(store.getState().orders.status).toBe("loaded");
    expect(store.getState().orders.data).toEqual({});
    expect(store.getState().orders.error).toEqual(null);
  });

  it("should handle failed DELETE request", async () => {
    const mockError = { message: "Failed to create DELETE request" };
    axiosDeleteSpy.mockRejectedValueOnce({ response: { data: mockError } });
  
    await store.dispatch(deleteOrder({ id: orderId }));
  
    expect(axiosDeleteSpy).toHaveBeenCalledWith(`/orders/${orderId}`);
    expect(store.getState().orders.status).toBe("error");
    expect(store.getState().orders.data).toBe(null);
    expect(store.getState().orders.error).toEqual(mockError);
  });
});
