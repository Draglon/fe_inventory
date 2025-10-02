import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import DropdownHeader from "../index";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation: { [key: string]: string } = {
      "Groups.addProduct": "Add product",
    };
    return translation[key] || key;
  }),
}));

describe("DropdownHeader", () => {
  describe("renders component", () => {
    const defaultProps = {
      title: "Dropdown title",
    };
    const renderComponent = (props = defaultProps) =>
      render(<DropdownHeader {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Dropdown title")).toBeInTheDocument();
      expect(screen.getByTestId("button-plus")).toHaveTextContent(
        "Add product"
      );
    });
  });
});
