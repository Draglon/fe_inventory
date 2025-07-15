import * as orders from "../navigation";

it("orders constants match snapshot", () => {
  expect(orders).toMatchSnapshot();
});
