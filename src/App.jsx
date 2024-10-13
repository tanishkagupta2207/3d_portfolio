/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, {Suspense, lazy} from 'react';
import { BakeShadows } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useProgress, Html, OrbitControls } from '@react-three/drei';
import FullTable from './components/FullTable';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib';
import Room from './components/Room';
// const Room = lazy(() => import('./components/Room'));

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ fontSize: '2rem', color: 'black' }}>{progress.toFixed(2)}% loading</div>
    </Html>
  );
}

function App() {

  RectAreaLightUniformsLib.init();
  return (
    <div style={{ height: "100vh", width:'100vw' }}>

      <Canvas camera={{ position: [0, 10, 9] }} shadows >
        <BakeShadows />
        <ambientLight intensity={1} />
        <pointLight position={[-5, 5, -11]} intensity={35} />
        <pointLight position={[2.5, 5, -11]} intensity={35} />
        <pointLight position={[-11,12,-4]} intensity={4}/>
        <rectAreaLight
          intensity={5}           
          width={10}
          height={2}
          color={"#ffffff"}
          position={[0, 14, 0]}
          rotation-x={-Math.PI / 2}
        />
        {/* <Suspense fallback={<Loader />}> */}
          <FullTable />
          {/* </Suspense> */}
        <Room />
        <OrbitControls panSpeed ={2} />
      </Canvas>
    </div>
  );
}

export default App;
