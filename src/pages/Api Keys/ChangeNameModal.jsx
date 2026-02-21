import { X } from "lucide-react";
import { useState, useEffect } from "react";

export default function ChangeNameModal({
      isOpen,
      onClose,
      apiKey,
      onSave
}) {

      const [name, setName] = useState("");

      useEffect(() => {
            if (apiKey) {
                  setName(apiKey.name);
            }
      }, [apiKey]);


      if (!isOpen) return null;


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
        rounded-xl shadow-xl border border-gray-200 p-6
      ">

                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">

                              <h2 className="text-base font-semibold text-gray-800">
                                    Change name of the API key:
                              </h2>

                              <button
                                    onClick={onClose}
                                    className="p-1 hover:bg-gray-100 rounded"
                              >
                                    <X size={18} />
                              </button>

                        </div>


                        {/* Input */}
                        <div className="flex gap-3 mb-4">

                              <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter new name..."
                                    className="
              flex-1 px-4 py-2.5 text-sm
              border border-gray-200 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-orange-400
            "
                              />

                              <button
                                    onClick={() => onSave(name)}
                                    className="
              px-4 py-2.5 text-sm font-medium text-white
              bg-orange-500 rounded-lg hover:bg-orange-600
            "
                              >
                                    Save Changes
                              </button>

                        </div>


                        {/* Info */}
                        <div className="text-sm text-gray-500 space-y-1">

                              <p>
                                    Only alphanumeric, space and dash characters are allowed.
                              </p>

                              <p>
                                    Must be min 3 characters length and max 25 characters.
                              </p>

                        </div>

                  </div>

            </div>
      );

}