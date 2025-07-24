import {
  ordersRoute,
  groupsRoute,
  productsRoute,
  usersRoute,
  settingsRoute,
} from "@/lib/routes";

export const NAVIGATION_MENU = [
  {
    href: ordersRoute,
    text: "Navigation.orders",
  },
  {
    href: groupsRoute,
    text: "Navigation.groups",
  },
  {
    href: productsRoute,
    text: "Navigation.products",
  },
  {
    href: usersRoute,
    text: "Navigation.users",
  },
  {
    href: settingsRoute,
    text: "Navigation.settings",
  },
];
