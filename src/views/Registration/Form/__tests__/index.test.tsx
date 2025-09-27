import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import RegistrationForm from "../index";

const mockDispatch = jest.fn();
jest.mock("../../../../store/hooks", () => ({
  ...jest.requireActual("../../../../store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation = {
      "Registration.title": "Registration",
      "shared.email": "Email",
      "shared.password": "Password",
      "shared.signUp": "Sign up",
    };
    return translation[key] || key;
  }),
  useLocale: jest.fn(() => "en"),
}));

jest.mock("../../../../i18n/navigation", () => ({
  useRouter() {
    return {
      push: () => jest.fn(),
    };
  },
  usePathname: jest.fn(() => "/"),
}));

jest.mock("../../../../store/auth/selectors", () => ({
  ...jest.requireActual("../../../../store/auth/selectors"),
  isLoadingSelector: jest.fn(() => true),
}));

describe("RegistrationForm", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<RegistrationForm />);

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Registration")).toBeInTheDocument();
      expect(screen.getByText("Email")).toBeInTheDocument();
      expect(screen.getByText("Password")).toBeInTheDocument();
      expect(screen.getByText("Sign up")).toBeInTheDocument();
    });
  });
});
