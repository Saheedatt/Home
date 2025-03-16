"use client";
import { Menu, Plus, Bell, User } from "lucide-react";
import ModeToggle from "./ModeToggle";

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="bg-white dark:bg-[#1A1F36] text-gray-900 dark:text-white p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 w-full">
      <div className="flex items-center">
        <h1 className="text-lg font-bold text-gray-900 dark:text-white md:hidden">
          Foyer
        </h1>
        <div className="hidden md:flex flex-col">
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">
            Good day, "user"
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Your systems are functioning as well as expected
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="hidden md:flex px-4 py-2 bg-[#FCA311] text-black rounded-lg items-center gap-2 hover:bg-[#FCA311]/90 focus:outline-none focus:ring-2 focus:ring-[#FCA311]/50">
          <Plus size={14} /> Add Device
        </button>
        <div className="hidden md:flex">
          <ModeToggle />
        </div>

        <button
          className="p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-lg"
          aria-label="Notifications"
        >
          <Bell size={20} />
        </button>

        <button
          className="hidden md:flex p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-lg"
          aria-label="Profile"
        >
          <User size={20} />
        </button>

        <button
          className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-lg"
          onClick={toggleSidebar}
          aria-label="Open Sidebar"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
