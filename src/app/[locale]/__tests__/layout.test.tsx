import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";

import messages from "@/messages/en";
import RootLayout from "../layout";

const locale = "en";
jest.mock("next-intl", () => ({
  useTranslations() {
    return {
      t: jest.fn(),
    };
  },
  useLocale() {
    return {
      currentLocale: locale,
    };
  },
}));

describe("RootLayout", () => {
  describe("renders component", () => {
    const renderComponent = () =>
      render(
        <NextIntlClientProvider locale={locale} messages={messages}>
          <RootLayout />
        </NextIntlClientProvider>
      );

    it("with default props", () => {
      const { container } = renderComponent();

      screen.debug();
      expect(container).toMatchSnapshot();
    });
  });
});
