import { authSlice } from "../reducer";

describe("Auth actions", () => {
  describe("Logout actions", () => {
    it("should handle logout action", () => {
      const action = authSlice.actions.logout();
      expect(action.type).toBe("auth/logout");
    });
  });
});
