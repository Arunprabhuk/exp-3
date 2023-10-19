import { Line, QuadraticBezierLine } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "react-three-fiber";
import img from "../../../textures/cubeText1.jpg";
const BlockChain = () => {
  const innerCube1 = useRef();
  const innerCube2 = useRef();
  const innerCube3 = useRef();
  const innerCube4 = useRef();
  const innerCube5 = useRef();
  const texture = useLoader(THREE.TextureLoader, img);

  useFrame(() => {
    innerCube1.current.rotation.y += 0.03;
    innerCube2.current.rotation.y += 0.03;
    innerCube3.current.rotation.y += 0.03;
    innerCube4.current.rotation.y += 0.03;
    innerCube5.current.rotation.y += 0.03;
    // innerCube.current.rotation.z += 0.01;
  });
  return (
    <group>
      <group>
        <group position={[-1, 0, 0]}>
          <mesh position={[-2, 0, 0]}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshBasicMaterial color={"#ddddff"} transparent opacity={0.3} />
          </mesh>
          <mesh ref={innerCube1} position={[-2, 0, 0]}>
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <meshBasicMaterial map={texture} />
          </mesh>
          <mesh position={[-4.5, 0, 0]}>
            <boxGeometry args={[1, 1, 0.1]} />
            <meshBasicMaterial />
          </mesh>
        </group>
        <group position={[0, 1, 0]}>
          <mesh position={[0.5, 2, 0]}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshBasicMaterial color={"#ddddff"} transparent opacity={0.3} />
          </mesh>
          <mesh ref={innerCube2} position={[0.5, 2, 0]}>
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <meshBasicMaterial map={texture} />
          </mesh>
          <mesh position={[0.5, 4, 0]}>
            <boxGeometry args={[1, 1, 0.1]} />
            <meshBasicMaterial />
          </mesh>
        </group>
        <group position={[1, 0, 0]}>
          <mesh position={[3, 0, 0]}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshBasicMaterial color={"#ddddff"} transparent opacity={0.3} />
          </mesh>
          <mesh ref={innerCube3} position={[3, 0, 0]}>
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <meshBasicMaterial map={texture} />
          </mesh>
          <mesh position={[5, 0, 0]}>
            <boxGeometry args={[1, 1, 0.1]} />
            <meshBasicMaterial />
          </mesh>
        </group>
        <group position={[0, -1, 0]}>
          <mesh position={[0.5, -2, 0]}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshBasicMaterial color={"#ddddff"} transparent opacity={0.3} />
          </mesh>
          <mesh ref={innerCube4} position={[0.5, -2, 0]}>
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <meshBasicMaterial map={texture} />
          </mesh>
          <mesh position={[0.5, -4, 0]}>
            <boxGeometry args={[1, 1, 0.1]} />
            <meshBasicMaterial />
          </mesh>
        </group>
        <group>
          <mesh position={[0.5, 0, 0]}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshBasicMaterial color={"#ddddff"} transparent opacity={0.3} />
          </mesh>
          <mesh ref={innerCube5} position={[0.5, 0, 0]}>
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <meshBasicMaterial map={texture} />
          </mesh>
          <mesh position={[0.5, 1.5, 0]}>
            <boxGeometry args={[1, 1, 0.1]} />
            <meshBasicMaterial />
          </mesh>
        </group>
      </group>
      <group>
        <Line
          points={[
            [0.5, 2.2, 0],
            [0.5, 0.8, 0],
          ]}
          lineWidth={5}
          color={"#034179"}
        />
        <Line
          points={[
            [1.3, 3, 0],
            [3.9, 0.8, 0],
          ]}
          lineWidth={5}
          color={"#034179"}
        />
        <Line
          points={[
            [-0.3, 3, 0],
            [-3, 0.8, 0],
          ]}
          lineWidth={5}
          color={"#034179"}
        />
        <Line
          points={[
            [-3, -0.8, 0],
            [-0.3, -3, 0],
          ]}
          lineWidth={5}
          color={"#034179"}
        />
        <Line
          points={[
            [4, -0.8, 0],
            [1.3, -3, 0],
          ]}
          lineWidth={5}
          color={"#034179"}
        />
        <Line
          points={[
            [0.5, -0.8, 0],
            [0.5, -2.2, 0],
          ]}
          lineWidth={5}
          color={"#034179"}
        />
        <Line
          points={[
            [-2.23, 0, 0],
            [-0.3, -0, 0],
          ]}
          lineWidth={5}
          color={"#034179"}
        />
        <Line
          points={[
            [1.3, 0, 0],
            [3.25, -0, 0],
          ]}
          lineWidth={5}
          color={"#034179"}
        />
      </group>
    </group>
  );
};

export default BlockChain;
