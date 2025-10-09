import { productsSlice } from "../reducer";
import fetchProducts from "../operations/fetchProducts";
import createProduct from "../operations/createProduct";
import deleteProduct from "../operations/deleteProduct";

describe("productsSlice reducer", () => {
  const initialState = {
    data: [],
    status: undefined,
    error: null,
  };

  describe("productsSlice extraReducers for", () => {
    describe("fetchProducts", () => {
      it("should handle fetchProducts.pending", () => {
        const newState = productsSlice.reducer(initialState, fetchProducts.pending());

        expect(newState.status).toEqual("loading");
        expect(newState.data).toEqual([]);
        expect(newState.error).toEqual(null);
      });

      it("should handle fetchProducts.fulfilled", () => {
        const defaultState = { ...initialState, status: "loading" };
        const payload = { data: "data" };
        const newState = productsSlice.reducer(defaultState, fetchProducts.fulfilled(payload));

        expect(newState.status).toEqual("loaded");
        expect(newState.data).toEqual(payload);
        expect(newState.error).toEqual(null);
      });

      it("should handle fetchProducts.rejected", () => {
        const defaultState = { ...initialState, status: "error" };
        const errorPayload = { message: "Failed to create GET request" };
        const newState = productsSlice.reducer(defaultState, fetchProducts.rejected(null, "requestId", null, errorPayload));

        expect(newState.status).toEqual("error");
        expect(newState.data).toEqual([]);
        expect(newState.error).toEqual(errorPayload);
      });
    });

    describe("createProduct", () => {
      it("should handle createProduct.pending", () => {
        const newState = productsSlice.reducer(initialState, createProduct.pending());

        expect(newState.status).toEqual("loading");
        expect(newState.data).toEqual([]);
        expect(newState.error).toEqual(null);
      });

      it("should handle createProduct.fulfilled", () => {
        const defaultState = { ...initialState, status: "loading" };
        const payload = { data: "data" };
        const newState = productsSlice.reducer(defaultState, createProduct.fulfilled(payload));

        expect(newState.status).toEqual("loaded");
        expect(newState.data).toEqual(payload);
        expect(newState.error).toEqual(null);
      });

      it("should handle createProduct.rejected", () => {
        const defaultState = { ...initialState, status: "error" };
        const errorPayload = { message: "Failed to create GET request" };
        const newState = productsSlice.reducer(defaultState, createProduct.rejected(null, "requestId", null, errorPayload));

        expect(newState.status).toEqual("error");
        expect(newState.data).toEqual([]);
        expect(newState.error).toEqual(errorPayload);
      });
    });

    describe("deleteProduct", () => {
      it("should handle deleteProduct.pending", () => {
        const newState = productsSlice.reducer(initialState, deleteProduct.pending());

        expect(newState.status).toEqual("loading");
        expect(newState.data).toEqual([]);
        expect(newState.error).toEqual(null);
      });

      it("should handle deleteProduct.fulfilled", () => {
        const defaultState = { ...initialState, data: [{ _id: "1" }, { _id: "2" }], status: "loading" };
        const payload = "1";
        const newState = productsSlice.reducer(defaultState, deleteProduct.fulfilled(payload));

        expect(newState.status).toEqual("loaded");
        expect(newState.data).toEqual([{ _id: "2" }]);
        expect(newState.error).toEqual(null);
      });

      it("should handle deleteProduct.rejected", () => {
        const defaultState = { ...initialState, status: "error" };
        const errorPayload = { message: "Failed to create GET request" };
        const newState = productsSlice.reducer(defaultState, deleteProduct.rejected(null, "requestId", null, errorPayload));

        expect(newState.status).toEqual("error");
        expect(newState.data).toEqual([]);
        expect(newState.error).toEqual(errorPayload);
      });
    });
  });
});
