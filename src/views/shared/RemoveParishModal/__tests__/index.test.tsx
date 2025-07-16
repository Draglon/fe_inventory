import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import RemoveParishModal from "../";

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

describe("RemoveParishModal", () => {
  describe("renders component", () => {
    const defaultProps = {
      title: "Modal title",
      onRemove: jest.fn(),
    };

    const renderComponent = (props = defaultProps) =>
      render(<RemoveParishModal {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Modal title")).toBeInTheDocument();
      expect(screen.getByTestId("handleClose")).toHaveTextContent("Cancel");
      expect(screen.getByTestId("handleRemove")).toHaveTextContent("Delete");
    });
  });
});
