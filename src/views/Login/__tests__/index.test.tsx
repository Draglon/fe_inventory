import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Login from "../index";

const mockDispatch = jest.fn();
jest.mock("../../../store/hooks", () => ({
  ...jest.requireActual("../../../store/hooks"),
  useAppDispatch: () => mockDispatch,
  useAppSelector: jest.fn((selector) => selector()),
}));

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation = {
      "Login.title": "Login",
      "shared.email": "Email",
      "shared.password": "Password",
      "shared.logIn": "Log in",
    };
    return translation[key] || key;
  }),
  useLocale: jest.fn(() => "en"),
}));

jest.mock("../../../i18n/navigation", () => ({
  useRouter() {
    return {
      push: () => jest.fn(),
    };
  },
}));

jest.mock("../../../store/auth/selectors", () => ({
  ...jest.requireActual("../../../store/auth/selectors"),
  isLoadingSelector: jest.fn(() => true),
}));

describe("Login", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<Login />);

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Login")).toBeInTheDocument();
      expect(screen.getByText("Email")).toBeInTheDocument();
      expect(screen.getByText("Password")).toBeInTheDocument();
      expect(screen.getByText("Log in")).toBeInTheDocument();
    });
  });
});
