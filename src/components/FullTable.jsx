/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import Table from './Table';
import Coffee from './Coffee';
import Laptop from './Laptop';
import Calendar from './Calendar';
import Lamp from './Lamp';
import Notebook from './Notebook';
import PenHolder from './PenHolder';
import Phone from './Phone';
import Speaker from './Speaker';
import Storage from './Storage';
import Tablet from './Tablet';

function FullTable() {

  return (
    <>
      <Table scale={10} position={[2,3.5,1]} />
      <Laptop position={[-0.5,4,1]} />
      <Notebook position={[3.9,4.11,1.3]} scale={1.3} />
      <Coffee position={[4.1,3.985,3]} />
      <PenHolder scale={0.5} position={[3.2,4.55,-1]} />
      <Phone scale={0.7} position={[2.3,0.5,-3]} rotation={[0,-Math.PI/2,0]} />
      <Lamp position={[4.2,4,-0.9]} scale={1.5} rotation={[0,Math.PI,0]} />
      <Tablet scale={6} position={[-3.5,3.988,0.6]} rotation={[0,Math.PI/16,0]}/>
      <Calendar scale={10} position={[-6.3,3.985,-1]} rotation={[0,Math.PI/8,0]}/>
      <Storage scale={10} position={[-3.5,3.99,2.2]}/>
      <Speaker scale={1.2} position={[-6.9,3.985,3.5]}/>
      </>
  );
}

export default FullTable;
