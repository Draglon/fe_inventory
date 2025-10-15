import totalPrice from "../totalPrice";

describe("totalPrice", () => {
  const items = [{
    price: [
      { value: 100, symbol: "USD" },
      { value: 4200, symbol: "UAH" },
    ],
  },
  {
    price: [
      { value: 1000, symbol: "USD" },
      { value: 42000, symbol: "UAH" },
    ],
  }];


  it("returns total price by usd", () => {
    expect(totalPrice(items, "USD")).toEqual(1100);
  });

  it("returns total price by uah", () => {
    expect(totalPrice(items, "UAH")).toEqual(46200);
  });
});
