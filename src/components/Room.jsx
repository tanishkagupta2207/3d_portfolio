/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import Bookshelf from './Bookshelf';
import BeanBag from './BeanBag';
import Certificate from './Certificate';
import Chair from './Chair';
import Clock from './Clock';
import Degree from './Degree';
import Light from './Light';
import PhotoFrame from './PhotoFrame';
import Plant from './Plant';
import Shelf from './Shelf';
import TrashBin from './TrashBin';
import Door from './Door';
import Switch from './Switch';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import floorTexture from '../textures/floor.jpeg';
import sideWallTexture from '../textures/wall.avif';
import ceilingTexture from '../textures/ceiling.jpeg'

function Room() {
  const floor = useLoader(TextureLoader, floorTexture);
  const wall = useLoader(TextureLoader, sideWallTexture);
  const ceiling = useLoader(TextureLoader, ceilingTexture);

  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.85, 0]}>
        <boxGeometry args={[25, 40, 0.1]} />
        <meshStandardMaterial map={floor} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 17, 0]}>
        <boxGeometry args={[25, 40, 0.1]} />
        <meshStandardMaterial map={ceiling} />
      </mesh>

      <mesh position={[0, 8.15, 20]}>
        <boxGeometry args={[25, 18, 0.1]} />
        <meshStandardMaterial map={wall} />
      </mesh>
      <mesh position={[0, 8.15, -20]}>
        <boxGeometry args={[25, 18, 0.1]} />
        <meshStandardMaterial map={wall} />
      </mesh>

      <mesh position={[-12.5, 8.15, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[40, 18, 0.1]} />
        <meshStandardMaterial map={wall} />
      </mesh>
      <mesh position={[12.5, 8.15, 0]} rotation={[0, -Math.PI / 2 , 0]}>
        <boxGeometry args={[40, 18, 0.1]} />
        <meshStandardMaterial map={wall} />
      </mesh>
      <Door scale={5} rotation={[0,-Math.PI/2,0]}  position={[0,-0.9,-19.7]}/>
      <Light scale={4} position={[0,16,0]} />
      <Switch scale={5}  rotation={[0,-Math.PI/2,0]}  position={[-7,6,-19.9]}/>
      <Chair scale={0.3} position={[0,5.1,9]} rotation={[0,Math.PI,0]} />
      <Bookshelf scale={3} position={[11,-0.8,-5]} rotation={[0,-Math.PI/2,0]} />
      <Shelf scale={3} position={[-11.6,-0.8,-14]} rotation={[0,Math.PI/2,0]}/>
      <Degree scale={250} position={[-12.2,6.83,-11.5]} rotation={[0,Math.PI/2,0]}/>
      <BeanBag scale={4} position={[-5,-0.9,-15]} rotation={[0,Math.PI/4,0]}/>
      <BeanBag scale={4} position={[2.5,-0.9,-15]} rotation={[0,-Math.PI/4,0]}/>
      <Plant scale={6} position={[9.8,2.25,-12]}/>
      <Certificate scale={0.1} position={[-12.4,10,-8]} rotation={[0,Math.PI/2,0]} />
      <PhotoFrame scale={2.5} position={[-12.3,10,0]}/>
      <Clock scale={1.3} position={[-12.34,12,-4]} rotation={[0,Math.PI,0]} />
      <TrashBin scale={5} position={[11,0.7,-0.2]}/>
      </>
  );
}

export default Room;
