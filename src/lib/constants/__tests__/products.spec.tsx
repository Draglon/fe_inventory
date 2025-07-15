import * as products from "../products";

it("products constants match snapshot", () => {
  expect(products).toMatchSnapshot();
});
