import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Settings from "../index";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation: { [key: string]: string } = {
      "Settings.title": "Settings",
    };
    return translation[key] || key;
  }),
}));

jest.mock("../../shared/LocalSwitcherSelect", () => () => (
  <mock-local-switcher-select data-testid="local-switcher-select" />
));

describe("Settings", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<Settings />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Settings")).toBeInTheDocument();
      expect(screen.getByTestId("local-switcher-select")).toBeInTheDocument();
    });
  });
});
