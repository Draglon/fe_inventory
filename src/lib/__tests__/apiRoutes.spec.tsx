import * as apiRoutes from "../apiRoutes";

it("apiRoutes constants match snapshot", () => {
  expect(apiRoutes).toMatchSnapshot();
});
