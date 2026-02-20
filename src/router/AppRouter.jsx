import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";

import Dashboard from "../pages/Dashboard";
import ApiKeys from "../pages/ApiKeys";
import Documentation from "../pages/Documentation";
import Support from "../pages/Support";

export default function AppRouter() {
      return (
            <BrowserRouter>
                  <DashboardLayout>
                        <Routes>
                              <Route path="/" element={<Dashboard />} />
                              <Route path="/apikeys" element={<ApiKeys />} />
                              <Route path="/documentation" element={<Documentation />} />
                              <Route path="/support" element={<Support />} />
                        </Routes>
                  </DashboardLayout>
            </BrowserRouter>
      );
}