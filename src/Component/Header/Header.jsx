import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="grid grid-cols-3 gap-3 mt-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <h1 className="font-extrabold text-2xl mt-4 tracking-wide">DevHunt</h1>

      <ul className="items-center hidden space-x-8 lg:flex">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "default"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Statistics"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "default"
            }
          >
            Statistics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/applied-job"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "default"
            }
          >
            Applied Jobs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "default"
            }
          >
            Blog
          </NavLink>
        </li>
      </ul>
      <button className="button h-12 max-w-screen-xl lg:ml-32">
        Start apply
      </button>

      <div className="lg:hidden">
        <button
          aria-label="Open-Menu"
          title="Open-Menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <Bars3Icon className="w-5 text-black" />
        </button>

        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full z-10">
            <div className="p-5 bg-slate-100 border rounded shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link to="/" className="inline-flex items-center">
                    <span className="font-extrabold text-2xl mt-4 tracking-wide">
                      DevHunt
                    </span>
                  </Link>
                </div>

                <div>
                  <button
                    aria-label="Close-Menu"
                    title="Close-Menu"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <XMarkIcon className="w-5 text-black" />{" "}
                  </button>
                </div>
              </div>

              <nav>
                <ul className="space-y-4">
                  <li>
                    <Link to="/" className="default">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Statistics"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                    >
                      Statistics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/applied-job"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                    >
                      Applied-Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
                <button className="button h-12 max-w-sm">Start apply</button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
