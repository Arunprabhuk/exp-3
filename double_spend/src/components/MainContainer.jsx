import React from "react";
import ThreeComponent from "./Three/ThreeComponent";
import ControlPanel from "./ControlPanel";

const MainContainer = () => {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      <div style={{ flex: 0.8 }}>
        <ThreeComponent />
      </div>
      <div style={{ flex: 0.2 }}>
        <ControlPanel />
      </div>
    </div>
  );
};

export default MainContainer;
