import Home from "../pages/Home";
import About from "../pages/About";
import ContactUs from "../pages/Contact Us";
import User from "@/pages/User";
import Cart from "@/pages/Cart";

const Router: Route[] = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "About",
    path: "about",
    component: About,
  },
  {
    name: "Contact Us",
    path: "contact",
    component: ContactUs,
  },
  {
    name: "User",
    path: "user",
    component: User,
  },
  {
    name: "Cart",
    path: "cart",
    component: Cart,
  },
];

type Route = {
  name: string;
  path: string;
  component: React.ComponentType;
};

export { Router as ROUTES };
