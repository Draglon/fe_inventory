import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ProductsFilterType from "../index";

const mockDispatch = jest.fn();
jest.mock("../../../../../store/hooks", () => ({
  ...jest.requireActual("../../../../../store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation: { [key: string]: string } = {
      "Products.filter.type.label": "Type:",
      "Products.filter.type.option.all": "All",
      "Products.filter.type.option.phone": "Phone",
      "Products.filter.type.option.monitor": "Monitor",
    };
    return translation[key] || key;
  }),
}));

describe("ProductsFilterType", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<ProductsFilterType />);

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Type:")).toBeInTheDocument();
      expect(screen.getByText("All")).toBeInTheDocument();
      expect(screen.getByText("Phone")).toBeInTheDocument();
      expect(screen.getByText("Monitor")).toBeInTheDocument();
    });
  });
});
