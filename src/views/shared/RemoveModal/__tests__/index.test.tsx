import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import RemoveProductModal from "../";

const mockDispatch = jest.fn();
jest.mock("../../../../store/hooks", () => ({
  ...jest.requireActual("../../../../store/hooks"),
  useAppDispatch: () => mockDispatch,
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

describe("RemoveProductModal", () => {
  describe("renders component", () => {
    const defaultProps = {
      title: "Modal title",
      product: {
        title: "Product title",
        photo: "/product_photo_src.png",
        serialNumber: "Serial number",
        isNew: false,
      },
      onRemove: jest.fn(),
    };

    const renderComponent = (props = defaultProps) =>
      render(<RemoveProductModal {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Modal title")).toBeInTheDocument();
      expect(screen.getByText("Product title")).toBeInTheDocument();
      expect(screen.getByText("Serial number")).toBeInTheDocument();
      expect(screen.getByTestId("indicator")).toBeInTheDocument();
      expect(screen.getByTestId("handleClose")).toHaveTextContent("Cancel");
      expect(screen.getByTestId("handleRemove")).toHaveTextContent("Delete");
    });
  });
});
