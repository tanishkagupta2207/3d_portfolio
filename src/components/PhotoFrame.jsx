/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.0 photoFrame.gltf 
Author: Johana-PS (https://sketchfab.com/Johana-PS)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/white-photo-frame-2b72fcdffd7c445fa68573b2a2c5b940
Title: White Photo Frame
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

function PhotoFrame(props) {
  const { nodes, materials } = useGLTF('/photoFrame.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials['mockofun-vintage-photo-editor']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.frame} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['frame-darker']} />
      </group>
      <group position={[0.1, -0.536, -0.375]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.007, 0.007, 0.007]}>
        <mesh geometry={nodes.Object_8.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.material_0} />
      </group>
    </group>
  )
}

useGLTF.preload('/photoFrame.gltf')

export default PhotoFrame;