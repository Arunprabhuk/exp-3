import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import BlockChain from "./Objects/BlockChain";
import { useSelector } from "react-redux";
import { Conventional } from "../Conventional";

const Scene = () => {
  const { radioClicked } = useSelector((state) => state.DoubleSpendingReducer);
  console.log(radioClicked);
  return (
    <Canvas
      camera={{ fov: 15, position: [-10, 10, 50] }}
      style={{ height: "100%" }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {radioClicked === "conventional" ? <Conventional /> : <BlockChain />}

      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
