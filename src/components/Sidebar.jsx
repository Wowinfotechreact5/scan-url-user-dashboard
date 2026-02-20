import { NavLink } from "react-router-dom";
import {
      LayoutDashboard,
      Key,
      BookOpen,
      Phone,
} from "lucide-react";

export default function Sidebar({ collapsed }) {

      const menus = [
            { name: "Dashboard", icon: LayoutDashboard, path: "/" },
            { name: "API Keys", icon: Key, path: "/apikeys" },
            { name: "Documentation", icon: BookOpen, path: "/documentation" },
            { name: "Support", icon: Phone, path: "/support" },
      ];

      return (
            <div className={`
      bg-white shadow-md transition-all duration-300
      ${collapsed ? "w-20" : "w-64"}
    `}>

                  {/* Logo */}
                  <div className="p-4 border-b">

                        <h1 className="text-xl font-bold">
                              {!collapsed && (
                                    <>
                                          <span className="text-orange-500">opi</span>
                                          <span>void</span>
                                    </>
                              )}
                        </h1>

                  </div>

                  {/* Menu */}
                  <nav className="p-3 space-y-2">

                        {menus.map((menu, index) => (
                              <NavLink
                                    key={index}
                                    to={menu.path}
                                    className={({ isActive }) =>
                                          `flex items-center gap-3 p-3 rounded-lg transition
              ${isActive
                                                ? "bg-gray-200"
                                                : "hover:bg-gray-100"
                                          }`
                                    }
                              >
                                    <menu.icon size={20} />

                                    {!collapsed && menu.name}

                              </NavLink>
                        ))}

                  </nav>

            </div>
      );
}