/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Room from './components/Room'; 
import { DirectionalLight } from 'three';

function App() {
  return (
    <div style={{ height: "100vh", width:'100vw', backgroundColor:'#e1e1e1' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 10]} />
        {/* <DirectionalLight position={[3,4,5]} intensity={1}/> */}
        
        {/* The room and objects */}
        <Room />
        
        {/* Allows camera rotation */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
