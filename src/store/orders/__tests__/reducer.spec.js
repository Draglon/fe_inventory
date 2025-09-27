import { ordersSlice } from "../reducer";
import fetchOrders from "../operations/fetchOrders";
import createOrder from "../operations/createOrder";
import deleteOrder from "../operations/deleteOrder";

describe("ordersSlice reducer", () => {
  const initialState = {
    data: null,
    status: undefined,
  };

  describe("ordersSlice extraReducers for", () => {
    describe("fetchOrders", () => {
      it("should handle fetchOrders.pending", () => {
        const newState = ordersSlice.reducer(initialState, fetchOrders.pending());
        expect(newState.status).toBe("loading");
      });

      it("should handle fetchOrders.fulfilled", () => {
        const defaultState = { ...initialState, status: "loading" };
        const payload = { data: "data" };
        const newState = ordersSlice.reducer(defaultState, fetchOrders.fulfilled(payload));
        expect(newState.status).toBe("loaded");
        expect(newState.data).toEqual(payload);
      });

      it("should handle fetchOrders.rejected", () => {
        const defaultState = { ...initialState, status: "error" };
        const newState = ordersSlice.reducer(defaultState, fetchOrders.rejected());
        expect(newState.status).toBe("error");
        expect(newState.data).toEqual(null);
      });
    });

    describe("createOrder", () => {
      it("should handle createOrder.pending", () => {
        const newState = ordersSlice.reducer(initialState, createOrder.pending());
        expect(newState.status).toBe("loading");
      });

      it("should handle createOrder.fulfilled", () => {
        const defaultState = { ...initialState, status: "loading" };
        const payload = { data: "data" };
        const newState = ordersSlice.reducer(defaultState, createOrder.fulfilled(payload));
        expect(newState.status).toBe("loaded");
        expect(newState.data).toEqual(payload);
      });

      it("should handle createOrder.rejected", () => {
        const defaultState = { ...initialState, status: "error" };
        const newState = ordersSlice.reducer(defaultState, createOrder.rejected());
        expect(newState.status).toBe("error");
        expect(newState.data).toEqual(null);
      });
    });

    describe("deleteOrder", () => {
      it("should handle deleteOrder.pending", () => {
        const newState = ordersSlice.reducer(initialState, deleteOrder.pending());
        expect(newState.status).toBe("loading");
      });

      it("should handle deleteOrder.fulfilled", () => {
        const defaultState = { ...initialState, status: "loading" };
        const payload = { data: "data" };
        const newState = ordersSlice.reducer(defaultState, deleteOrder.fulfilled(payload));
        expect(newState.status).toBe("loaded");
        expect(newState.data).toEqual(payload);
      });

      it("should handle deleteOrder.rejected", () => {
        const defaultState = { ...initialState, status: "error" };
        const newState = ordersSlice.reducer(defaultState, deleteOrder.rejected());
        expect(newState.status).toBe("error");
        expect(newState.data).toEqual(null);
      });
    });
  });
});
