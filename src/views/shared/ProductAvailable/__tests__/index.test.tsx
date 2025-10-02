import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ProductAvailable from "../";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation: { [key: string]: string } = {
      "shared.status.free": "Free",
      "shared.status.repair": "Repair",
    };
    return translation[key] || key;
  }),
}));

describe("ProductAvailable", () => {
  describe("renders component", () => {
    const defaultProps = { status: 0 };
    const renderComponent = (props = defaultProps) =>
      render(<ProductAvailable {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("productStatusAvailable")).toHaveClass(
        "status"
      );
      expect(screen.getByTestId("productStatusAvailable")).not.toHaveClass(
        "status--free"
      );
      expect(screen.getByText("Repair")).toBeInTheDocument();
    });

    it("when status is repair", () => {
      const props = { ...defaultProps, status: 1 };
      renderComponent(props);

      expect(screen.getByTestId("productStatusAvailable")).toHaveClass(
        "status"
      );
      expect(screen.getByTestId("productStatusAvailable")).toHaveClass(
        "status--free"
      );
      expect(screen.getByText("Free")).toBeInTheDocument();
    });
  });
});
