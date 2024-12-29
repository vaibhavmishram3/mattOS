// components/Dropdown.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";


const Works = () => {

    const data = [
      { name: "Open Recent", to: "/open-recent" },
      { name: "View All", to: "/view-all" },
      { name: "Recent Video", to: "/recent-video" },
      { name: "My Video", to: "/my-video" },
      { name: "Recent Tutorial", to: "/recent-tutorial" },
      { name: "My Tutorials", to: "/my-tutorials" },
      { name: "Reacent Artical", to: "/reacent-artical" },
      { name: "My Articals", to: "/my-articals" },
    ];

  const [isOpen, setIsOpen] = useState(false);



  return (
    <div onMouseEnter={()=>setIsOpen(true)} onMouseLeave={()=>setIsOpen(false)} className="relative pt-1  inline-block text-left px-5 h-full hover:bg-black cursor-pointer hover:text-white font-chicago text-3xl">
      <div>
        <button className="">
          Work
        </button>
      </div>
      {isOpen && (
        <div
          className="origin-top-right shadow-3xl absolute left-0 mt-2 w-max border-4 border-black  bg-white  ring-black ring-opacity-0
                    focus:outline-none"
          role="menu"
        >
          <div className="" role="none">
            {data.map((item, index) =>(
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

export default Works;
