import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Avatar from "../";

describe("Avatar", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<Avatar />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("avatarImg")).toHaveClass("avatar__img");
      expect(screen.getByTestId("avatarButtonSettings")).toHaveClass(
        "avatar__button"
      );
    });
  });
});
