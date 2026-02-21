import { X, AlertTriangle, Trash2 } from "lucide-react";
import { useState } from "react";

export default function IpWhitelistModal({
      isOpen,
      onClose,
      apiKey,
      whitelist = [],
      onAdd,
      onDelete
}) {

      const [ip, setIp] = useState("");

      if (!isOpen) return null;


      const handleAdd = () => {
            if (!ip.trim()) return;
            onAdd(ip);
            setIp("");
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
        relative bg-white w-full max-w-lg
        rounded-xl shadow-xl border border-gray-200
        p-6
      ">

                        {/* Header */}
                        <div className="flex justify-between items-center mb-5">

                              <h2 className="text-base font-semibold text-gray-800">
                                    IP Whitelist
                              </h2>

                              <button
                                    onClick={onClose}
                                    className="p-1 hover:bg-gray-100 rounded"
                              >
                                    <X size={18} />
                              </button>

                        </div>



                        {/* Input Section */}
                        <div className="flex gap-3 mb-4">

                              <input
                                    value={ip}
                                    onChange={(e) => setIp(e.target.value)}
                                    placeholder="Enter IP address..."
                                    className="
              flex-1 px-4 py-2.5 text-sm
              border border-gray-200 rounded-lg
              focus:outline-none
              focus:ring-2 focus:ring-orange-400/40
              focus:border-orange-400
            "
                              />

                              <button
                                    onClick={handleAdd}
                                    className="
              px-4 py-2.5 text-sm font-medium
              text-white
              bg-orange-500
              rounded-lg
              hover:bg-orange-600
              transition-colors
            "
                              >
                                    + Add New IP Rule
                              </button>

                        </div>



                        {/* Info */}
                        <div className="text-sm text-gray-500 space-y-2 mb-4">

                              <p>
                                    You can add a single IP (i.e. 1.2.3.4) or a valid CIDR
                                    (i.e. 1.2.3.4/24).
                              </p>

                              <div className="flex gap-2 text-amber-600">

                                    <AlertTriangle size={16} />

                                    <p>
                                          IP addresses not matching whitelist rules cannot use this API key.
                                    </p>

                              </div>

                              <p>
                                    To disable this feature, delete all whitelist rules.
                              </p>

                              <p className="text-gray-400">
                                    {whitelist.length} / 10 IP whitelist rules
                              </p>

                        </div>



                        {/* List */}
                        {whitelist.length > 0 && (

                              <div className="
            border border-gray-200 rounded-lg
            max-h-40 overflow-auto
          ">

                                    {whitelist.map((item, index) => (

                                          <div
                                                key={index}
                                                className="
                  flex justify-between items-center
                  px-4 py-2 text-sm
                  border-b last:border-b-0
                  hover:bg-gray-50
                "
                                          >

                                                <span className="text-gray-700">
                                                      {item}
                                                </span>

                                                <button
                                                      onClick={() => onDelete(item)}
                                                      className="
                    text-gray-400 hover:text-red-500
                  "
                                                >
                                                      <Trash2 size={16} />
                                                </button>

                                          </div>

                                    ))}

                              </div>

                        )}

                  </div>

            </div>
      );

}