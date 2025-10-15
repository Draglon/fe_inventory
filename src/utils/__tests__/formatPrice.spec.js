import formatPrice from "../formatPrice";

describe("formatPrice", () => {
  const price = { value: 200000, symbol: "UAH" };

  it("returns formatted price by UAH without fraction", () => {
    expect(formatPrice(price)).toEqual('200 000 UAH');
  });

  it("returns formatted price by UAH with fraction", () => {
    const newPrice = { ...price, value: 2200000.5 };

    expect(formatPrice(newPrice)).toEqual('2 200 000. 50 UAH');
  });

  it("returns formatted price by USD without fraction", () => {
    const newPrice = { ...price, symbol: "USD" };

    expect(formatPrice(newPrice)).toEqual('200 000 $');
  });

  it("returns formatted price by USD with fraction", () => {
    const newPrice = { value: 2200000.5, symbol: "USD" };

    expect(formatPrice(newPrice)).toEqual('2 200 000. 50 $');
  });
});
