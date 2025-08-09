import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Image from "../";

describe("Image", () => {
  describe("renders component", () => {
    const defaultProps = {
      className: "image-classes",
      src: "/image_src",
      alt: "alt",
      width: 100,
      height: 100,
      testid: "imageTestId",
    };

    const renderComponent = (props = defaultProps) =>
      render(<Image {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("imageTestId")).toHaveClass("image-classes");
    });
  });
});
