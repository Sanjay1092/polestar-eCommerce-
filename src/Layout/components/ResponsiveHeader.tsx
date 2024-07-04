import { Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { ROUTES } from "@/routes/routes";
import { NavLink } from "react-router-dom";

function ResponsiveHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex justify-between items-center p-8">
      <p className="text-3xl font-light text-black">PoleStar</p>
      <div className="px-4 cursor-pointer" onClick={handleSidebar}>
        <Menu />
      </div>

      <Sidebar isOpen={isSidebarOpen} close={handleSidebar}>
        {ROUTES.map((el, i) => {
          return (
            <NavLink
              key={i}
              to={el.path}
              className={({ isActive }) =>
                `py-3 text-center block text-lg font-bold cursor-pointer ${
                  isActive ? "text-pink-600" : "text-black"
                }`
              }
            >
              {el.name}
            </NavLink>
          );
        })}
      </Sidebar>
    </div>
  );
}

export default ResponsiveHeader;
