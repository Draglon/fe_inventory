import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RegistrationForm from "@/views/Registration/Form";

import Registration from "../index";

jest.mock("../../layouts/GuestLayout", () => () => (
  <mock-guest-layout data-testid="guest-layout">
    <RegistrationForm />
  </mock-guest-layout>
));

jest.mock("../../Registration/Form", () => () => (
  <mock-registration-form data-testid="registration-form" />
));
describe("Registration", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<Registration />);
    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("guest-layout")).toBeInTheDocument();
      expect(screen.getByTestId("registration-form")).toBeInTheDocument();
    });
  });
});
