import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import GuestHeader from "../";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mock-logo": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

jest.mock("../../../../shared/Logo", () => () => (
  <mock-logo data-testid="logo" />
));

describe("GuestHeader", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<GuestHeader />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("logo")).toBeInTheDocument();
    });
  });
});
