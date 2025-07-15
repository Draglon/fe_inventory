import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Indicator from "../";

describe("Indicator", () => {
  describe("renders component", () => {
    const defaultProps = {
      active: false,
    };

    const renderComponent = (props = defaultProps) =>
      render(<Indicator {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("indicator")).toHaveClass("indicator");
      expect(screen.getByTestId("indicator")).not.toHaveClass(
        "indicator--active"
      );
    });

    it("when active is true", () => {
      const props = { ...defaultProps, active: true };
      renderComponent(props);

      screen.debug();

      expect(screen.getByTestId("indicator")).toHaveClass("indicator");
      expect(screen.getByTestId("indicator")).toHaveClass("indicator--active");
    });
  });
});
