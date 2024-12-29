import React from "react";
import { Link } from "react-router-dom";
import Popup from "./SubNav/Popup";

const main = () => {
  const val = [
    {
      img: "https://cdn.prod.website-files.com/5bac0565754dd6b3e278aeb2/5c316400edb5fd4d25b25d26_hd-graphite.svg",
      text: "MPM HD",
      to: "/logout",
    },
    {
      img: "https://cdn.prod.website-files.com/5bac0565754dd6b3e278aeb2/5c317c167569f5713dfc8712_file-txt-graphite.svg",
      text: "Read Me",
      to: "/read-me",
    },
    {
      img: "https://cdn.prod.website-files.com/5bac0565754dd6b3e278aeb2/5c313fb5121342313602b009_disk-graphite.svg",
      text: "Clients",
      to: "/clients",
    },
    {
      img: "https://cdn.prod.website-files.com/5bac0565754dd6b3e278aeb2/5c31625c121342820702cc14_folder-graphite.svg",
      text: "Webflow",
      to: "/webflow",
    },
  ];

  return (
    <div className="w-full  h-[585px] text-m bg-[url(https://assets-global.website-files.com/5bac0565754dd6b3e278aeb2/5bac0565754dd6780a78af19_deckstop-background.svg)] bg-repeat bg-[length:2px] flex-col flex-1 justify-between items-end flex relative z-0 p-4 rounded-br-3xl rounded-bl-3xl">
      <div className="h-full flex flex-col gap-5 w-fit text-xl font-sans">
        {val.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="flex flex-col gap-2 justify-center items-center cursor-pointer"
          >
            <div className="w-16 h-16 flex items-end">
              <img className="text-xl" src={item.img} alt="" />
            </div>
            <h3 className="bg-white py-0 px-2 font-medium">{item.text}</h3>
          </Link>
        ))}
      </div>
      <Popup />
    </div>
  );
};

export default main;
