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
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100/60 p-6">

                  <div className="max-w-7xl mx-auto space-y-8">

                        {/* Credits Usage Card */}
                        {/* <div className="
    bg-white rounded-xl
    border border-gray-100
    p-6
    transition-all duration-300
    hover:shadow-md
  ">

                              <h2 className="text-base font-semibold text-gray-800 mb-4">
                                    Credits Usage
                              </h2>

                              <div className="flex justify-between items-center text-sm text-gray-600 mb-3">

                                    <span>
                                          {creditsUsed.toLocaleString()} /
                                          <span className="font-semibold text-gray-800 ml-1">
                                                {creditsTotal.toLocaleString()}
                                          </span>
                                          <span className="ml-1">credits used</span>
                                    </span>

                                    <span>
                                          Resets on
                                          <span className="font-medium text-gray-800 ml-1">
                                                Mar 20, 2026
                                          </span>
                                    </span>

                              </div>

                              <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">

                                    <div
                                          className="
          h-full
          bg-gradient-to-r from-orange-500 to-orange-400
          rounded-full
          transition-all duration-700 ease-out
        "
                                          style={{ width: `${percent}%` }}
                                    />

                              </div>

                        </div> */}
                        <div className="
  bg-white rounded-xl
  p-6
  border border-gray-100
  shadow-sm
">

                              <div className="flex justify-between items-center mb-4">

                                    <h2 className="text-base font-semibold text-gray-800">
                                          Credits Usage
                                    </h2>

                                    <span className="
      text-xs font-medium
      text-gray-500
      bg-gray-100 px-2 py-1 rounded-md
    ">
                                          Monthly
                                    </span>

                              </div>


                              <div className="mb-3">

                                    <div className="flex justify-between text-sm text-gray-600 mb-2">

                                          <span>
                                                {creditsUsed.toLocaleString()}
                                                <span className="text-gray-400"> / </span>
                                                {creditsTotal.toLocaleString()}
                                          </span>

                                          <span className="text-gray-500">
                                                {percent}%
                                          </span>

                                    </div>


                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">

                                          <div
                                                className="
          h-full rounded-full
          bg-gradient-to-r from-orange-400 to-orange-500
          transition-all duration-700
        "
                                                style={{ width: `${percent}%` }}
                                          />

                                    </div>

                              </div>


                              <p className="text-xs text-gray-400">
                                    Resets on Mar 20, 2026
                              </p>

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                              <div className="
    bg-white rounded-xl p-5
    border border-gray-100
    hover:shadow-md transition-all duration-300
  ">
                                    <p className="text-sm text-gray-500 mb-1">
                                          Total Credits
                                    </p>

                                    <h3 className="text-2xl font-semibold text-gray-800">
                                          {creditsTotal.toLocaleString()}
                                    </h3>

                                    <p className="text-xs text-gray-400 mt-1">
                                          Monthly allocation
                                    </p>
                              </div>


                              {/* Used Credits */}
                              <div className="
    bg-white rounded-xl p-5
    border border-gray-100
    hover:shadow-md transition-all duration-300
  ">
                                    <p className="text-sm text-gray-500 mb-1">
                                          Used Credits
                                    </p>

                                    <h3 className="text-2xl font-semibold text-orange-600">
                                          {creditsUsed.toLocaleString()}
                                    </h3>

                                    <p className="text-xs text-gray-400 mt-1">
                                          {percent}% consumed
                                    </p>
                              </div>


                              {/* Active APIs */}
                              <div className="
    bg-white rounded-xl p-5
    border border-gray-100
    hover:shadow-md transition-all duration-300
  ">
                                    <p className="text-sm text-gray-500 mb-1">
                                          Active APIs
                                    </p>

                                    <h3 className="text-2xl font-semibold text-gray-800">
                                          12
                                    </h3>

                                    <p className="text-xs text-gray-400 mt-1">
                                          Currently in use
                                    </p>
                              </div>


                              {/* Success Rate */}
                              <div className="
    bg-white rounded-xl p-5
    border border-gray-100
    hover:shadow-md transition-all duration-300
  ">
                                    <p className="text-sm text-gray-500 mb-1">
                                          Success Rate
                                    </p>

                                    <h3 className="text-2xl font-semibold text-emerald-600">
                                          99.98%
                                    </h3>

                                    <p className="text-xs text-gray-400 mt-1">
                                          Last 30 days
                                    </p>
                              </div>

                        </div>

                        {/* Bottom Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


                              {/* Overage Credits */}
                              <div className="
      bg-white rounded-xl
      border border-gray-100
      p-6
      transition-all duration-300
      hover:shadow-md hover:-translate-y-0.5
    ">

                                    <h3 className="text-base font-semibold text-gray-800 mb-3">
                                          Overage Credits
                                    </h3>

                                    <p className="text-sm text-gray-600 mb-2">
                                          Available only with Paddle subscriptions.
                                    </p>

                                    <p className="text-sm text-gray-600 mb-4">
                                          You are on a custom subscription.
                                    </p>

                                    <button className="
        flex items-center gap-2
        text-sm font-medium
        text-orange-600
        hover:text-orange-700
        transition-colors
      ">
                                          <Info size={16} />
                                          More details
                                    </button>

                              </div>



                              {/* Subscription Plan */}
                              <div className="
      bg-white rounded-xl
      border border-gray-100
      p-6
      transition-all duration-300
      hover:shadow-md hover:-translate-y-0.5
    ">

                                    <h3 className="text-base font-semibold text-gray-800 mb-3">
                                          Subscription Plan
                                    </h3>

                                    <div className="flex items-center gap-2 mb-3">

                                          <span className="font-medium text-gray-800">
                                                Basic
                                          </span>

                                          <span className="
          bg-orange-100
          text-orange-600
          text-xs
          px-2 py-0.5
          rounded-full
          font-medium
        ">
                                                Free Trial
                                          </span>

                                    </div>

                                    <p className="text-sm text-gray-600 mb-4">
                                          Expires on
                                          <span className="font-medium text-gray-800 ml-1">
                                                Mar 20, 2026
                                          </span>
                                    </p>

                                    <button className="
        flex items-center gap-2
        text-sm font-medium
        text-orange-600
        hover:text-orange-700
        transition-colors
      ">
                                          <Info size={16} />
                                          More details
                                    </button>

                              </div>



                              {/* Quick Actions */}
                              <div className="
      bg-white rounded-xl
      border border-gray-100
      p-6
      transition-all duration-300
      hover:shadow-md hover:-translate-y-0.5
    ">

                                    <h3 className="text-base font-semibold text-gray-800 mb-3">
                                          Quick Actions
                                    </h3>

                                    <div className="space-y-3">

                                          <button className="
text-gray-600
hover:text-orange-600
text-sm font-medium
transition-colors
">
                                                <Key size={16} />
                                                Manage your API keys
                                          </button>

                                          <button className="
text-gray-600
hover:text-orange-600
text-sm font-medium
transition-colors
">
                                                <Lock size={16} />
                                                Manage 2FA authentication
                                          </button>

                                          <button className="
text-gray-600
hover:text-orange-600
text-sm font-medium
transition-colors
">
                                                <Mail size={16} />
                                                Contact support
                                          </button>

                                    </div>

                              </div>

                        </div>



                        {/* Last 30 Days Usage */}

                        <div className="
    bg-white rounded-xl
    border border-gray-100
    p-6
    transition-all duration-300
    hover:shadow-md
  ">

                              <h2 className="text-base font-semibold text-gray-800 mb-4">
                                    Last 30 Days Usage
                              </h2>

                              <ResponsiveContainer width="100%" height={300}>

                                    <LineChart data={last30Days}>

                                          <CartesianGrid stroke="#f1f5f9" />

                                          <XAxis dataKey="date" fontSize={12} />

                                          <YAxis fontSize={12} />

                                          <Tooltip />

                                          <Line
                                                type="monotone"
                                                dataKey="credits"
                                                stroke="#fb923c"
                                                strokeWidth={2.5}
                                                dot={false}
                                                name="Credits Used"
                                          />

                                    </LineChart>

                              </ResponsiveContainer>

                              <div className="text-right text-sm text-gray-600 mt-3">

                                    Total credits used:
                                    <span className="font-semibold text-gray-800 ml-1">
                                          0
                                    </span>

                              </div>

                        </div>



                        {/* Most Used APIs */}
                        <div className="
    bg-white rounded-xl
    border border-gray-100
    p-6
    transition-all duration-300
    hover:shadow-md
  ">

                              <h2 className="text-base font-semibold text-gray-800 mb-4">
                                    Most Used APIs (Last 1 Month)
                              </h2>


                              {/* Tabs */}
                              <div className="flex gap-6 mb-6">

                                    {["Feb 2026"].map((month) => (

                                          <button
                                                key={month}
                                                onClick={() => setActiveMonth(month)}
                                                className={`
            text-sm font-medium pb-1 transition-all
            ${activeMonth === month
                                                            ? "text-orange-600 border-b-2 border-orange-600"
                                                            : "text-gray-500 hover:text-gray-700"
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

                                          <CartesianGrid stroke="#f1f5f9" />

                                          <XAxis type="number" fontSize={12} />

                                          <YAxis
                                                type="category"
                                                dataKey="name"
                                                fontSize={12}
                                                width={140}
                                          />

                                          <Tooltip />

                                          <Bar
                                                dataKey="credits"
                                                fill="#f97316"
                                                radius={[4, 4, 4, 4]}
                                                name="Credits Used"
                                          />

                                    </BarChart>

                              </ResponsiveContainer>


                              <div className="text-right text-sm text-gray-600 mt-3">

                                    Total credits used:
                                    <span className="font-semibold text-gray-800 ml-1">
                                          {totalCredits}
                                    </span>

                              </div>

                        </div>


                  </div>
            </div>
      );
}