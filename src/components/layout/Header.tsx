"use client";

import React, { useState, useEffect } from "react";
import {
  Shield,
  Sun,
  Moon,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { Button } from "../ui/button";

const learnItems = [
  {
    name: "What is Digital Footprint",
    href: "/learn/what-is-digital-footprint",
  },
  { name: "How It's Formed", href: "/learn/how-its-formed" },
  { name: "Consequences", href: "/learn/consequences" },
  { name: "Data Storage", href: "/learn/data-storage" },
];

const manageItems = [
  { name: "How to Manage", href: "/manage/how-to-manage" },
  { name: "Cleanup Guide", href: "/manage/cleanup-guide" },
  {
    name: "Social Media Guide",
    href: "/manage/social-media-guide",
  },
  { name: "Action Steps", href: "/manage/action-steps" },
];

export function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Theme setup - local storage se theme laate hain
    const savedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);
    document.documentElement.classList.toggle(
      "dark",
      initialTheme === "dark",
    );
  }, []);

  const toggleTheme = () => {
    // Theme toggle karne ka function
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark",
    );
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-3 flex-shrink-0"
          >
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-semibold text-slate-900 dark:text-white">
              DigitalGuard
            </span>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            {/* Home */}
            <a
              href="/"
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium px-4 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Home
            </a>

            {/* Learn Dropdown */}
            <div className="relative group">
              <button className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium px-4 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center">
                Learn <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  {learnItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Manage Dropdown */}
            <div className="relative group">
              <button className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium px-4 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center">
                Manage <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  {manageItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools */}
            <a
              href="/tools"
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium px-4 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Tools
            </a>

            {/* Resources */}
            <a
              href="/resources"
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium px-4 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Resources
            </a>

            {/* About Us */}
            <a
              href="/about"
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium px-4 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              About Us
            </a>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2 ml-4 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-200"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-700 py-4">
            <div className="space-y-2">
              <a
                href="/"
                onClick={closeMobileMenu}
                className="block px-4 py-2 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
              >
                Home
              </a>

              {/* Learn Section */}
              <div className="px-4 py-2">
                <div className="font-medium text-slate-900 dark:text-white mb-2">
                  Learn
                </div>
                <div className="space-y-1 ml-4">
                  {learnItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block px-2 py-1 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Manage Section */}
              <div className="px-4 py-2">
                <div className="font-medium text-slate-900 dark:text-white mb-2">
                  Manage
                </div>
                <div className="space-y-1 ml-4">
                  {manageItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block px-2 py-1 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="/tools"
                onClick={closeMobileMenu}
                className="block px-4 py-2 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
              >
                Tools
              </a>

              <a
                href="/resources"
                onClick={closeMobileMenu}
                className="block px-4 py-2 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
              >
                Resources
              </a>

              <a
                href="/about"
                onClick={closeMobileMenu}
                className="block px-4 py-2 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
              >
                About Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
