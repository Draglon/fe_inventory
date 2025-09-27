import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Products from "../index";

const mockDispatch = jest.fn();
jest.mock("../../../store/hooks", () => ({
  ...jest.requireActual("../../../store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation = {
      "Products.title": "Products",
    };
    return translation[key] || key;
  }),
}));

jest.mock("../List", () => () => (
  <mock-products-list data-testid="products-list" />
));
jest.mock("../Filter", () => () => (
  <mock-products-filter data-testid="products-filter" />
));

describe("Products", () => {
  const renderComponent = () => render(<Products />);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("renders component", () => {
    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Products / 25")).toBeInTheDocument();
      expect(screen.getByTestId("products-filter")).toBeInTheDocument();
      expect(screen.getByTestId("products-list")).toBeInTheDocument();
    });
  });
});
