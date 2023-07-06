import React from "react";
import { useDispatch } from "react-redux";
import {
  setRemoveFromCart,
  setDecreaseItemFromCart,
  setAddItemToCart,
} from "../../app/CartSlice";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

const CartItem = ({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) => {
  const item = { id, title, text, img, color, shadow, price, cartQuantity };
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(setAddItemToCart(item));
  };
  const decrease = () => {
    dispatch(
      setDecreaseItemFromCart({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };
  const removeItem = () => {
    dispatch(
      setRemoveFromCart({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };
  return (
    <div className="flex items-center justify-between px-5">
      <div className="flex items-center gap-5">
        <div
          className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}
        >
          <img
            src={img}
            className="w-36 h-auto object-fill lg:w-28"
            alt={`img/cart${id}`}
          />
        </div>
        <div className="grid items-center gap-4 ">
          <div className="grid items-center leading-none">
            <h1 className="font-mdeium text-lg text-slate-900 lg:text-sm ">
              {title}
            </h1>
            <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
          </div>
          <div className="flex items-center justify-around w-full">
            <button
              type="button"
              onClick={decrease}
              className="bg-theme-cart rounded w-5 h-5 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
            >
              <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]  " />
            </button>
            <div className="bg-theme-cart text-xs rounded w-6 h-6 text-white flex items-center justify-center">
              {cartQuantity}
            </div>
            <button
              type="button"
              onClick={increase}
              className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
            >
              <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]  " />
            </button>
          </div>
        </div>
      </div>
      <div className="grid items-center  gap-5 ">
        <div className="grid items-center justify-center">
          <h1 className="text-lg lg:text-base text-slate-900 font-medium ">
            ${price * cartQuantity}
          </h1>
        </div>
        <div>
          <button
            type="button"
            onClick={removeItem}
            className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
          >
            <TrashIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]  " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
