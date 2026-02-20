import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";

export default function DashboardLayout({ children }) {
      const [collapsed, setCollapsed] = useState(false);

      return (
            <div className="flex h-screen bg-gray-100">

                  <Sidebar collapsed={collapsed} />

                  <div className="flex-1 flex flex-col">

                        <Header
                              collapsed={collapsed}
                              setCollapsed={setCollapsed}
                        />

                        <main className="flex-1 p-6 overflow-y-auto">
                              {children}
                        </main>

                  </div>

            </div>
      );
}