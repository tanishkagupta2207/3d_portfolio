/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import Table from './Table';
import Coffee from './Coffee';
import Laptop from './Laptop';
import Bookshelf from './Bookshelf';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import floorTexture from '../textures/floor.jpeg';
import wallTextureBack from '../textures/backWall.jpeg';
import sideWallTexture from '../textures/wall.jpeg';

function Room() {
  const floor = useLoader(TextureLoader, floorTexture);
  const wallBack = useLoader(TextureLoader, wallTextureBack);
  const sideWall = useLoader(TextureLoader, sideWallTexture);

  return (
    <>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <boxGeometry args={[15, 15, 0.1]} />
        <meshStandardMaterial map={floor} />
      </mesh>

      {/* Walls */}
      <mesh position={[0, 4, -7.5]}>
        <boxGeometry args={[15, 8, 0.1]} />
        <meshStandardMaterial map={wallBack} />
      </mesh>
      <mesh position={[-7.5, 4, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[15, 8, 0.1]} />
        <meshStandardMaterial map={sideWall} />
      </mesh>
      <mesh position={[7.5, 4, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[15, 8, 0.1]} />
        <meshStandardMaterial map={sideWall} />
      </mesh>
      <Bookshelf position={[2,6,-2]}/>
      <Laptop position={[-3,3.9,0.5]}/>
      <Coffee position={[1,3.9,3]} />
      <Table scale={8} position={[2,3.5,1]} />
    </>
  );
}

export default Room;
