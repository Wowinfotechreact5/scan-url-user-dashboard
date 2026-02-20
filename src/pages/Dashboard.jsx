import {
      Key,
      Lock,
      Mail,
      Info
} from "lucide-react";

import {
      BarChart,
      Bar,
      XAxis,
      YAxis,
      Tooltip,
      ResponsiveContainer,
      CartesianGrid,
      Legend,
      LineChart,
      Line,
} from "recharts";

import { useState } from "react";

export default function Dashboard() {
      const [activeMonth, setActiveMonth] = useState("Feb 2026");

      const apiUsageData = {
            "Feb 2026": [
                  { name: "ASN Info", credits: 0 },
                  { name: "SPF Validator", credits: 0 },
                  { name: "DKIM Validator", credits: 0 },
                  { name: "DMARC Validator", credits: 0 },
                  { name: "DNS Lookup", credits: 0 },
                  { name: "DNS Propagation", credits: 0 },
                  { name: "DNSSEC Status", credits: 0 },
                  { name: "Domain Age", credits: 0 },
                  { name: "Domain Info", credits: 0 },
                  { name: "Domain Reputation", credits: 0 },
            ],
            "Jan 2026": [],
            "Dec 2025": [],
      };

      const currentData = apiUsageData[activeMonth] || [];

      const totalCredits = currentData.reduce(
            (sum, item) => sum + item.credits,
            0
      );
      const creditsUsed = 0;
      const creditsTotal = 50000;
      const percent =
            (creditsUsed / creditsTotal) * 100;

      // Generate last 30 days data
      const last30Days = Array.from({ length: 30 }, (_, i) => {

            const date = new Date();
            date.setDate(date.getDate() - (29 - i));

            return {
                  date: date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric"
                  }),
                  credits: 0,
            };
      });

      return (
            <div className="space-y-6">

                  {/* Credits Usage Card */}
                  <div className="bg-white rounded-lg shadow-sm border p-6">

                        <h2 className="text-lg font-semibold text-gray-700 mb-4">
                              Credits Usage
                        </h2>

                        <div className="flex justify-between text-gray-600 mb-2">

                              <span>
                                    {creditsUsed.toLocaleString()} /
                                    <span className="font-semibold">
                                          {" "}
                                          {creditsTotal.toLocaleString()}
                                    </span>{" "}
                                    credits used
                              </span>

                              <span>
                                    Resets on{" "}
                                    <span className="font-semibold">
                                          Mar 20, 2026
                                    </span>
                              </span>

                        </div>

                        <div className="w-full h-3 bg-gray-200 rounded-full">

                              <div
                                    className="h-3 bg-blue-500 rounded-full"
                                    style={{ width: `${percent}%` }}
                              />

                        </div>

                  </div>

                  {/* Bottom Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Overage Credits */}
                        <div className="bg-white border rounded-lg shadow-sm p-6">

                              <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                                    Overage Credits
                              </h3>

                              <p className="text-gray-600 mb-4">
                                    Available only with Paddle subscriptions.
                              </p>

                              <p className="text-gray-600 mb-4">
                                    You are on a custom subscription.
                              </p>

                              <button className="flex items-center gap-2 text-blue-600">

                                    <Info size={16} />

                                    More details

                              </button>

                        </div>


                        {/* Subscription Plan */}
                        <div className="bg-white border rounded-lg shadow-sm p-6">

                              <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                                    Subscription Plan
                              </h3>

                              <div className="flex gap-2 mb-3">

                                    Basic

                                    <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                                          Free Trial
                                    </span>

                              </div>

                              <p className="text-gray-600 mb-4">

                                    Expires on
                                    <span className="font-semibold">
                                          {" "}Mar 20, 2026
                                    </span>

                              </p>

                              <button className="flex items-center gap-2 text-blue-600">

                                    <Info size={16} />

                                    More details

                              </button>

                        </div>


                        {/* Quick Actions */}
                        <div className="bg-white border rounded-lg shadow-sm p-6">

                              <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                                    Quick Actions
                              </h3>

                              <div className="space-y-3">

                                    <button className="flex gap-2 text-blue-600">
                                          <Key size={16} />
                                          Manage your API keys
                                    </button>

                                    <button className="flex gap-2 text-blue-600">
                                          <Lock size={16} />
                                          Manage 2FA authentication
                                    </button>

                                    <button className="flex gap-2 text-blue-600">
                                          <Mail size={16} />
                                          Contact support
                                    </button>

                              </div>

                        </div>

                  </div>
                  {/* Last 30 Days Usage Chart */}
                  <div className="bg-white rounded-lg shadow-sm border p-6">

                        <h2 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-3">
                              Last 30 Days Usage
                        </h2>

                        <ResponsiveContainer width="100%" height={300}>

                              <LineChart data={last30Days}>

                                    <CartesianGrid stroke="#eee" />

                                    <XAxis
                                          dataKey="date"
                                          fontSize={12}
                                    />

                                    <YAxis fontSize={12} />

                                    <Tooltip />

                                    <Legend />

                                    <Line
                                          type="monotone"
                                          dataKey="credits"
                                          stroke="#3b82f6"
                                          strokeWidth={2}
                                          name="Credits Used"
                                    />

                              </LineChart>

                        </ResponsiveContainer>

                        <div className="text-right text-gray-600 mt-2">

                              Total credits used:{" "}
                              <span className="font-semibold">
                                    0
                              </span>

                        </div>

                  </div>
                  {/* Most Used APIs Section */}

                  <div className="bg-white rounded-lg shadow-sm border p-6">

                        {/* Header */}
                        <h2 className="text-lg font-semibold text-gray-700 border-b pb-3 mb-4">
                              Most Used APIs (Last 3 Months)
                        </h2>


                        {/* Tabs */}
                        <div className="flex gap-6 mb-4">

                              {["Feb 2026"].map((month) => (

                                    <button
                                          key={month}
                                          onClick={() => setActiveMonth(month)}
                                          className={`
          pb-1 text-sm
          ${activeMonth === month
                                                      ? "text-blue-600 border-b-2 border-blue-600"
                                                      : "text-gray-500"
                                                }
        `}
                                    >
                                          {month}
                                    </button>

                              ))}

                        </div>


                        {/* Chart */}
                        <ResponsiveContainer width="100%" height={350}>

                              <BarChart
                                    layout="vertical"
                                    data={currentData}
                                    margin={{ left: 40 }}
                              >

                                    <CartesianGrid stroke="#eee" />

                                    <XAxis
                                          type="number"
                                          fontSize={12}
                                    />

                                    <YAxis
                                          type="category"
                                          dataKey="name"
                                          fontSize={12}
                                          width={120}
                                    />

                                    <Tooltip />

                                    <Legend />

                                    <Bar
                                          dataKey="credits"
                                          fill="#14b8a6"
                                          name="Credits Used"
                                    />

                              </BarChart>

                        </ResponsiveContainer>


                        {/* Footer */}
                        <div className="text-right text-gray-600 mt-2">

                              Total credits used:
                              <span className="font-semibold">
                                    {" "} {totalCredits}
                              </span>

                        </div>

                  </div>



            </div>
      );
}