import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import NavigationLink from "..";

describe("NavigationLink", () => {
  describe("renders component", () => {
    const defaultProps = {
      href: "href",
      children: <span>Link text</span>,
      className: "link",
    };
    const renderComponent = (props = defaultProps) =>
      render(<NavigationLink {...props} />);

    it("with default props", () => {
      renderComponent();

      screen.debug();
    });
  });
});
