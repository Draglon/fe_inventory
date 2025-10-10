import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ProductsFilterSpecification from "../index";

const mockDispatch = jest.fn();
jest.mock("../../../../../store/hooks", () => ({
  ...jest.requireActual("../../../../../store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation: { [key: string]: string } = {
      "Products.filter.specification.label": "Specification:",
      "Products.filter.specification.option.all": "All",
      "Products.filter.specification.option.phone": "Phone",
      "Products.filter.specification.option.monitor": "Monitor",
    };
    return translation[key] || key;
  }),
}));

describe("ProductsFilterSpecification", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<ProductsFilterSpecification />);

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Specification:")).toBeInTheDocument();
      expect(screen.getByText("All")).toBeInTheDocument();
      expect(screen.getByText("Phone")).toBeInTheDocument();
      expect(screen.getByText("Monitor")).toBeInTheDocument();
    });
  });
});
