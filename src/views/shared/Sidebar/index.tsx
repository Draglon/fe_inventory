import Navigation from "@/views/shared/Navigation";

const menu = [
  {
    href: "/parishes",
    text: "Navigation.parishes",
  },
  {
    href: "/groups",
    text: "Navigation.groups",
  },
  {
    href: "/products",
    text: "Navigation.products",
  },
  {
    href: "/users",
    text: "Navigation.users",
  },
  {
    href: "/settings",
    text: "Navigation.settings",
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navigation menu={menu} />
    </div>
  );
};

export default Sidebar;
