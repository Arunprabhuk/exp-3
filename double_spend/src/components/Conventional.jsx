import React, { useRef } from "react";
import { Bank } from "./Three/Objects/Bank";
import { UserOne } from "./Three/Objects/UserOne";
import UserOneScene from "./Three/UserOneScene";
import { UserTwo } from "./Three/Objects/User2";
import { Text } from "@react-three/drei";
import { useSelector } from "react-redux";
import { useFrame } from "react-three-fiber";

export const Conventional = () => {
  const { userDetails, sendAnmiation } = useSelector(
    (state) => state.DoubleSpendingReducer
  );
  const { receiverName, amount } = userDetails;
  const animatedCube = useRef();
  console.log(sendAnmiation);
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (sendAnmiation) {
      if (time < 15) {
        animatedCube.current.position.y += 0.01;
        animatedCube.current.position.x += 0.01;
      } else if (time > 15 && time < 20) {
        console.log("hello");
        animatedCube.current.position.y -= 0.01;
        animatedCube.current.position.x += 0.01;
      } else if (time > 20 && time < 25) {
        animatedCube.current.position.y += 0.01;
        animatedCube.current.position.x += 0.01;
      } else if (time > 26 && time < 34) {
        animatedCube.current.position.y -= 0.01;
        animatedCube.current.position.x += 0.01;
      }
    }
  });
  return (
    <group>
      <group position={[7, -0.5, -1]} rotation={[0, 8, 0]}>
        <UserOne />
        <UserOneScene />
        <Text
          rotation={[0, -90, 0]}
          color="white"
          position={[0, 2.5, 0]}
          fontSize={0.2}
          scale={1.5}
          strokeWidth={10}
        >
          {receiverName}
        </Text>
      </group>
      <group position={[-7, -0.5, -1]} rotation={[0, 4, 0]}>
        <UserTwo />
        <UserOneScene />
        <Text
          rotation={[0, 90, 0]}
          color="white"
          position={[0, 2.5, 0]}
          fontSize={0.2}
        >
          User
        </Text>
      </group>
      <Bank />
      <group ref={animatedCube}>
        <mesh position={[-8, 0.9, 0]}>
          <boxGeometry args={[0.3, 0.1, 0.1]} />
          <meshBasicMaterial />
        </mesh>
      </group>
    </group>
  );
};
