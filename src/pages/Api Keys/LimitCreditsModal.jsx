import { X } from "lucide-react";
import { useState, useEffect } from "react";

export default function LimitCreditsModal({
      isOpen,
      onClose,
      apiKey,
      defaultValue = 0,
      onSave
}) {

      const [credits, setCredits] = useState(0);

      useEffect(() => {
            if (isOpen) {
                  setCredits(defaultValue || 0);
            }
      }, [defaultValue, isOpen]);


      if (!isOpen) return null;


      const handleSave = () => {

            const value = Number(credits);

            if (value < 0) return;

            if (value > 1000000) return;

            onSave(value);

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
                                    Limit Monthly Credits
                              </h2>

                              <button
                                    onClick={onClose}
                                    className="p-1 hover:bg-gray-100 rounded"
                              >
                                    <X size={18} />
                              </button>

                        </div>



                        {/* Info Text */}
                        <div className="text-sm text-gray-600 space-y-2 mb-5">

                              <p>
                                    Set the maximum <span className="font-medium">monthly credits</span> usable by this API key.
                              </p>

                              <p>
                                    To disable this restriction, set the value to <span className="font-medium">0</span>.
                              </p>

                              <p className="text-gray-500">
                                    Maximum configurable value is <span className="font-medium">1,000,000</span>.
                              </p>

                        </div>



                        {/* Input + Button */}
                        <div className="flex gap-3">

                              <input
                                    type="number"
                                    value={credits}
                                    onChange={(e) => setCredits(e.target.value)}
                                    min={0}
                                    max={1000000}
                                    className="
              w-40 px-4 py-2.5 text-sm
              border border-gray-200 rounded-lg
              focus:outline-none
              focus:ring-2 focus:ring-orange-400/40
              focus:border-orange-400
            "
                              />

                              <button
                                    onClick={handleSave}
                                    className="
              px-5 py-2.5 text-sm font-medium text-white
              bg-orange-500 rounded-lg
              hover:bg-orange-600
              transition-colors
            "
                              >
                                    Save Changes
                              </button>

                        </div>


                  </div>

            </div>
      );

}