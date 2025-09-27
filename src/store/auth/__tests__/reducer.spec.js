import { authSlice } from "../reducer";
import fetchAuth from "../operations/fetchAuth";
import fetchRegister from "../operations/fetchRegister";
import fetchUser from "../operations/fetchUser";

describe("authSlice reducer", () => {
  const initialState = {
    data: null,
    status: undefined,
  };

  it("should handle logout", () => {
    const authState = { 
      data: { data: "data" },
      status: "loaded",
    };
    const action = authSlice.actions.logout(authState);
    const newState = authSlice.reducer(initialState, action);

    expect(newState.data).toBe(null);
  });

  describe("authSlice extraReducers for", () => {

    describe("fetchAuth", () => {
      it("should handle fetchAuth.pending", () => {
        const newState = authSlice.reducer(initialState, fetchAuth.pending());
        expect(newState.status).toBe("loading");
      });

      it("should handle fetchAuth.fulfilled", () => {
        const defaultState = { ...initialState, status: "loading" };
        const payload = { data: "data" };
        const newState = authSlice.reducer(defaultState, fetchAuth.fulfilled(payload));
        expect(newState.status).toBe("loaded");
        expect(newState.data).toEqual(payload);
      });

      it("should handle fetchAuth.rejected", () => {
        const defaultState = { ...initialState, status: "error" };
        const newState = authSlice.reducer(defaultState, fetchAuth.rejected());
        expect(newState.status).toBe("error");
        expect(newState.data).toEqual(null);
      });
    });

    describe("fetchRegister", () => {
      it("should handle fetchRegister.pending", () => {
        const newState = authSlice.reducer(initialState, fetchRegister.pending());
        expect(newState.status).toBe("loading");
      });

      it("should handle fetchRegister.fulfilled", () => {
        const defaultState = { ...initialState, status: "loading" };
        const payload = { data: "data" };
        const newState = authSlice.reducer(defaultState, fetchRegister.fulfilled(payload));
        expect(newState.status).toBe("loaded");
        expect(newState.data).toEqual(payload);
      });

      it("should handle fetchRegister.rejected", () => {
        const defaultState = { ...initialState, status: "error" };
        const newState = authSlice.reducer(defaultState, fetchRegister.rejected());
        expect(newState.status).toBe("error");
        expect(newState.data).toEqual(null);
      });
    });

    describe("fetchUser", () => {
      it("should handle fetchUser.pending", () => {
        const newState = authSlice.reducer(initialState, fetchUser.pending());
        expect(newState.status).toBe("loading");
      });

      it("should handle fetchUser.fulfilled", () => {
        const defaultState = { ...initialState, status: "loading" };
        const payload = { data: "data" };
        const newState = authSlice.reducer(defaultState, fetchUser.fulfilled(payload));
        expect(newState.status).toBe("loaded");
        expect(newState.data).toEqual(payload);
      });

      it("should handle fetchUser.rejected", () => {
        const defaultState = { ...initialState, status: "error" };
        const newState = authSlice.reducer(defaultState, fetchUser.rejected());
        expect(newState.status).toBe("error");
        expect(newState.data).toEqual(null);
      });
    });
  });
});
