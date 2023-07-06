import React from "react";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";

import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { setOpenCart } from "../app/CartSlice";

const Navbar = () => {
  const [navState, setnavState] = useState(false);
  const dispatch = useDispatch();
  const onCartToggle = () => {
    dispatch(setOpenCart({ cartState: true }));
  };
  function onScroll() {
    if (scrollY > 30) {
      setnavState(true);
    } else {
      setnavState(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`${
        navState
          ? "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-50 blur-effect-theme"
          : "absolute top-7 left-0 right-0 opacity-100 z-50"
      }`}
    >
      <nav className="flex items-center justify-between nike-container">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo/img"
            className={`w-16 h-auto ${navState && " brightness-0"} `}
          />
        </div>
        <ul className="flex items-center justify-center gap-2 ">
          <li className="grid items-center">
            <MagnifyingGlassIcon
              className={`icon-style ${navState ? "text-slate-900" : ""}`}
            />
          </li>
          <li className="grid items-center">
            <HeartIcon
              className={`icon-style ${navState ? "text-slate-900" : ""}`}
            />
          </li>
          <li className="grid items-center">
            <button
              type="button"
              onClick={onCartToggle}
              className="border-none outline-none active:scale-110 transition-all duration-300 relative"
            >
              <ShoppingBagIcon
                className={`icon-style ${navState ? "text-slate-900" : ""}`}
              />
              <div
                className={`absolute top-4 right-0 ${
                  navState
                    ? "bg-black text-slate-100  shadow-slate-900 "
                    : "bg-white  text-slate-900  shadow-slate-100 "
                }
                   shadow w-4 h-4 text-[0.65rem] leading-tight
                    font-medium rounded-full
                   flex items-center justify-center cursor-pointer
                    horver:scale-110 transition-all duration-300`}
              >
                0
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
