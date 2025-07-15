import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Products from "../index";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation = {
      "Products.title": "Products",
    };
    return translation[key] || key;
  }),
}));

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mock-products-list": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "mock-products-filter": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

jest.mock("../List", () => () => (
  <mock-products-list data-testid="products-list" />
));
jest.mock("../Filter", () => () => (
  <mock-products-filter data-testid="products-filter" />
));

describe("Products", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<Products />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Products / 25")).toBeInTheDocument();
      expect(screen.getByTestId("products-filter")).toBeInTheDocument();
      expect(screen.getByTestId("products-list")).toBeInTheDocument();
    });
  });
});
