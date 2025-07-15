import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import GuestLayout from "../";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mock-user-header": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "mock-sidebar": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "mock-modal-root": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

jest.mock("../../headers/GuestHeader", () => () => (
  <mock-guest-header data-testid="guest-header" />
));
jest.mock("../../../shared/ModalRoot", () => () => (
  <mock-modal-root data-testid="modal-root" />
));

describe("GuestLayout", () => {
  describe("renders component", () => {
    const defaultProps = { children: <div>Test</div> };
    const renderComponent = (props = defaultProps) =>
      render(<GuestLayout {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("guest-header")).toBeInTheDocument();
      expect(screen.getByTestId("modal-root")).toBeInTheDocument();
      expect(screen.getByText("Test")).toBeInTheDocument();
    });
  });
});
