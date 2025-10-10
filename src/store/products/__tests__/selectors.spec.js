import * as selectors from "../selectors";

describe("Products selectors", () => {
  describe("productsSelector()", () => {
    it("returns data when data is present", () => {
      const initialState = { 
        data: { data: "data" },
        status: "loading",
      };
  
      const state = {
        products: initialState,
      };

      expect(selectors.productsSelector(state)).toEqual(initialState.data);
    });

    it("returns null when data is absent", () => {
      const initialState = { 
        data: null,
        status: "pending",
      };
  
      const state = {
        products: initialState,
      };

      expect(selectors.productsSelector(state)).toEqual(initialState.data);
    });
  });

  describe("isLoadingSelector()", () => {
    it("returns true when status is loading", () => {
      const initialState = { 
        data: null,
        status: "loading",
      };
  
      const state = {
        products: initialState,
      };

      expect(selectors.isLoadingSelector(state)).toEqual(true);
    });

    it("returns false when status is not loading", () => {
      const initialState = { 
        data: null,
        status: "pending",
      };
  
      const state = {
        products: initialState,
      };

      expect(selectors.isLoadingSelector(state)).toEqual(false);
    });
  });

  describe("appliedFiltersSelector()", () => {
    it("returns filters", () => {
      const initialState = {
        filters: {
          type: "type",
        },
      };
  
      const state = {
        products: initialState,
      };

      expect(selectors.appliedFiltersSelector(state)).toEqual(initialState.filters);
    });
  });
});
