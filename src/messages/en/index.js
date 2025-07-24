import login from "./login";
import signup from "./signup";
import groups from "./groups";
import orders from "./orders";
import products from "./products";
import settings from "./settings";
import users from "./users";
import navigation from "./navigation";
import localeSwitcher from "./localeSwitcher";
import shared from "./shared";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...login,
  ...signup,
  ...groups,
  ...orders,
  ...products,
  ...settings,
  ...users,
  ...navigation,
  ...localeSwitcher,
  ...shared,
};