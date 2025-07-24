import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Login from "../index";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation = {
      "Login.title": "Login",
    };
    return translation[key] || key;
  }),
}));

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: () => jest.fn(),
      replace: () => jest.fn(),
    };
  },
}));

describe("Login", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<Login />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("logoImg")).toBeInTheDocument();
      expect(screen.getByText("Login")).toBeInTheDocument();
    });
  });
});
