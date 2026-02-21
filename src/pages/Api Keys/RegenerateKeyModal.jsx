import { X, RefreshCcw, Check } from "lucide-react";
import { useState } from "react";

export default function RegenerateKeyModal({
      isOpen,
      onClose,
      apiKey,
      onRegenerate
}) {

      const [verified, setVerified] = useState(false);

      if (!isOpen) return null;


      const handleRegenerate = () => {

            if (!verified) return;

            onRegenerate(apiKey?.id);

            setVerified(false);

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
        p-6
      ">


                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">

                              <h2 className="text-base font-semibold text-gray-800">
                                    Regenerate API Key
                              </h2>

                              <button
                                    onClick={onClose}
                                    className="p-1 hover:bg-gray-100 rounded"
                              >
                                    <X size={18} />
                              </button>

                        </div>



                        {/* Info */}
                        <div className="text-sm text-gray-600 space-y-3 mb-5">

                              <p>
                                    You can regenerate your API key while keeping statistics and IP whitelist rules.
                              </p>

                              <p>
                                    This is useful if your API key has been compromised.
                              </p>

                              <p className="text-gray-500">
                                    The old API key will stop working immediately after regeneration.
                              </p>

                        </div>



                        {/* Human Verification */}
                        <div
                              onClick={() => setVerified(!verified)}
                              className="
            flex items-center justify-between
            border border-gray-200
            rounded-lg px-4 py-3
            mb-5 cursor-pointer
            hover:border-orange-400
            transition-colors
          "
                        >

                              <div className="flex items-center gap-3">

                                    <div className={`
              w-5 h-5 flex items-center justify-center
              rounded border
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


                              {/* Optional Icon */}
                              <div className="
            w-6 h-6 rounded-full
            bg-orange-100 text-orange-500
            flex items-center justify-center
          ">
                                    ✓
                              </div>

                        </div>



                        {/* Button */}
                        <button
                              onClick={handleRegenerate}
                              disabled={!verified}
                              className={`
            flex items-center gap-2
            px-5 py-2.5 rounded-lg text-sm font-medium
            transition-all
            ${verified
                                          ? "bg-orange-500 hover:bg-orange-600 text-white"
                                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    }
          `}
                        >

                              <RefreshCcw size={16} />

                              Regenerate

                        </button>


                  </div>

            </div>
      );

}