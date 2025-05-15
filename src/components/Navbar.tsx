'use client'
import React, { useState } from "react";

const Navbar = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <>
      {/* Top bar with logo and contact/login */}
      <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/brand-logo.png" className="h-8" alt="Blog Logo" />
            <span className="font-bold text-lg text-gray-900 dark:text-white">alurdom</span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:5554121234"
              className="text-sm text-gray-500 dark:text-white hover:underline"
            >
              (555) 412-1234
            </a>
            <a
              href="/login"
              className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </nav>

      {/* Main navigation menu */}
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <ul className="flex items-center space-x-8 rtl:space-x-reverse text-sm font-medium text-gray-900 dark:text-white">
            <li>
              <a href="/" className="hover:underline" aria-current="page">
                Home
              </a>
            </li>

            <li className="relative">
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="hover:underline flex items-center focus:outline-none"
              >
                Categories
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    categoriesOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {categoriesOpen && (
                <ul className="absolute z-10 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded shadow-md">
                  <li>
                    <a
                      href="/categories/technology"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Technology
                    </a>
                  </li>
                  <li>
                    <a
                      href="/categories/lifestyle"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Lifestyle
                    </a>
                  </li>
                  <li>
                    <a
                      href="/categories/travel"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Travel
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>

            <li>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
