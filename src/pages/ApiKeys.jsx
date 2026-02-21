import { useEffect, useState } from "react";
import { Copy, MoreHorizontal, Info } from "lucide-react";
import {
      Pencil,
      RefreshCcw,
      Shield,
      Gauge,
      Trash2
} from "lucide-react";
import RegenerateKeyModal from "./Api Keys/RegenerateKeyModal";
import DeleteApiKeyModal from "./Api Keys/DeleteApiKeyModal";
import ChangeNameModal from "./Api Keys/ChangeNameModal";
import IpWhitelistModal from "./Api Keys/IpWhitelistModal";
import LimitCreditsModal from "./Api Keys/LimitCreditsModal";
import { useNavigate } from "react-router-dom";
export default function ApiKeys() {
      const [openMenuId, setOpenMenuId] = useState(null);
      const [apiName, setApiName] = useState("");
      const [modalType, setModalType] = useState(false)
      const [ipModalOpen, setIpModalOpen] = useState(false);
      const [selectedKey, setSelectedKey] = useState(null);
      const [whitelist, setWhitelist] = useState([]);
      const [limitModalOpen, setLimitModalOpen] = useState(false);
      const [apiKeys, setApiKeys] = useState([
            {
                  id: 1,
                  name: "Production",
                  key: "8M21MB2vUlj86wqkavKwt4t74IFkBRxC",
                  usage: 0,
            },
      ]);

      const handleAddKey = () => {

            if (!apiName.trim()) return;

            const newKey = {
                  id: Date.now(),
                  name: apiName,
                  key: generateRandomKey(),
                  usage: 0,
            };

            setApiKeys([...apiKeys, newKey]);

            setApiName("");
      };

      const generateRandomKey = () => {

            return Math.random()
                  .toString(36)
                  .substring(2, 34);
      };

      const copyKey = (key) => {

            navigator.clipboard.writeText(key);
      };
      useEffect(() => {
            const handleClickOutside = () => {
                  setOpenMenuId(null);
            };

            document.addEventListener("click", handleClickOutside);

            return () =>
                  document.removeEventListener("click", handleClickOutside);
      }, []);

      const navigate = useNavigate()
      return (
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 overflow-visible">

                  {/* Header */}
                  <div className="mb-6">

                        <h2 className="text-base font-semibold text-gray-800 mb-1">
                              API Keys
                        </h2>

                        <p className="text-sm text-gray-500">
                              Manage and create API keys for accessing your services
                        </p>

                  </div>



                  {/* Add Section */}
                  <div className="flex flex-col sm:flex-row gap-3 mb-4">

                        <input
                              value={apiName}
                              onChange={(e) => setApiName(e.target.value)}
                              placeholder="Enter API key name..."
                              className="
        w-full sm:w-80
        px-4 py-2.5
        text-sm
        border border-gray-200
        rounded-lg
        focus:outline-none
        focus:ring-2 focus:ring-orange-400/40
        focus:border-orange-400
        transition-all duration-200
      "
                        />

                        <button
                              onClick={handleAddKey}
                              className="
        px-5 py-2.5
        text-sm font-medium
        text-white
        bg-gradient-to-r from-orange-500 to-orange-400
        rounded-lg
        hover:from-orange-600 hover:to-orange-500
        shadow-sm hover:shadow-md
        transition-all duration-200
      "
                        >
                              + Add New API Key
                        </button>

                  </div>



                  {/* Info Text */}
                  <div className="
    text-sm text-gray-500
    space-y-1
    mb-6
  ">

                        <p>
                              Only alphanumeric, space, and dash characters allowed
                        </p>

                        <p>
                              Minimum 3 characters, maximum 25 characters
                        </p>

                        <p>
                              <span className="font-medium text-gray-700">
                                    {apiKeys.length} / 2
                              </span>
                              <span className="ml-1">
                                    API keys allowed
                              </span>

                              <button onClick={() => navigate('/subscription')} className="
        ml-2
        text-orange-600
        hover:text-orange-700
        font-medium
        transition-colors
      ">
                                    Upgrade plan
                              </button>

                        </p>

                  </div>



                  {/* Table */}
                  <div className="overflow-visible rounded-lg border border-gray-100">
                        <table className="w-full">

                              {/* Table Head */}
                              <thead className="bg-gray-50/70">

                                    <tr className="text-left text-xs text-gray-500 uppercase tracking-wider">

                                          <th className="px-4 py-3 font-medium">
                                                Name
                                          </th>

                                          <th className="px-4 py-3 font-medium">
                                                API Key
                                          </th>

                                          <th className="px-4 py-3 font-medium">
                                                <div className="flex items-center gap-1">
                                                      <Info size={14} />
                                                      Usage
                                                </div>
                                          </th>

                                          <th className="px-4 py-3 font-medium text-right">
                                                Actions
                                          </th>

                                    </tr>

                              </thead>



                              {/* Table Body */}
                              <tbody className="divide-y divide-gray-100">

                                    {apiKeys.map((item) => (

                                          <tr
                                                key={item.id}
                                                className="
              group
              hover:bg-gray-50/60
              transition-colors duration-200
            "
                                          >

                                                {/* Name */}
                                                <td className="px-4 py-3">

                                                      <span className="text-sm font-medium text-gray-800">
                                                            {item.name}
                                                      </span>

                                                </td>



                                                {/* API Key */}
                                                <td className="px-4 py-3">

                                                      <div className="flex items-center gap-2">

                                                            <input
                                                                  value={item.key}
                                                                  readOnly
                                                                  className="
                    w-80
                    px-3 py-1.5
                    text-sm
                    bg-gray-50
                    border border-gray-200
                    rounded-md
                    text-gray-600
                  "
                                                            />

                                                            <button
                                                                  onClick={() => copyKey(item.key)}
                                                                  className="
                    p-2
                    rounded-md
                    text-gray-500
                    hover:text-orange-600
                    hover:bg-orange-50
                    transition-all duration-200
                  "
                                                            >
                                                                  <Copy size={16} />
                                                            </button>

                                                      </div>

                                                </td>



                                                {/* Usage */}
                                                <td className="px-4 py-3">

                                                      <span className="
                text-sm
                font-medium
                text-gray-700
              ">
                                                            {item.usage}
                                                      </span>

                                                </td>



                                                {/* Actions */}
                                                <td className="px-4 py-3 text-right relative overflow-visible">
                                                      <button
                                                            onClick={(e) => {
                                                                  e.stopPropagation();
                                                                  setOpenMenuId(openMenuId === item.id ? null : item.id);
                                                            }}
                                                            className="p-2 rounded-md hover:bg-gray-100"
                                                      >
                                                            <MoreHorizontal size={18} />
                                                      </button>
                                                      {openMenuId === item.id && (
                                                            <div
                                                                  onClick={(e) => e.stopPropagation()}
                                                                  className="
      absolute right-0 bottom-full mb-2
      w-56
      bg-white
      border border-gray-200
      rounded-lg
      shadow-xl
      py-1
      z-[999]
    "
                                                            >

                                                                  {/* Change Name */}
                                                                  <button onClick={() => {
                                                                        setSelectedKey(item);
                                                                        setModalType("changeName");
                                                                  }} className="
      flex items-center gap-3 w-full
      px-4 py-2 text-sm text-gray-700
      hover:bg-gray-50 transition-colors
    ">
                                                                        <Pencil size={16} className="text-gray-500" />
                                                                        Change Name
                                                                  </button>


                                                                  {/* Regenerate Key */}
                                                                  <button onClick={() => {
                                                                        setSelectedKey(item);
                                                                        setModalType("regenerate");
                                                                  }} className="
      flex items-center gap-3 w-full
      px-4 py-2 text-sm text-gray-700
      hover:bg-gray-50 transition-colors
    ">
                                                                        <RefreshCcw size={16} className="text-gray-500" />
                                                                        Regenerate Key
                                                                  </button>


                                                                  {/* IP Whitelist */}
                                                                  <button onClick={() => {
                                                                        setSelectedKey(item);
                                                                        setIpModalOpen(true);
                                                                  }} className="
      flex items-center gap-3 w-full
      px-4 py-2 text-sm text-gray-700
      hover:bg-gray-50 transition-colors
    ">
                                                                        <Shield size={16} className="text-gray-500" />
                                                                        IP Whitelist
                                                                  </button>


                                                                  {/* Limit Credits */}
                                                                  <button onClick={() => {
                                                                        setSelectedKey(item);
                                                                        setLimitModalOpen(true);
                                                                  }} className="
      flex items-center gap-3 w-full
      px-4 py-2 text-sm text-gray-700
      hover:bg-gray-50 transition-colors
    ">
                                                                        <Gauge size={16} className="text-gray-500" />
                                                                        Limit Credits
                                                                  </button>


                                                                  <div className="border-t my-1"></div>


                                                                  {/* Delete */}
                                                                  <button onClick={() => {
                                                                        setSelectedKey(item);
                                                                        setModalType("delete");
                                                                  }} className="
      flex items-center gap-3 w-full
      px-4 py-2 text-sm text-red-500
      hover:bg-red-50 transition-colors
    ">
                                                                        <Trash2 size={16} className="text-red-500" />
                                                                        Delete
                                                                  </button>

                                                            </div>
                                                      )}

                                                </td>

                                          </tr>

                                    ))}

                              </tbody>

                        </table>

                  </div>
                  <ChangeNameModal
                        isOpen={modalType === "changeName"}
                        apiKey={selectedKey}
                        onClose={() => setModalType(null)}
                  // onSave={handleChangeName}
                  />

                  <DeleteApiKeyModal
                        isOpen={modalType === "delete"}
                        apiKey={selectedKey}
                        onClose={() => setModalType(null)}
                  // onDelete={handleDelete}
                  />

                  <RegenerateKeyModal
                        isOpen={modalType === "regenerate"}
                        apiKey={selectedKey}
                        onClose={() => setModalType(null)}
                  // onRegenerate={handleRegenerate}
                  />
                  <IpWhitelistModal
                        isOpen={ipModalOpen}
                        onClose={() => setIpModalOpen(false)}
                        apiKey={selectedKey}
                        whitelist={whitelist}
                  // onAdd={(ip) => setWhitelist(prev => [...prev, ip])}
                  // onDelete={(ip) =>
                  //       setWhitelist(prev => prev.filter(x => x !== ip))
                  // }
                  />

                  <LimitCreditsModal
                        isOpen={limitModalOpen}
                        onClose={() => setLimitModalOpen(false)}
                        apiKey={selectedKey}
                        defaultValue={selectedKey?.creditLimit}
                  // onSave={(value) => {

                  //       setApiKeys(prev =>
                  //             prev.map(k =>
                  //                   k.id === selectedKey.id
                  //                         ? { ...k, creditLimit: value }
                  //                         : k
                  //             )
                  //       );

                  //       setLimitModalOpen(false);

                  // }}
                  />
            </div>
      );
}