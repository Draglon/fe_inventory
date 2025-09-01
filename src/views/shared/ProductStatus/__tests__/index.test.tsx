import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ProductStatus from "../";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation = {
      "shared.status.new": "New",
      "shared.status.used": "Used",
    };
    return translation[key] || key;
  }),
}));

describe("ProductStatus", () => {
  describe("renders component", () => {
    const defaultProps = { status: 0 };
    const renderComponent = (props = defaultProps) =>
      render(<ProductStatus {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("productStatus")).toHaveClass("status");
      expect(screen.getByTestId("productStatus")).not.toHaveClass(
        "status--active"
      );
      expect(screen.getByText("Used")).toBeInTheDocument();
    });

    it("when active is true", () => {
      const props = { ...defaultProps, status: 1 };
      renderComponent(props);

      expect(screen.getByTestId("productStatus")).toHaveClass("status");
      expect(screen.getByTestId("productStatus")).toHaveClass("status--new");
      expect(screen.getByText("New")).toBeInTheDocument();
    });
  });
});
