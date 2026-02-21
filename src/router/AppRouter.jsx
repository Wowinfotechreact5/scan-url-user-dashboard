import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";

import Dashboard from "../pages/Dashboard";
import ApiKeys from "../pages/ApiKeys";
import Documentation from "../pages/Documentation";
import Support from "../pages/Support";
import SubscriptionPage from "../components/SubscriptionPage";

export default function AppRouter() {
      return (
            <BrowserRouter>
                  <DashboardLayout>
                        <Routes>
                              <Route path="/" element={<Dashboard />} />
                              <Route path="/apikeys" element={<ApiKeys />} />
                              <Route path="/documentation" element={<Documentation />} />
                              <Route path="/support" element={<Support />} />
                              <Route path="/subscription" element={<SubscriptionPage />} />
                        </Routes>
                  </DashboardLayout>
            </BrowserRouter>
      );
}