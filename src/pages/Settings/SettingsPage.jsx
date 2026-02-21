import { useState } from "react";
import {
      Lock,
      Smartphone,
      Mail,
      Trash2,
      Check
} from "lucide-react";
import PasswordRequirementsModal from "./PasswordRequirementsModal";
import TwoFactorAuthTab from "./TwoFactorAuthTab";
import ChangeEmailTab from "./ChangeEmailTab";
import DeleteAccountTab from "./DeleteAccountTab";

export default function SettingsPage() {

      const [activeTab, setActiveTab] = useState("password");
      const [passwordModalOpen, setPasswordModalOpen] = useState(false);
      const [verified, setVerified] = useState(false);

      return (

            <div className="p-6 max-w-5xl">

                  <div className="
        bg-white border border-gray-100
        rounded-xl shadow-sm p-6
      ">

                        {/* Tabs */}
                        <div className="flex gap-2 mb-6">

                              <TabButton
                                    icon={Lock}
                                    label="Change Password"
                                    active={activeTab === "password"}
                                    onClick={() => setActiveTab("password")}
                              />

                              <TabButton
                                    icon={Smartphone}
                                    label="2FA Authentication"
                                    active={activeTab === "2fa"}
                                    onClick={() => setActiveTab("2fa")}
                              />

                              <TabButton
                                    icon={Mail}
                                    label="Change Email"
                                    active={activeTab === "email"}
                                    onClick={() => setActiveTab("email")}
                              />

                              <TabButton
                                    icon={Trash2}
                                    label="Delete Account"
                                    active={activeTab === "delete"}
                                    onClick={() => setActiveTab("delete")}
                              />

                        </div>



                        {/* Change Password */}
                        {activeTab === "password" && (

                              <div className="space-y-5 max-w-md">

                                    <InputField
                                          label="Your current password"
                                          type="password"
                                    />

                                    <InputField
                                          label="Your new password"
                                          extra="requirements"
                                          type="password"
                                          onExtraClick={() => setPasswordModalOpen(true)}
                                    />
                                    {/* Human Verification */}
                                    <div
                                          onClick={() => setVerified(!verified)}
                                          className="
                flex items-center justify-between
                border border-gray-200
                rounded-lg px-4 py-3
                cursor-pointer hover:border-orange-400
                w-72
              "
                                    >

                                          <div className="flex items-center gap-3">

                                                <div className={`
                  w-5 h-5 rounded border flex items-center justify-center
                  ${verified
                                                            ? "bg-green-500 border-green-500 text-white"
                                                            : "border-gray-300"
                                                      }
                `}>

                                                      {verified && <Check size={14} />}

                                                </div>

                                                <span className="text-sm">
                                                      I am human
                                                </span>

                                          </div>


                                          <div className="
                w-6 h-6 bg-orange-100 text-orange-500
                rounded-full flex items-center justify-center
              ">
                                                ✓
                                          </div>

                                    </div>


                                    {/* Button */}
                                    <button className="
              bg-orange-500 hover:bg-orange-600
              text-white text-sm font-medium
              px-5 py-2.5 rounded-lg
              transition-colors
            ">
                                          Change Password
                                    </button>

                              </div>

                        )}



                        {/* 2FA */}
                        {activeTab === "2fa" && <TwoFactorAuthTab />}



                        {/* Change Email */}
                        {activeTab === "email" && <ChangeEmailTab />}



                        {/* Delete Account */}
                        {activeTab === "delete" && <DeleteAccountTab />}

                  </div>
                  <PasswordRequirementsModal
                        isOpen={passwordModalOpen}
                        onClose={() => setPasswordModalOpen(false)}
                  />
            </div>

      );

}



function TabButton({ icon: Icon, label, active, onClick }) {

      return (

            <button
                  onClick={onClick}
                  className={`
        flex items-center gap-2
        px-4 py-2 text-sm font-medium
        rounded-lg transition-all
        ${active
                              ? "bg-gray-800 text-white"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }
      `}
            >

                  <Icon size={16} />

                  {label}

            </button>

      );

}



function InputField({ label, extra, type, onExtraClick }) {

      return (

            <div>

                  {/* Label row */}
                  <div className="flex items-center gap-2 mb-1">

                        <label className="text-sm text-gray-600">
                              {label}
                        </label>

                        {extra && (
                              <button
                                    type="button"
                                    onClick={onExtraClick}
                                    className="
              text-orange-600
              text-sm
              hover:text-orange-700
              cursor-pointer
            "
                              >
                                    ({extra})
                              </button>
                        )}

                  </div>


                  {/* Input */}
                  <input
                        type={type}
                        className="
          w-full px-4 py-2.5 text-sm
          border border-gray-200 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-orange-400
        "
                  />

            </div>

      );

}