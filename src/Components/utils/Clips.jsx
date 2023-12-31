import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
const Clips = ({ imgsrc, clip }) => {
  return (
    <>
      <div
        className="relative cursor-pointer duration-300 h-28 w-32 rounded-xl overflow-hidden group
      transition-all lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14
      "
      >
        <img
          src={imgsrc}
          alt="img-clips"
          className="inset-0 flex h-full top-0 left-0 right-0
          absolute rounded-xl
            opacity-100
            index-10
          "
        />
        <div
          className="
        bg-white blur-effect-theme absolute
         top-11 left-11 lg:top-8 lg:left-9 sm:top-4 sm:left-5
         opacity-100 z-[100] w-8 h-8
         md:w-5 md:h-5 flex
        items-center justify-center rounded-full "
        >
          <PlayIcon className="icon-style text-slate-900" />
        </div>
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="absolute top-0 left-0 right-0 h-full w-full object-cover opacity-0 index-0
          group-hover:opacity-100 group-hover:z-20
          "
        >
          <source type="video/mp4" src={clip} />
        </video>
      </div>
    </>
  );
};

export default Clips;
