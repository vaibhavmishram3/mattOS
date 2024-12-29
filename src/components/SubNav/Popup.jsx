import React from "react";
import { Route, Routes } from "react-router-dom";
import Logout from "../Popup/Logout";

const Popup = () => {
  return (
    <div className="w-fit h-fit  absolute">
      <Routes>
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
};

export default Popup;
