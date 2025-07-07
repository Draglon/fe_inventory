import login from "./login";
import groups from "./groups";
import parishes from "./parishes";
import products from "./products";
import settings from "./settings";
import users from "./users";
import navigation from "./navigation";
import localeSwitcher from "./localeSwitcher";
import shared from "./shared";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...login,
  ...groups,
  ...parishes,
  ...products,
  ...settings,
  ...users,
  ...navigation,
  ...localeSwitcher,
  ...shared,
};