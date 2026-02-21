import {
      CreditCard,
      Calendar,
      FileText,
      Zap
} from "lucide-react";

import { useState } from "react";

export default function SubscriptionPage() {

      const [activeTab, setActiveTab] = useState("details");

      const percent = 0;

      return (

            <div className="p-6 space-y-6 max-w-6xl">

                  {/* Top Cards */}
                  <div className="grid md:grid-cols-2 gap-6">

                        {/* Credits Usage */}
                        <div className="
          bg-white border border-gray-100 rounded-xl p-5
          shadow-sm hover:shadow-md transition-all
        ">

                              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                                    Credits Usage
                              </h3>

                              <div className="flex justify-between text-sm text-gray-500 mb-2">

                                    <span>
                                          <span className="font-medium text-gray-800">
                                                0
                                          </span> / 50,000 credits used
                                    </span>

                                    <span>
                                          Resets on
                                          <span className="ml-1 font-medium text-gray-800">
                                                Mar 20, 2026
                                          </span>
                                    </span>

                              </div>

                              <div className="h-2 bg-gray-100 rounded-full">

                                    <div
                                          className="h-2 bg-orange-500 rounded-full transition-all"
                                          style={{ width: `${percent}%` }}
                                    />

                              </div>

                        </div>


                        {/* Overage Credits */}
                        <div className="
          bg-white border border-gray-100 rounded-xl p-5
          shadow-sm hover:shadow-md transition-all
        ">

                              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                                    Overage Credits
                              </h3>

                              <p className="text-sm text-gray-500 mb-1">
                                    Available only with paid subscriptions.
                              </p>

                              <p className="text-sm text-gray-500">
                                    You are on a custom subscription.
                              </p>

                        </div>

                  </div>



                  {/* Main Section */}
                  <div className="
        bg-white border border-gray-100 rounded-xl p-6 shadow-sm
      ">

                        {/* Tabs */}
                        <div className="flex gap-2 mb-6">

                              <TabButton
                                    icon={<FileText size={16} />}
                                    label="Subscription Details"
                                    active={activeTab === "details"}
                                    onClick={() => setActiveTab("details")}
                              />

                              <TabButton
                                    icon={<CreditCard size={16} />}
                                    label="Payment Method"
                                    active={activeTab === "payment"}
                                    onClick={() => setActiveTab("payment")}
                              />

                              <TabButton
                                    icon={<Calendar size={16} />}
                                    label="Billing History"
                                    active={activeTab === "billing"}
                                    onClick={() => setActiveTab("billing")}
                              />

                              <TabButton
                                    icon={<Zap size={16} />}
                                    label="Overage Quota"
                                    active={activeTab === "overage"}
                                    onClick={() => setActiveTab("overage")}
                              />

                        </div>



                        {/* Upgrade Banner */}
                        <div className="
          border border-orange-200 bg-orange-50
          rounded-lg p-4 mb-6
        ">

                              <p className="text-sm text-gray-700 mb-2">

                                    Ready to upgrade to a paid plan?

                              </p>

                              <button className="
            bg-orange-500 text-white px-4 py-2 rounded-lg text-sm
            hover:bg-orange-600 transition-colors
          ">
                                    Upgrade Plan
                              </button>

                        </div>



                        {/* Details Table */}
                        {activeTab === "details" && (

                              <div className="space-y-3">

                                    <DetailRow
                                          label="First Created"
                                          value="Feb 20, 2026 at 9:26 am"
                                    />

                                    <DetailRow
                                          label="Selected Plan"
                                          value={
                                                <span className="flex items-center gap-2">
                                                      Basic Plan
                                                      <span className="
                    text-xs bg-orange-100 text-orange-600
                    px-2 py-0.5 rounded-full
                  ">
                                                            Free Trial
                                                      </span>
                                                </span>
                                          }
                                    />

                                    <DetailRow
                                          label="Type"
                                          value="Custom"
                                    />

                                    <DetailRow
                                          label="Monthly Credits"
                                          value="50,000"
                                    />

                                    <DetailRow
                                          label="API Keys Quota"
                                          value="2 API Keys"
                                    />

                                    <DetailRow
                                          label="Status"
                                          value={
                                                <span className="
                  bg-green-100 text-green-600 text-xs
                  px-2 py-1 rounded-md
                ">
                                                      Active
                                                </span>
                                          }
                                    />

                                    <DetailRow
                                          label="Expiration"
                                          value="Mar 20, 2026"
                                    />

                                    <DetailRow
                                          label="Renewal Interval"
                                          value="None"
                                    />

                                    <DetailRow
                                          label="Credits Last Reset"
                                          value="Feb 20, 2026"
                                    />

                                    <DetailRow
                                          label="Credits Next Reset"
                                          value="Mar 20, 2026"
                                    />

                              </div>

                        )}

                        {activeTab === "payment" && (

                              <div className="
    bg-gray-50 border border-gray-100
    rounded-lg p-5
  ">

                                    <p className="text-sm text-gray-700 mb-3">
                                          You are on a custom subscription and you can't modify payment method here.
                                    </p>

                                    <p className="text-sm text-gray-600">

                                          Please{" "}

                                          <button className="
        text-orange-600 font-medium hover:text-orange-700
      ">
                                                contact us
                                          </button>

                                          {" "}if you have questions.

                                    </p>

                              </div>

                        )}
                        {activeTab === "overage" && (

                              <div className="
    bg-gray-50 border border-gray-100
    rounded-lg p-5
  ">

                                    <p className="text-sm text-gray-700 mb-3">
                                          Overage is only available with automated Paddle subscriptions.
                                    </p>

                                    <p className="text-sm text-gray-600">
                                          You are on a custom subscription plan.
                                    </p>

                              </div>

                        )}
                        {activeTab === "overage" && (

                              <div className="
    bg-gray-50 border border-gray-100
    rounded-lg p-5
  ">

                                    <p className="text-sm text-gray-700 mb-3">
                                          Overage is only available with automated Paddle subscriptions.
                                    </p>

                                    <p className="text-sm text-gray-600">
                                          You are on a custom subscription plan.
                                    </p>

                              </div>

                        )}
                  </div>

            </div>

      );

}



function TabButton({ icon, label, active, onClick }) {

      return (

            <button
                  onClick={onClick}
                  className={`
        flex items-center gap-2 px-3 py-2 text-sm rounded-lg
        transition-all
        ${active
                              ? "bg-orange-500 text-white shadow-sm"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }
      `}
            >

                  {icon}
                  {label}

            </button>

      );

}



function DetailRow({ label, value }) {

      return (

            <div className="
      flex justify-between py-3
      border-b border-gray-100
    ">

                  <span className="text-sm text-gray-500">
                        {label}
                  </span>

                  <span className="text-sm text-gray-800 font-medium">
                        {value}
                  </span>

            </div>

      );

}