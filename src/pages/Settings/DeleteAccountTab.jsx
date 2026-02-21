import { useState } from "react";
import { Check, AlertTriangle } from "lucide-react";

export default function DeleteAccountTab() {

      const [password, setPassword] = useState("");
      const [verified, setVerified] = useState(false);

      const handleDeleteRequest = () => {

            if (!password || !verified) return;

            console.log("Request account deletion");

      };


      return (

            <div className="space-y-6 max-w-md">

                  {/* Warning Text */}
                  <div className="space-y-3 text-sm">

                        <p className="text-gray-700">
                              Click the button below to request account deletion.
                        </p>

                        <p className="text-gray-600">
                              You will receive a confirmation email to confirm.
                        </p>

                        <p className="text-gray-700">
                              After confirmation,
                              <span className="font-semibold text-red-600">
                                    {" "}deletion is irreversible
                              </span>
                              {" "}and takes effect in 15 days.
                        </p>

                        <p className="text-gray-600">
                              You won't be able to log in during this period.
                        </p>

                  </div>



                  {/* Password Input */}
                  <div>

                        <label className="block text-sm text-gray-600 mb-1">
                              Enter your password
                        </label>

                        <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="
            w-full px-4 py-2.5 text-sm
            border border-gray-200 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-red-400
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
          hover:border-red-400
          transition-colors w-72
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



                  {/* Delete Button */}
                  <button
                        onClick={handleDeleteRequest}
                        disabled={!password || !verified}
                        className={`
          px-5 py-2.5 rounded-lg text-sm font-medium
          transition-all flex items-center gap-2
          ${password && verified
                                    ? "bg-red-500 hover:bg-red-600 text-white"
                                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                              }
        `}
                  >

                        <AlertTriangle size={16} />

                        Request Account Deletion

                  </button>


            </div>

      );

}