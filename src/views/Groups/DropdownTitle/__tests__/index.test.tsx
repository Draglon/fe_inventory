import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import DropdownTitle from "../index";

describe("DropdownTitle", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<DropdownTitle />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("23")).toBeInTheDocument();
      expect(screen.getByText("Продукта")).toBeInTheDocument();
      expect(screen.getByText("10 / 12")).toBeInTheDocument();
      expect(screen.getByText("06 / Окт / 2017")).toBeInTheDocument();
      expect(screen.getByTestId("btnList")).toBeInTheDocument();
    });
  });
});
