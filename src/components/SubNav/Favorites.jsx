// components/Dropdown.jsx

import { Link } from "react-router-dom";
import React, { useState } from "react";

const Favorites = () => {
  const data = [
    { name: "Apps", to: "/apps" },
    { name: "Articles", to: "/articles" },
    { name: "Blogs", to: "blogs" },
    { name: "Board Games", to: "/board-games" },
    { name: "Coffee", to: "/coffee" },
    { name: "Inspiration", to: "/inspiration" },
    { name: "Tools", to: "/tools" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative pt-1 inline-block text-left px-5 h-full hover:bg-black cursor-pointer hover:text-white font-chicago text-3xl"
    >
      <div>
        <button className="">Favorites</button>
      </div>
      {isOpen && (
        <div
          className="origin-top-right shadow-3xl absolute left-0 mt-2 w-max border-4 border-black  bg-white  ring-black ring-opacity-0
                    focus:outline-none"
          role="menu"
        >
          <div className="" role="none">
            {data.map((item, index) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={index}
                to={item.to}
                className="block px-4 py-2 text-black hover:bg-black cursor-pointer hover:text-slate-50"
                role="menuitem"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
