import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Price from "../";

describe("Price", () => {
  describe("renders component", () => {
    const defaultProps = {
      className: "price-classes",
      price: { value: 100, symbol: "USD" },
      testid: "priceTestid",
    };

    const renderComponent = (props = defaultProps) =>
      render(<Price {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("priceTestid")).toHaveClass("price-classes");
      expect(screen.getByText("100 $")).toBeInTheDocument();
    });
  });
});
