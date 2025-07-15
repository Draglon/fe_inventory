import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Sidebar from "..";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mock-avatar": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "mock-navigation": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

jest.mock("../../Avatar", () => () => <mock-avatar data-testid="avatar" />);
jest.mock("../../Navigation", () => () => (
  <mock-navigation data-testid="navigation" />
));

describe("Sidebar", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<Sidebar />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("avatar")).toBeInTheDocument();
      expect(screen.getByTestId("navigation")).toBeInTheDocument();
    });
  });
});
