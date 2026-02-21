import { useState } from "react";
import { Shield, FileText } from "lucide-react";

export default function ActivityLogs() {

      const [activeTab, setActiveTab] = useState("security");


      const securityLogs = [
            {
                  ip: "103.183.80.247",
                  event: "Login successful",
                  added: "Feb 21, 2026 at 9:26 am",
                  elapsed: "8 seconds ago"
            },
            {
                  ip: "103.183.80.247",
                  event: "Login successful",
                  added: "Feb 21, 2026 at 7:25 am",
                  elapsed: "2 hours ago"
            },
            {
                  ip: "103.183.80.247",
                  event: "Login successful",
                  added: "Feb 21, 2026 at 5:45 am",
                  elapsed: "3 hours ago"
            },
            {
                  ip: "103.183.80.247",
                  event: "Login successful",
                  added: "Feb 20, 2026 at 10:26 am",
                  elapsed: "22 hours ago"
            },
            {
                  ip: "103.183.80.247",
                  event: "Login successful",
                  added: "Feb 20, 2026 at 9:26 am",
                  elapsed: "1 day ago"
            },
            {
                  ip: "206.84.232.172",
                  event: "Login successful",
                  added: "Feb 20, 2026 at 9:23 am",
                  elapsed: "1 day ago"
            }
      ];
      const subscriptionLogs = [
            {
                  event: "Custom subscription created",
                  added: "Feb 20, 2026 at 9:26 am",
                  action: "Subscription Details"
            }
      ];

      return (

            <div className="p-6 max-w-6xl">

                  <div className="
        bg-white border border-gray-100
        rounded-xl shadow-sm p-6
      ">

                        {/* Tabs */}
                        <div className="flex gap-2 mb-6">

                              <TabButton
                                    active={activeTab === "security"}
                                    icon={Shield}
                                    label="Security Logs"
                                    onClick={() => setActiveTab("security")}
                              />

                              <TabButton
                                    active={activeTab === "subscription"}
                                    icon={FileText}
                                    label="Subscription Logs"
                                    onClick={() => setActiveTab("subscription")}
                              />

                        </div>



                        {/* Description */}
                        <p className="text-sm text-gray-600 mb-4">
                              Here are the last 3 months events:
                        </p>



                        {/* Table */}
                        <div className="overflow-x-auto">

                              <table className="w-full">

                                    <thead>

                                          {activeTab === "security" && (

                                                <tr className="text-xs text-gray-500 uppercase border-b border-gray-200">

                                                      <th className="text-left py-3 font-medium">
                                                            IP Address
                                                      </th>

                                                      <th className="text-left py-3 font-medium">
                                                            Event
                                                      </th>

                                                      <th className="text-left py-3 font-medium">
                                                            Added
                                                      </th>

                                                      <th className="text-left py-3 font-medium">
                                                            Elapsed
                                                      </th>

                                                </tr>

                                          )}


                                          {activeTab === "subscription" && (

                                                <tr className="text-xs text-gray-500 uppercase border-b border-gray-200">

                                                      <th className="text-left py-3 font-medium">
                                                            Event
                                                      </th>

                                                      <th className="text-left py-3 font-medium">
                                                            Added
                                                      </th>

                                                      <th className="text-left py-3 font-medium">
                                                            Action
                                                      </th>

                                                </tr>

                                          )}

                                    </thead>


                                    <tbody>

                                          {/* Security Logs */}
                                          {activeTab === "security" &&
                                                securityLogs.map((log, index) => (

                                                      <tr
                                                            key={index}
                                                            className="
          border-b border-gray-100
          hover:bg-gray-50 transition-colors
        "
                                                      >

                                                            <td className="py-3 text-sm font-medium text-gray-800">
                                                                  {log.ip}
                                                            </td>

                                                            <td className="py-3 text-sm text-gray-600">
                                                                  {log.event}
                                                            </td>

                                                            <td className="py-3 text-sm text-gray-600">
                                                                  {log.added}
                                                            </td>

                                                            <td className="py-3 text-sm text-gray-500">
                                                                  {log.elapsed}
                                                            </td>

                                                      </tr>

                                                ))
                                          }



                                          {/* Subscription Logs */}
                                          {activeTab === "subscription" &&
                                                subscriptionLogs.map((log, index) => (

                                                      <tr
                                                            key={index}
                                                            className="
          border-b border-gray-100
          hover:bg-gray-50 transition-colors
        "
                                                      >

                                                            {/* Event */}
                                                            <td className="py-3 text-sm">

                                                                  <span className="
            text-blue-600 font-medium
            cursor-pointer hover:text-blue-700
          ">

                                                                        {log.event}

                                                                  </span>

                                                            </td>


                                                            {/* Added */}
                                                            <td className="py-3 text-sm text-gray-600">
                                                                  {log.added}
                                                            </td>


                                                            {/* Action */}
                                                            <td className="py-3 text-sm">

                                                                  <button className="
            text-blue-600 font-medium
            hover:text-blue-700
          ">

                                                                        → {log.action}

                                                                  </button>

                                                            </td>

                                                      </tr>

                                                ))
                                          }

                                    </tbody>

                              </table>

                        </div>


                  </div>

            </div>

      );

}



function TabButton({ active, icon: Icon, label, onClick }) {

      return (

            <button
                  onClick={onClick}
                  className={`
        flex items-center gap-2
        px-4 py-2
        rounded-lg
        text-sm font-medium
        transition-all duration-200
        ${active
                              ? "bg-gray-800 text-white shadow-sm"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }
      `}
            >

                  <Icon size={16} />

                  {label}

            </button>

      );

}