/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.0 certificate.gltf 
Author: backprimitive (https://sketchfab.com/backprimitive)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ra-certificate2-e79945a7df3042dcb5573aa607444859
Title: RA_certificate2
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

function Certificate(props) {
  const { nodes, materials } = useGLTF('/certificate.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -8.822, 0.483]}>
        <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.CARA_A} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.negro} />
      </group>
      <group position={[0, -8.822, -0.901]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh geometry={nodes.Object_12.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.CARA_B} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.negro} />
      </group>
      <mesh geometry={nodes.Object_18.geometry} material={materials.GLASS} position={[0, -5.322, 0]} />
      <mesh geometry={nodes.Object_20.geometry} material={materials.GOLD} position={[0, 0.645, 0]} />
    </group>
  )
}

useGLTF.preload('/certificate.gltf')

export default Certificate;