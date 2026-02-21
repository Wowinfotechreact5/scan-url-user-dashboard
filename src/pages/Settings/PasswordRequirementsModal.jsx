import { X, RefreshCcw, Copy } from "lucide-react";
import { useState } from "react";

export default function PasswordRequirementsModal({
      isOpen,
      onClose
}) {

      const generatePassword = () => {
            const chars =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
            let password = "";
            for (let i = 0; i < 20; i++) {
                  password += chars.charAt(
                        Math.floor(Math.random() * chars.length)
                  );
            }
            return password;
      };

      const [password, setPassword] = useState(generatePassword());

      if (!isOpen) return null;


      const handleCopy = () => {
            navigator.clipboard.writeText(password);
      };


      return (

            <div className="fixed inset-0 z-[1000] flex items-center justify-center">

                  {/* Overlay */}
                  <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={onClose}
                  />


                  {/* Modal */}
                  <div className="
        relative bg-white w-full max-w-md
        rounded-xl shadow-xl border border-gray-200
      ">


                        {/* Header */}
                        <div className="
          flex justify-between items-center
          px-5 py-4 border-b border-gray-200
        ">

                              <h2 className="font-semibold text-gray-800">
                                    Password Requirements
                              </h2>

                              <button
                                    onClick={onClose}
                                    className="p-1 hover:bg-gray-100 rounded"
                              >
                                    <X size={18} />
                              </button>

                        </div>



                        {/* Body */}
                        <div className="p-5 space-y-4">

                              <p className="text-sm text-gray-600">
                                    The password must meet these requirements:
                              </p>


                              <ul className="space-y-2 text-sm text-gray-700">

                                    <li>→ At least 15 characters (max 64)</li>

                                    <li>→ Contains uppercase and lowercase letters</li>

                                    <li>→ Contains at least one number</li>

                                    <li>→ Contains at least one symbol like !@#$%</li>

                              </ul>



                              {/* Generated Password */}
                              <div>

                                    <p className="text-sm text-gray-600 mb-2">
                                          We generated a strong password for you:
                                    </p>


                                    <div className="flex">

                                          <input
                                                value={password}
                                                readOnly
                                                className="
                  flex-1 px-3 py-2 text-sm
                  border border-gray-200 rounded-l-lg
                  bg-gray-50
                "
                                          />

                                          <button
                                                onClick={() => setPassword(generatePassword())}
                                                className="
                  px-3 border border-gray-200
                  border-l-0 hover:bg-gray-100
                "
                                          >
                                                <RefreshCcw size={16} />
                                          </button>

                                    </div>


                                    <button
                                          onClick={handleCopy}
                                          className="
                text-sm text-orange-600
                hover:text-orange-700 mt-2
              "
                                    >
                                          Copy the generated password to clipboard
                                    </button>

                              </div>

                        </div>

                  </div>

            </div>

      );

}