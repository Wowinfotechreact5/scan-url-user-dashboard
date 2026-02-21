import { useState } from "react";
import { Check } from "lucide-react";

export default function ChangeEmailTab() {

      const [newEmail, setNewEmail] = useState("");
      const [verified, setVerified] = useState(false);

      const currentEmail = "it@wowinfotech.com";


      const handleChangeEmail = () => {

            if (!verified) return;

            if (!newEmail) return;

            console.log("Change email to:", newEmail);

      };


      return (

            <div className="space-y-6 max-w-md">

                  {/* Current Email */}
                  <div>

                        <label className="block text-sm text-gray-600 mb-1">
                              Current email address
                        </label>

                        <input
                              value={currentEmail}
                              disabled
                              className="
            w-full px-4 py-2.5 text-sm
            border border-gray-200 rounded-lg
            bg-gray-100 text-gray-500
            cursor-not-allowed
          "
                        />

                  </div>



                  {/* New Email */}
                  <div>

                        <label className="block text-sm text-gray-600 mb-1">
                              Enter new email address
                        </label>

                        <input
                              value={newEmail}
                              onChange={(e) => setNewEmail(e.target.value)}
                              type="email"
                              placeholder="Enter new email address"
                              className="
            w-full px-4 py-2.5 text-sm
            border border-gray-200 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-orange-400
          "
                        />

                  </div>



                  {/* Human Verification */}
                  <div
                        onClick={() => setVerified(!verified)}
                        className="
          flex items-center justify-between
          border border-gray-200 rounded-lg
          px-4 py-3 cursor-pointer
          hover:border-orange-400
          w-72 transition-colors
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

                              <span className="text-sm text-gray-700">
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
                  <button
                        onClick={handleChangeEmail}
                        disabled={!verified}
                        className={`
          px-5 py-2.5 rounded-lg text-sm font-medium
          transition-all
          ${verified
                                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                              }
        `}
                  >

                        Change Email

                  </button>

            </div>

      );

}