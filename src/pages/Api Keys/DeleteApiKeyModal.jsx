import { X } from "lucide-react";

export default function DeleteApiKeyModal({
      isOpen,
      onClose,
      apiKey,
      onDelete
}) {

      if (!isOpen) return null;


      return (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center">

                  <div
                        className="absolute inset-0 bg-black/40"
                        onClick={onClose}
                  />

                  <div className="
        relative bg-white w-full max-w-md
        rounded-xl shadow-xl border p-6
      ">

                        <div className="flex justify-between mb-4">

                              <h2 className="font-semibold">
                                    Delete API Key
                              </h2>

                              <button onClick={onClose}>
                                    <X size={18} />
                              </button>

                        </div>

                        <p className="text-sm text-gray-600 mb-6">
                              Are you sure you want to delete
                              <span className="font-medium"> {apiKey?.name}</span> ?
                        </p>


                        <div className="flex justify-end gap-3">

                              <button
                                    onClick={onClose}
                                    className="px-4 py-2 border rounded-lg"
                              >
                                    Cancel
                              </button>

                              <button
                                    onClick={() => onDelete(apiKey.id)}
                                    className="
              px-4 py-2 bg-red-500 text-white rounded-lg
              hover:bg-red-600
            "
                              >
                                    Delete
                              </button>

                        </div>

                  </div>

            </div>
      );

}