import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import PageHeader from "../";

describe("PageHeader", () => {
  describe("renders component", () => {
    const defaultProps = {
      title: "Title",
      withAddButton: false,
      children: <div>Description</div>,
    };

    const renderComponent = (props = defaultProps) =>
      render(<PageHeader {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Title")).toBeInTheDocument();
      expect(screen.getByText("Description")).toBeInTheDocument();
    });

    it("when quantity is present", () => {
      const props = {
        ...defaultProps,
        quantity: 25,
      };
      renderComponent(props);

      expect(screen.getByText("Title / 25")).toBeInTheDocument();
      expect(screen.getByText("Description")).toBeInTheDocument();
    });

    it("when withAddButton is true", () => {
      const props = {
        ...defaultProps,
        withAddButton: true,
      };
      renderComponent(props);

      expect(screen.getByText("Title")).toBeInTheDocument();
      expect(screen.getByText("Description")).toBeInTheDocument();
      expect(screen.getByTestId("btnPlus")).toHaveClass("btn-plus");
    });
  });
});
