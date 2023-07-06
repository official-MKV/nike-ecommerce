import React from "react";

import Clips from "./utils/Clips";
import Socials from "./utils/Socials";
// import "../index.css";

function Hero({ heroapi }) {
  return (
    <>
      <div className="relative h-auto w-auto flex flex-col">
        <div
          className="absolute bg-theme clip-path h-[85vh]
         w-auto
        lg:h-[75vh] md:h-[65vh] sm:h-[60vh]
        top-0 left-0 right-0 opacity-100 z-10
        "
        ></div>
        <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
          <div
            className="grid items-center
          justify-items-center mt-28 md:mt-24
          "
          >
            <h1
              className="text-6xl lg:text-5xl md:text-3xl xsm:text-2xl font-extrabold
            filter drop-shadow-sm text-slate-200
            "
            >
              {heroapi.title}
            </h1>
            <h1
              className="animate-spring text-6xl lg:text-5xl md:text-3xl xsm:text-2xl font-extrabold
            filter drop-shadow-sm text-slate-200
            "
            >
              {heroapi.subtitle}
            </h1>
            <button type="button" className="button-theme my-5 bg-slate-200">
              {heroapi.btntext}
            </button>
            <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto">
              {heroapi.videos?.map((video, i) => {
                return (
                  <Clips key={i} imgsrc={video.imgsrc} clip={video.clip} />
                );
              })}
            </div>
            <div className="grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3">
              {heroapi.sociallinks?.map((val, i) => {
                return <Socials link={val} />;
              })}
            </div>
          </div>
          <div>
            <img
              src={heroapi.img}
              alt="hero-img/img"
              className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh]
              transitions-theme
              rotate-[-25deg] hover:rotate-0 object-fill
              "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
