import React from "react";
import RadioComponent from "./common/RadioComponent";
import { radioData } from "../Data";
import PlayerGround from "./PlayerGround";

const ControlPanel = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(170deg, rgb(56 68 139 / 59%) -70.38%, rgba(3, 124, 235, 0.00) 140.44%)",

        height: "100%",
      }}
    >
      <div style={{ backgroundColor: "white" }}>
        <h4
          style={{
            textAlign: "center",
            margin: 0,
            paddingBlock: 15,
            textTransform: "uppercase",
            fontFamily: "sans-serif",
            fontSize: 15,
            color: "black",
          }}
        >
          Double Spend
        </h4>
      </div>

      <div style={{ paddingTop: 15 }}>
        <RadioComponent />
      </div>
      <div style={{ height: "80%" }}>
        <PlayerGround />
      </div>
    </div>
  );
};

export default ControlPanel;
