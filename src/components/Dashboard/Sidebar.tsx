"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  Music,
  Bell,
  HelpCircle,
  Settings,
  Phone,
  LayoutDashboard,
  ShieldAlert,
  X,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: JSX.Element;
}

const SideNav = ({
  isSidebarOpen,
  toggleSidebar,
}: {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}) => {
  const navItems: NavItem[] = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    { label: "Rooms", href: "/", icon: <Home size={20} /> },
    { label: "Devices", href: "/", icon: <Phone size={20} /> },
    { label: "Security", href: "/", icon: <ShieldAlert size={20} /> },
    { label: "Settings", href: "/", icon: <Settings size={20} /> },
    { label: "Notifications", href: "/", icon: <Bell size={20} /> },
    { label: "Music", href: "/", icon: <Music size={20} /> },
    { label: "Support", href: "/", icon: <HelpCircle size={20} /> },
  ];

  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        toggleSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isSidebarOpen, toggleSidebar]);
  const renderSkipNavigation = () => (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      Skip to main content
    </Link>
  );
  return (
    <aside
      ref={sidebarRef}
      role="complementary"
      aria-label="Sidebar Navigation"
      className={`fixed md:static top-0 left-0 z-50 h-full w-64 bg-[#1A1F36] text-white p-4 transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 id="Foyer" className="text-2xl font-bold text-[#FCA311]">
          Foyer
        </h2>
        <button
          className="md:hidden"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        >
          <X size={24} />
        </button>
      </div>

      <nav className="flex flex-col space-y-4">
        {renderSkipNavigation()}
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className="flex items-center hover:bg-gray-700 hover:text-[#FCA311] p-2 rounded transition-colors text-sm lg:text-base"
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default SideNav;
