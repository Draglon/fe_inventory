import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Groups from "../index";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation = {
      "Groups.title": "Groups title",
    };
    return translation[key] || key;
  }),
}));

describe("Groups", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<Groups />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Groups title / 25")).toBeInTheDocument();
    });
  });
});
