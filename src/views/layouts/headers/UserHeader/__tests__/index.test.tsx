import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import UserHeader from "..";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation: { [key: string]: string } = {
      "shared.search": "Search",
    };
    return translation[key] || key;
  }),
  useLocale: jest.fn(() => "en"),
}));

const mockUseState = jest.fn();
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(() => ["2019-12-06T10:30:27.593Z", mockUseState]),
}));

jest.mock("../../../../../lib/socket", () => ({
  ...jest.requireActual("../../../../../lib/socket"),
  on: jest.fn(),
  disconnect: jest.fn(),
}));

jest.mock("../../../../shared/Logo", () => () => (
  <mock-logo data-testid="logo" />
));

describe("UserHeader", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<UserHeader />);

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("logo")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
      expect(screen.getByText("Friday")).toBeInTheDocument();
      expect(screen.getByText("06 Dec, 2019")).toBeInTheDocument();
      expect(screen.getByText("12:30 PM")).toBeInTheDocument();
    });
  });
});
