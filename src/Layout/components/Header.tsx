import { Menu, ShoppingBag, User } from "lucide-react";
import { ROUTES } from "../../routes/routes";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-row justify-between items-center p-8 shadow-md">
      <p className="text-3xl font-light text-black">PoleStar</p>
      <div className="flex">
        {ROUTES.map((el, i) => (
          <NavLink
            key={i}
            to={el.path}
            className={({ isActive }) =>
              `px-5 text-lg font-bold cursor-pointer ${
                isActive ? "text-pink-600" : "text-black"
              }`
            }
          >
            {el.name === "User" ? (
              <User />
            ) : el.name === "Cart" ? (
              <ShoppingBag />
            ) : (
              el.name
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Header;
