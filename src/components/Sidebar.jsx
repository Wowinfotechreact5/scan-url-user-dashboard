import { NavLink } from "react-router-dom";
import {
      LayoutDashboard,
      Key,
      BookOpen,
      Mail,
      Calendar
} from "lucide-react";

import { useState } from "react";
import BookCallModal from "./BookCallModal";

export default function Sidebar({ collapsed }) {

      const [showBookCall, setShowBookCall] =
            useState(false);
      const DocBtnCall = () => {
            window.open(
                  "https://www.wowinfotech.com/blog-category/country-wise-facts",
                  "_blank"
            );
      };
      const ContactBtnCall = () => {
            window.open(
                  "https://www.wowinfotech.com/contact-us",
                  "_blank"
            );
      };
      const menuItems = [
            {
                  name: "Dashboard",
                  icon: LayoutDashboard,
                  path: "/",
                  type: "route",
            },
            {
                  name: "API Keys",
                  icon: Key,
                  path: "/apikeys",
                  type: "route",
            },
            {
                  name: "Documentation",
                  icon: BookOpen,
                  type: "action",   // IMPORTANT
                  action: DocBtnCall,
            },


            {
                  name: "Contact Support",
                  icon: Mail,
                  action: ContactBtnCall,
                  type: "action",
            },
            {
                  name: "Book a Call",
                  icon: Calendar,
                  type: "action",
                  action: () => setShowBookCall(true),
            },
      ];

      return (

            <>
                  <div
                        className={`
        bg-white h-screen
        ${collapsed ? "w-20" : "w-64"}
        transition-all duration-300 ease-in-out
        flex flex-col
        border-r border-gray-100   /* very soft border */
      `}
                  >

                        {/* Logo */}
                        <div className="h-16 flex items-center px-4">
                              {!collapsed && (
                                    <h1 className="text-lg font-semibold tracking-tight">
                                          <span className="text-orange-500 font-bold">Scan</span>
                                          <span className="text-gray-800">Url</span>
                                    </h1>
                              )}
                        </div>


                        {/* Menu */}
                        <nav className="flex-1 px-3 space-y-1">

                              {menuItems.map((item, index) => {

                                    const baseClass = `
            group flex items-center gap-3
            px-3 py-2.5
            rounded-lg
            cursor-pointer
            transition-all duration-200 ease-in-out
            text-gray-600
            hover:bg-orange-50
            hover:text-orange-600
          `;

                                    if (item.type === "route") {
                                          return (
                                                <NavLink
                                                      key={index}
                                                      to={item.path}
                                                      className={({ isActive }) =>
                                                            `
                  ${baseClass}
                  ${isActive
                                                                  ? "bg-orange-50 text-orange-600 font-medium shadow-sm"
                                                                  : ""
                                                            }
                `}
                                                >
                                                      <item.icon
                                                            size={18}
                                                            className="transition-transform duration-200 group-hover:scale-110"
                                                      />

                                                      {!collapsed && (
                                                            <span className="text-sm">
                                                                  {item.name}
                                                            </span>
                                                      )}
                                                </NavLink>
                                          );
                                    }

                                    if (item.type === "action") {
                                          return (
                                                <div
                                                      key={index}
                                                      onClick={item.action}
                                                      className={baseClass}
                                                >
                                                      <item.icon
                                                            size={18}
                                                            className="transition-transform duration-200 group-hover:scale-110"
                                                      />

                                                      {!collapsed && (
                                                            <span className="text-sm">
                                                                  {item.name}
                                                            </span>
                                                      )}
                                                </div>
                                          );
                                    }

                              })}

                        </nav>

                  </div>


                  {/* Modal */}
                  {showBookCall && (
                        <BookCallModal
                              onClose={() => setShowBookCall(false)}
                        />
                  )}
            </>

      );
}