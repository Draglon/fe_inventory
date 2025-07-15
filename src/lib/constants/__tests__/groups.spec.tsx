import * as groups from "../groups";

it("groups constants match snapshot", () => {
  expect(groups).toMatchSnapshot();
});
