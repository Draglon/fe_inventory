import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import {
  isLoadingSelector,
  productsSelector,
} from "@/store/products/selectors";
import ProductsList from "../index";

const mockDispatch = jest.fn();
jest.mock("../../../../store/hooks", () => ({
  ...jest.requireActual("../../../../store/hooks"),
  useAppDispatch: () => mockDispatch,
  useAppSelector: jest.fn((selector) => selector()),
}));

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation: { [key: string]: string } = {
      "Products.guarantee.from": "from",
      "Products.guarantee.to": "to",
      "shared.modal.removeProduct.title": "Remove product",
      "shared.status.repair": "Repair",
      "shared.status.used": "Used",
    };
    return translation[key] || key;
  }),
  useLocale: jest.fn(() => "en"),
}));

jest.mock("../../../../store/products/selectors", () => ({
  ...jest.requireActual("../../../../store/products/selectors"),
  isLoadingSelector: jest.fn(() => true),
  productsSelector: jest.fn(() => []),
}));

describe("ProductsList", () => {
  const mockProducts = [
    {
      _id: "1",
      title: "Product title",
      type: "Phone",
      serialNumber: "Product serial number",
      isNew: true,
      photo: undefined,
      specification: "Product specification",
      guarantee: {
        start: "2024-06-29T09:09:33.000Z",
        end: "2025-12-29T09:09:33.000Z",
      },
      price: [
        { value: 100, symbol: "$", isDefault: true },
        { value: 4200, symbol: "UAH", isDefault: false },
      ],
      products: [],
      date: "2024-06-29T09:09:33.000Z",
    },
  ];

  describe("renders component", () => {
    const renderComponent = () => render(<ProductsList />);

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("with default props", () => {
      renderComponent();

      expect(screen.queryByTestId("productsTable")).not.toBeInTheDocument();
      expect(screen.getByTestId("loader")).toBeInTheDocument();
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("with products", () => {
      isLoadingSelector.mockReturnValueOnce(false);
      productsSelector.mockReturnValueOnce(mockProducts);
      renderComponent();

      expect(screen.getByTestId("productsTable")).toBeInTheDocument();
      expect(screen.getByText("Product title")).toBeInTheDocument();
      expect(screen.getByText("Product serial number")).toBeInTheDocument();
      expect(screen.getByTestId("productStatusAvailable")).toBeInTheDocument();
      expect(screen.getByText("Repair")).toBeInTheDocument();
      expect(screen.getByText("from")).toBeInTheDocument();
      expect(screen.getByText("29 / 09 / 2024")).toBeInTheDocument();
      expect(screen.getByText("to")).toBeInTheDocument();
      expect(screen.getByText("29 / 09 / 2025")).toBeInTheDocument();
      expect(screen.getByTestId("productStatus")).toBeInTheDocument();
      expect(screen.getByText("Used")).toBeInTheDocument();
      expect(screen.getByText("29 / 09")).toBeInTheDocument();
      expect(screen.getByText("29 / June / 2024")).toBeInTheDocument();
      expect(screen.getByText("100 $")).toBeInTheDocument();
      expect(screen.getByText("4 200 UAH")).toBeInTheDocument();
      expect(screen.getByTestId("btnRemove")).toBeInTheDocument();
    });

    it("dispatches showModal() when press remove button", async () => {
      const user = userEvent.setup();
      isLoadingSelector.mockReturnValueOnce(false);
      productsSelector.mockReturnValueOnce(mockProducts);
      renderComponent();

      await user.click(screen.getByTestId("btnRemove"));

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
