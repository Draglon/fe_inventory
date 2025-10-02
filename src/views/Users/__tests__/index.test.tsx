import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Users from "../index";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation: { [key: string]: string } = {
      "Users.title": "Users",
    };
    return translation[key] || key;
  }),
}));

describe("Users", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<Users />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Users")).toBeInTheDocument();
    });
  });
});
