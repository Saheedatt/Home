"use client";
import { Menu, Plus, Bell } from "lucide-react";

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="bg-[#1A1F36] text-white p-4 flex items-center justify-between border-b border-gray-800 md:ml-64">
      <div>
      <h1 className="text-lg font-bold text-white">Good day, "user"</h1>
      <p className="Your systems are functioning as well as expected"></p>
      </div>
      <button className="md:hidden" onClick={toggleSidebar} aria-label="Open Sidebar">
        <Menu size={24} />
      </button>
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-[#FCA311] text-black rounded-lg flex items-center gap-2 hover:bg-[#FCA311] focus:outline-none focus:ring-2 focus:ring-gray-300">
          <Plus size={14} /> Add Device
        </button>

        <button
          className="p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-lg"
          aria-label="Notifications"
        >
          <Bell size={14} />
        </button>
      </div>
    </header>
  );
};

export default Header;


//Remember to add the conditional statements and the other icons that are supposed to be in the header 