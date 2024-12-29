import React from "react";
import Favorites from "./SubNav/Favorites";
import Logo from "./SubNav/Logo";
import Social from "./SubNav/Social";
import Webflow from "./SubNav/Webflow";
import Works from "./SubNav/Works";

const header = () => {
  const nav = [<Logo />, <Works />, <Webflow />, <Favorites />, <Social />];
  const color = ["bg-orange-500", "bg-blue-500", "bg-slate-950"];

  return (
    <div className="mb-1 relative flex justify-between items-center px-7 rounded-tl-3xl rounded-tr-3xl h-12 w-full bg-stone-50 z-10">
      <nav className="h-full flex ">
        {nav.map((item, index) => (
          <div key={index} className="h-full">
            {item}
          </div>
        ))}
      </nav>
      <div className="flex gap-3">
        {color.map((item, index) => (
          <div
            key={index}
            className={`h-6 w-6 ${item} cursor-pointer rounded-full`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default header;
