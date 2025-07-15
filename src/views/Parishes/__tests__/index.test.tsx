import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Parishes from "../index";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation = {
      "Parishes.title": "Parishes",
    };
    return translation[key] || key;
  }),
}));

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mock-parishes-list": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

jest.mock("../List", () => () => (
  <mock-parishes-list data-testid="parishes-list" />
));

describe("Parishes", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<Parishes />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("btnPlus")).toBeInTheDocument();
      expect(screen.getByTestId("parishes-list")).toBeInTheDocument();
      expect(screen.getByText("Parishes / 25")).toBeInTheDocument();
    });
  });
});
