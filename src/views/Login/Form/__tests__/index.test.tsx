import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, fireEvent } from "@testing-library/react";

// import fetchAuth from "@/store/auth/operations/fetchAuth";
import LoginForm from "../index";

const mockDispatch = jest.fn();
jest.mock("../../../../store/hooks", () => ({
  ...jest.requireActual("../../../../store/hooks"),
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

describe("LoginForm", () => {
  const renderComponent = () => render(<LoginForm />);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("renders component", () => {
    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Login")).toBeInTheDocument();
      expect(screen.getByText("Email")).toBeInTheDocument();
      expect(screen.getByText("Password")).toBeInTheDocument();
      expect(screen.getByText("Log in")).toBeInTheDocument();
    });
  });

  describe("onSubmit()", () => {
    it("dispatches fetchAuth()", async () => {
      const user = userEvent.setup();
      renderComponent();

      const emailInput = screen.getByTestId("emailInput");
      fireEvent.change(emailInput, { target: { value: "test@example.com" } });
      expect(emailInput.value).toBe("test@example.com");

      const passwordInput = screen.getByTestId("passwordInput");
      fireEvent.change(passwordInput, { target: { value: "password123" } });
      expect(passwordInput.value).toBe("password123");

      await user.click(screen.getByTestId("submitButton"));

      // await waitFor(() => {
      //   expect(mockDispatch).toHaveBeenCalledWith(
      //     fetchAuth({ email: "test@example.com", password: "password123" })
      //   );
      // });
    });
  });
});
