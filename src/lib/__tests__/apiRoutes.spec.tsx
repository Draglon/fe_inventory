import * as apiRoutes from "../apiRoutes";

describe("apiRoutes constants", () => {
  describe("User", () => {
    it("authLoginRoute", () => {
      expect(apiRoutes.authLoginRoute).toBe("/auth/login");
    });

    it("authRegistrationRoute", () => {
      expect(apiRoutes.authRegistrationRoute).toBe("/auth/register");
    });

    it("authUserRoute", () => {
      expect(apiRoutes.authUserRoute).toBe("/auth/user");
    });
  });

  describe("Products", () => {
    it("productsRoute", () => {
      expect(apiRoutes.productsRoute).toBe("/products");
    });

    it("productRoute", () => {
      const productId = "7";
      expect(apiRoutes.productRoute(productId)).toBe(`/products/${productId}`);
    });
  });

  describe("Orders", () => {
    it("ordersRoute", () => {
      expect(apiRoutes.ordersRoute).toBe("/orders");
    });

    it("orderRoute", () => {
      const orderId = "3";
      expect(apiRoutes.orderRoute(orderId)).toBe(`/orders/${orderId}`);
    });
  });
});
