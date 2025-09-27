import { productsSlice } from "../reducer";
import fetchProducts from "../operations/fetchProducts";
import createProduct from "../operations/createProduct";
import deleteProduct from "../operations/deleteProduct";

describe("productsSlice reducer", () => {
  const initialState = {
    data: null,
    status: undefined,
  };

  describe("productsSlice extraReducers for", () => {
    describe("fetchProducts", () => {
      it("should handle fetchProducts.pending", () => {
        const newState = productsSlice.reducer(initialState, fetchProducts.pending());
        expect(newState.status).toBe("loading");
      });

      it("should handle fetchProducts.fulfilled", () => {
        const defaultState = { ...initialState, status: "loading" };
        const payload = { data: "data" };
        const newState = productsSlice.reducer(defaultState, fetchProducts.fulfilled(payload));
        expect(newState.status).toBe("loaded");
        expect(newState.data).toEqual(payload);
      });

      it("should handle fetchProducts.rejected", () => {
        const defaultState = { ...initialState, status: "error" };
        const newState = productsSlice.reducer(defaultState, fetchProducts.rejected());
        expect(newState.status).toBe("error");
        expect(newState.data).toEqual(null);
      });
    });

    describe("createProduct", () => {
      it("should handle createProduct.pending", () => {
        const newState = productsSlice.reducer(initialState, createProduct.pending());
        expect(newState.status).toBe("loading");
      });

      it("should handle createProduct.fulfilled", () => {
        const defaultState = { ...initialState, status: "loading" };
        const payload = { data: "data" };
        const newState = productsSlice.reducer(defaultState, createProduct.fulfilled(payload));
        expect(newState.status).toBe("loaded");
        expect(newState.data).toEqual(payload);
      });

      it("should handle createProduct.rejected", () => {
        const defaultState = { ...initialState, status: "error" };
        const newState = productsSlice.reducer(defaultState, createProduct.rejected());
        expect(newState.status).toBe("error");
        expect(newState.data).toEqual(null);
      });
    });

    describe("deleteProduct", () => {
      it("should handle deleteProduct.pending", () => {
        const newState = productsSlice.reducer(initialState, deleteProduct.pending());
        expect(newState.status).toBe("loading");
      });

      it("should handle deleteProduct.fulfilled", () => {
        const defaultState = { ...initialState, status: "loading" };
        const payload = { data: "data" };
        const newState = productsSlice.reducer(defaultState, deleteProduct.fulfilled(payload));
        expect(newState.status).toBe("loaded");
        expect(newState.data).toEqual(payload);
      });

      it("should handle deleteProduct.rejected", () => {
        const defaultState = { ...initialState, status: "error" };
        const newState = productsSlice.reducer(defaultState, deleteProduct.rejected());
        expect(newState.status).toBe("error");
        expect(newState.data).toEqual(null);
      });
    });
  });
});
