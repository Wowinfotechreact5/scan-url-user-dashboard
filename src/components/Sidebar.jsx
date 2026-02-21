import {
      LayoutDashboard,
      Key,
      BookOpen,
      Mail,
      Calendar,
      User,
      ChevronDown,
      Activity,
      CreditCard,
      Settings,
      LogOut

} from "lucide-react";

import { useState } from "react";
import BookCallModal from "./BookCallModal";
import { NavLink } from "react-router-dom";
// import logo from '../assets/Gemini_Ge.png'
import logo from '../assets/Logo-Scan_URL__1_-removebg-preview.png'

export default function Sidebar({ collapsed }) {
      const [accountOpen, setAccountOpen] = useState(false);

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
      const baseClass = `
    group flex items-center gap-3
    px-3 py-2.5
    rounded-lg
    cursor-pointer
    text-sm
    transition-all duration-200
    text-gray-600
    hover:bg-gray-100
  `;
      const accountMenu = [
            { name: "Activity Logs", icon: Activity, path: "/activity-logs" },
            { name: "Subscription", icon: CreditCard, path: "/subscription" },
            { name: "Settings", icon: Settings, path: "/settings", },
            // { name: "Logout", icon: LogOut, action: () => { } }
            { name: "Logout", icon: LogOut, path: '/login' }
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
                              <img
                                    src={logo}
                                    alt="ScanUrl Logo"
                                    className="h-10 w-auto object-contain"
                              />
                              {/* {!collapsed && (
                                    <h1 className="text-lg font-semibold tracking-tight">
                                          <span className="text-orange-500 font-bold">Scan</span>
                                          <span className="text-gray-800">Url</span>
                                    </h1>
                              )} */}

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
                                                            `${baseClass}
                   ${isActive
                                                                  ? "bg-orange-50 text-orange-600"
                                                                  : ""
                                                            }`
                                                      }
                                                >

                                                      <item.icon size={18} />

                                                      {!collapsed && item.name}

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
                        {/* Divider */}
                        <div className="px-3 pb-2">

                              <div className="border-t border-gray-200"></div>

                        </div>



                        {/* Bottom Account Section */}
                        <div className="px-3 pb-4">


                              {/* Account Header */}
                              <div
                                    onClick={() => setAccountOpen(!accountOpen)}
                                    className={`
            flex items-center justify-between
            px-3 py-2.5
            cursor-pointer
            text-sm text-gray-600
            hover:bg-gray-100
            rounded-lg
          `}
                              >

                                    <div className="flex items-center gap-3">

                                          <User size={18} />

                                          {!collapsed && "Account"}

                                    </div>

                                    {!collapsed && (
                                          <ChevronDown
                                                size={16}
                                                className={`transition-transform ${accountOpen ? "rotate-180" : ""
                                                      }`}
                                          />
                                    )}

                              </div>



                              {/* Account Submenu */}
                              {accountOpen && !collapsed && (

                                    <div className="mt-1 space-y-1">

                                          {accountMenu.map((item, index) => {

                                                if (item.path) {
                                                      return (
                                                            <NavLink
                                                                  key={index}
                                                                  to={item.path}
                                                                  className={({ isActive }) =>
                                                                        `
                      ${baseClass}
                      ml-6
                      ${isActive || item.highlight
                                                                              ? "bg-gray-100 text-gray-900 font-medium"
                                                                              : ""
                                                                        }
                    `}
                                                            >

                                                                  <item.icon size={18} />

                                                                  {item.name}

                                                            </NavLink>
                                                      );
                                                }


                                                return (
                                                      <div
                                                            key={index}
                                                            onClick={item.action}
                                                            className={`${baseClass} ml-6`}
                                                      >

                                                            <item.icon size={18} />

                                                            {item.name}

                                                      </div>
                                                );

                                          })}

                                    </div>

                              )}

                        </div>
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