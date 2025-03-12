"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";


interface NavItem {
  label: string;
  href: string;
}

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const { data: session } = useSession();

  const navItems: NavItem[] = [
    { label: "About us", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Help", href: "/help" },
    { label: "Read", href: "/read" },
    { label: "Contact", href: "/contact" },
  ];

  const renderSkipNavigation = () => (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gray-100 text-black px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      Skip to main content
    </Link>
  );

  const toggleMenu = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsSidebarOpen(false);
    menuButtonRef.current?.focus();
  };

  const renderAuthButton = () => {

    if (session) {
      return (
        <button
          onClick={() => signOut()}
          className="ml-4 px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Sign Out
        </button>
      );
    } else {
      return (
        <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Sign In
      </button>
      );
    }
  };

  const renderLogo = () => (
    <Link
      href="/"
      className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold transition-colors text-gray-800 hover:text-[#FCA311] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-md"
      aria-label="Foyer's Logo"
    >
      Foyer
    </Link>
  );

  const renderNavItems = () =>
    navItems.map((item) => (
      <Link
        key={item.label}
        href={item.href}
        className="mx-4 p-2 text-gray-800 hover:text-[#FCA311] transition-colors text-sm lg:text-base"
        aria-label={`Navigate to ${item.label}`}
      >
        {item.label}
      </Link>
    ));

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isSidebarOpen]);

  return (
    <nav
      className="flex justify-between items-center py-4 px-8 bg-white"
      role="navigation"
      aria-label="Main navigation"
    >
      {renderSkipNavigation()}
      {renderLogo()}
      <div className="hidden md:flex items-center">
        {renderNavItems()}
        {renderAuthButton()}
      </div>
      <button
        ref={menuButtonRef}
        className="md:hidden p-2 rounded-md hover:text-[#FCA311] text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCA311]"
        onClick={toggleMenu}
        aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        aria-expanded={isSidebarOpen}
        aria-controls="mobile-menu"
      >
        {isSidebarOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>
      {isSidebarOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
          ref={sidebarRef}
          onClick={closeMenu}
          className="fixed inset-0 z-50 bg-black bg-opacity-50 transition-transform duration-300 md:hidden"
        >
          <div className="bg-white w-64 h-full p-4 fixed right-0 top-0 transform transition-transform duration-300"
          onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold">Menu</span>
              <button onClick={closeMenu} aria-label="Close Menu">
                <X className="w-6 h-6 bg-black" />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-800 hover:text-[#FCA311] transition-colors"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              {renderAuthButton()}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
