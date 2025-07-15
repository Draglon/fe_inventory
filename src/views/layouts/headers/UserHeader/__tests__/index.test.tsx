import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import UserHeader from "..";

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

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation = {
      "shared.search": "Search",
    };
    return translation[key] || key;
  }),
}));

describe("UserHeader", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<UserHeader />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("logo")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
      expect(screen.getByText("Вторник")).toBeInTheDocument();
      expect(screen.getByText("06 Апр, 2017")).toBeInTheDocument();
      expect(screen.getByText("17:20")).toBeInTheDocument();
    });
  });
});
