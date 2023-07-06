import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import emptybag from "../../assets/emptybag.png";
const CartEmpty = () => {
  return (
    <div
      key="cartEmpty"
      className="flex items-center justify-center flex-col h-screen  px-11 text-center gap-7"
    >
      <img
        alt="img/emptybag"
        src={emptybag}
        className="w-40  lg:w-36 sm:w-28 h-auto object-fll transition-all duration-300 hover:scale-110"
      />
      <button
        type="button"
        className=" button-theme bg-gradient-to-b from-amber-500 to-orange-500 flex items-center justify-items-center py-3 px-2 text-sm font-semibold active:sclae-110"
      >
        <ArrowLeftIcon className="w-5 h-5 text-slate-900" />
        <span className="">Back to Nike Store</span>
      </button>
    </div>
  );
};

export default CartEmpty;
