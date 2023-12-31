import React from "react";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";

import { setAddItemToCart } from "../../app/CartSlice";
const Card = (
  { ifExists, id, title, text, price, img, rating, btn, color, shadow },
  key
) => {
  const dispatch = useDispatch();
  const onAddToCart = () => {
    const item = {
      id,
      title,
      text,
      img,
      color,
      shadow,
      price,
    };
    dispatch(setAddItemToCart(item));
    // Temporary pop-up
  };
  return (
    <div
      className={`relative items-center bg-gradient-to-b ${color} ${shadow}
      transition-all duration-700 ease-in-out w-full hover:scale-105
      ${ifExists ? "justify-items-start" : "justify-items-center"}
      rounded-xl py-4 px-5`}
      key={key}
    >
      <div
        className={`grid items-center  ${
          ifExists ? "justify-items-start" : "justify-items-center"
        }`}
      >
        <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
          {title}
        </h1>
        <p className="text-slate-200 txt-base md:text-sm font-normal filter drop-shadow">
          {text}
        </p>
        <div className="flex items-center justify-between w-28 my-2">
          <div className="flex items-center bg-white/80 px-1 rounded blur-eefect-theme">
            <h1 className="text-sm text-black font-medium">${price}</h1>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon
              className="icon-style w-5 h-5 md:h-4 md:w-4
            "
            />
            <h1 className="md:text-sm font-normal text-slate-100">{rating}</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className=" bg-white/90 rounded-sm blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
          >
            <ShoppingBagIcon className="icon-style text-slate-900" />
          </button>
          <button
            type="button"
            onClick={onAddToCart}
            className="bg-white/90 rounded-sm blur-effect-theme button-theme px-2  py-1 p-0.5 shadow shadow-sky-200 text-sm text-black"
          >
            {btn}
          </button>
        </div>
      </div>
      <div
        className={`flex items-center ${
          ifExists ? "absolute top-5 right-1" : "justify-center"
        }`}
      >
        <img
          src={img}
          alt={`img/item-image/${id}`}
          className={`transition-theme hover:-rotate-12${
            ifExists
              ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
              : "h-36 w-64"
          } `}
        />
      </div>
    </div>
  );
};

export default Card;
