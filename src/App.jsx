import React from "react";
import { HashRouter } from "react-router-dom";
// import Popup from "./components/SubNav/Popup";
import Header from "./components/header";
import Body from "./components/body";

const App = () => {
  return (
    <div className="p-4 relative font-chicago h-screen w-screen z-0  bg-stone-950">
      <HashRouter>
        <Header />
        <Body/>
      </HashRouter>
    </div>
  );
};

export default App;
