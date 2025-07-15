import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import RemoveModal from "../";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation = {
      "shared.delete": "Delete",
      "shared.cancel": "Cancel",
    };
    return translation[key] || key;
  }),
}));

describe("RemoveModal", () => {
  describe("renders component", () => {
    const defaultProps = {
      title: "Title",
      product: {
        title: "Product title",
        photo: "/product_photo_src.png",
        serialNumber: "serial number",
        isNew: false,
      },
      onRemove: jest.fn(),
    };

    const renderComponent = (props = defaultProps) =>
      render(<RemoveModal {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Modal title")).toBeInTheDocument();
      expect(screen.getByTestId("handleClose")).toHaveTextContent("Cancel");
      expect(screen.getByTestId("handleRemove")).toHaveTextContent("Delete");
    });
  });
});
