import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ProductStatus from "../";

describe("ProductStatus", () => {
  describe("renders component", () => {
    const defaultProps = { active: false, status: "Inactive" };
    const renderComponent = (props = defaultProps) =>
      render(<ProductStatus {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("productStatus")).toHaveClass("status");
      expect(screen.getByTestId("productStatus")).not.toHaveClass(
        "status--active"
      );
      expect(screen.getByText("Inactive")).toBeInTheDocument();
    });

    it("when active is true", () => {
      const props = { ...defaultProps, active: true, status: "Active" };
      renderComponent(props);

      expect(screen.getByTestId("productStatus")).toHaveClass("status");
      expect(screen.getByTestId("productStatus")).toHaveClass("status--active");
      expect(screen.getByText("Active")).toBeInTheDocument();
    });
  });
});
