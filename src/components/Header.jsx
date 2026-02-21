import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Header({ collapsed, setCollapsed }) {

      const location = useLocation();

      const routeTitles = {
            "/": "Dashboard",
            "/apikeys": "API Keys",
            "/documentation": "Documentation",
            "/support": "Support",
      };

      const title = routeTitles[location.pathname] || "Dashboard";

      return (
            <header
                  className="
        h-16
        bg-white/80
        backdrop-blur-md
        border-b border-gray-100
        px-6
        flex items-center justify-between
        transition-all duration-300
      "
            >

                  {/* LEFT SECTION */}
                  <div className="flex items-center gap-3">

                        {/* Collapse Button */}
                        <button
                              onClick={() => setCollapsed(!collapsed)}
                              className="
            p-2 rounded-lg
            text-gray-600
            hover:bg-gray-100
            hover:text-orange-600
            transition-all duration-200
          "
                        >
                              <Menu size={20} />
                        </button>

                        {/* Page Title */}
                        <h1
                              className="
            text-lg font-semibold
            text-gray-800
            tracking-tight
            transition-all duration-200
          "
                        >
                              {title}
                        </h1>

                  </div>


                  {/* RIGHT SECTION (optional user/profile/actions area) */}
                  <div className="flex items-center gap-3">

                        {/* Example placeholder for future */}
                        <div className="
          w-9 h-9
          rounded-full
          bg-orange-100
          text-orange-600
          flex items-center justify-center
          font-medium text-sm
        ">
                              U
                        </div>

                  </div>

            </header>
      );
}