import React from "react";
import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

const CartCount = ({ count, toggle }) => {
  console.log(count);
  return (
    <div className="bg-white sticky left-0 right-0 justify-between top-0 flex items-center w-full py-3 px-3">
      <div className="flex items-center gap-2">
        <div className="grid items-center cursor-pointer" onClick={toggle}>
          <ChevronDoubleLeftIcon className=" text-slate-900 hover:text-orange-500  stroke-[2] w-5 h-5" />
        </div>
        <div className="grid items-center">
          <h1 className="text-base font-medium text-slate-900">
            Your Cart
            <span className="bg-theme-cart rounded ml-1 px-1 py-0.5 text-slate-100 font-normal">
              {count}
            </span>
          </h1>
        </div>
      </div>
      <div className=" flex items-center ">
        <button
          type="button"
          className="rounded bg-theme-cart active:scale-90 p-0.5"
        >
          <XMarkIcon className="w-5 h-5 text-white stroke-[2]" />
        </button>
      </div>
    </div>
  );
};

export default CartCount;
