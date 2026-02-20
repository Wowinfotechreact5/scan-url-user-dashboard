import { Menu } from "lucide-react";

export default function Header({ collapsed, setCollapsed }) {

      return (
            <header className="bg-white shadow px-6 py-4 flex items-center">

                  <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="mr-4"
                  >
                        <Menu />
                  </button>

                  <h2 className="text-lg font-semibold">
                        Dashboard
                  </h2>

            </header>
      );
}