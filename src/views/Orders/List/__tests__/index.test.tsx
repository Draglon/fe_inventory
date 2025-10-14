import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ordersSelector } from "@/store/orders/selectors";
import OrdersList from "../index";

const mockDispatch = jest.fn();
jest.mock("../../../../store/hooks", () => ({
  ...jest.requireActual("../../../../store/hooks"),
  useAppDispatch: () => mockDispatch,
  useAppSelector: jest.fn((selector) => selector()),
}));

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation: { [key: string]: string } = {
      "shared.modal.removeOrder.title": "Удалить ордер",
    };
    return translation[key] || key;
  }),
  useLocale: jest.fn(() => "en"),
}));

jest.mock("../../../../store/orders/selectors", () => ({
  ...jest.requireActual("../../../../store/orders/selectors"),
  isLoadingSelector: jest.fn(() => false),
  ordersSelector: jest.fn(() => []),
}));

describe("OrdersList", () => {
  const mockOrders = [
    {
      _id: "1",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      date: "2025-06-29T09:09:33.000Z",
      description: "Order description",
      products: [],
      title: "Order title",
      userId: "",
    },
  ];

  describe("renders component", () => {
    const renderComponent = () => render(<OrdersList />);

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("with default props", () => {
      renderComponent();

      expect(screen.queryByTestId("ordersTable")).not.toBeInTheDocument();
    });

    it("with orders", () => {
      ordersSelector.mockReturnValueOnce(mockOrders);
      renderComponent();

      expect(screen.getByTestId("ordersTable")).toBeInTheDocument();
      expect(screen.getByText("Order title")).toBeInTheDocument();
      expect(screen.getByText("29 / 09")).toBeInTheDocument();
      expect(screen.getByText("29 / June / 2025")).toBeInTheDocument();
    });

    it("dispatches showModal() when press remove button", async () => {
      const user = userEvent.setup();
      ordersSelector.mockReturnValueOnce(mockOrders);
      renderComponent();

      await user.click(screen.getByTestId("btnRemove"));

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
