import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";

import Dashboard from "../pages/Dashboard";
import ApiKeys from "../pages/ApiKeys";
import Documentation from "../pages/Documentation";
import Support from "../pages/Support";
import SubscriptionPage from "../components/SubscriptionPage";
import ActivityLogs from "../pages/Accounts/ActivityLogs";
import SettingsPage from "../pages/Settings/SettingsPage";
import LoginPage from "../components/LoginPage";

export default function AppRouter() {
      return (

            <BrowserRouter>

                  <Routes>

                        {/* Login WITHOUT layout */}
                        <Route path="/login" element={<LoginPage />} />


                        {/* All dashboard routes WITH layout */}
                        <Route path="/" element={<DashboardLayout />}>

                              <Route index element={<Dashboard />} />

                              <Route path="apikeys" element={<ApiKeys />} />

                              <Route path="documentation" element={<Documentation />} />

                              <Route path="support" element={<Support />} />

                              <Route path="subscription" element={<SubscriptionPage />} />

                              <Route path="activity-logs" element={<ActivityLogs />} />

                              <Route path="settings" element={<SettingsPage />} />

                        </Route>

                  </Routes>

            </BrowserRouter>
      );
}