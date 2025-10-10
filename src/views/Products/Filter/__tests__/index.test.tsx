import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ProductsFilter from "../index";

jest.mock("../Type", () => () => (
  <mock-select-type data-testid="select-type" />
));

jest.mock("../Specification", () => () => (
  <mock-select-specification data-testid="select-specification" />
));

describe("ProductsFilter", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<ProductsFilter />);

    it("with default props", () => {
      renderComponent();

      expect(screen.queryByTestId("filter")).toBeInTheDocument();
      expect(screen.queryByTestId("select-type")).toBeInTheDocument();
      expect(screen.queryByTestId("select-specification")).toBeInTheDocument();
    });
  });
});
