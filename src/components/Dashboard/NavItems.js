import Home from "../../assets/images/nav-icons/home.svg";
import Dashboard from "../../assets/images/nav-icons/dashboard.svg";
import Wallet from "../../assets/images/nav-icons/wallet.svg";
import Inventory from "../../assets/images/nav-icons/inventory.svg";
import Calender from "../../assets/images/nav-icons/calendar.svg";
import Orders from "../../assets/images/nav-icons/orders.svg";

export const items = [
  {
    title: "Home",
    path: "/",
    icon: Home,
    active: false,
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: Dashboard,
    active: true,
  },
  {
    title: "Wallet",
    path: "/wallet",
    icon: Wallet,
    active: false,
  },
  {
    title: "Inventory",
    path: "/inventory",
    icon: Inventory,
    active: false,
  },
  {
    title: "Calender",
    path: "/calender",
    icon: Calender,
    active: false,
  },
  {
    title: "Orders",
    path: "/orders",
    icon: Orders,
    active: false,
  },
];
