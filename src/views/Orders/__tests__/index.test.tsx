import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Orders from "../index";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation: { [key: string]: string } = {
      "Orders.title": "Orders",
    };
    return translation[key] || key;
  }),
}));

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mock-orders-list": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

jest.mock("../List", () => () => (
  <mock-orders-list data-testid="orders-list" />
));

describe("Orders", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<Orders />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("btnPlus")).toBeInTheDocument();
      expect(screen.getByTestId("orders-list")).toBeInTheDocument();
      expect(screen.getByText("Orders / 25")).toBeInTheDocument();
    });
  });
});
