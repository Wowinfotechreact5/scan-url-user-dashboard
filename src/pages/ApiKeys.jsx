export default function ApiKeys() {
      return (

            <div className="bg-white p-6 rounded-lg shadow">

                  <div className="flex gap-3 mb-4">

                        <input
                              className="border px-4 py-2 rounded-lg w-80"
                              placeholder="Enter name..."
                        />

                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                              Add API Key
                        </button>

                  </div>

                  <table className="w-full">

                        <thead className="border-b">

                              <tr>
                                    <th className="text-left p-3">NAME</th>
                                    <th className="text-left p-3">API KEY</th>
                                    <th className="text-left p-3">USAGE</th>
                                    <th className="text-left p-3">ACTION</th>
                              </tr>

                        </thead>

                        <tbody>

                              <tr className="border-b">
                                    <td className="p-3">Production</td>
                                    <td className="p-3">8M21MB2vU...</td>
                                    <td className="p-3">0</td>
                                    <td className="p-3">•••</td>
                              </tr>

                        </tbody>

                  </table>

            </div>

      );
}