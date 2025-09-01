import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import DropdownItem from "../index";

jest.mock("../../../shared/ProductStatus", () => () => (
  <mock-product-status data-testid="product-status" />
));

describe("DropdownItem", () => {
  describe("renders component", () => {
    const defaultProps = {
      product: {
        title: "Product title",
        photo: "/productImage.png",
        serialNumber: "Product serial number",
        isNew: 1,
        status: "Product status",
      },
    };
    const renderComponent = (props = defaultProps) =>
      render(<DropdownItem {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Product title")).toBeInTheDocument();
      expect(screen.getByText("Product serial number")).toBeInTheDocument();
      expect(screen.getByTestId("indicator")).toBeInTheDocument();
      expect(screen.getByTestId("btnRemove")).toBeInTheDocument();
      expect(screen.getByTestId("product-status")).toBeInTheDocument();
    });
  });
});
