import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import GuestHeader from "../";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation = {
      "shared.logIn": "Log in",
      "shared.signUp": "Sign up",
    };
    return translation[key] || key;
  }),
  useLocale: jest.fn(() => "en"),
}));

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       "mock-logo": React.DetailedHTMLProps<
//         React.HTMLAttributes<HTMLElement>,
//         HTMLElement
//       >;
//     }
//   }
// }

jest.mock("../../../../shared/Logo", () => () => (
  <mock-logo data-testid="logo" />
));

jest.mock("../../../../shared/NavigationLink", () => () => (
  <mock-navigation-link data-testid="navigation-link" />
));
describe("GuestHeader", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<GuestHeader />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("logo")).toBeInTheDocument();
      expect(screen.getAllByTestId("navigation-link")).toHaveLength(2);
    });
  });
});
