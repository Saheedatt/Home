"use client";

import { useState } from "react";
import SideNav from "./Sidebar";
import Header from "./Header";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      <SideNav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-1 bg-white">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
