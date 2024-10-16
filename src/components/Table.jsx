/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.0 table.gltf 
Author: YouniqueĪdeaStudio (https://sketchfab.com/sinnervoncrawsz)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/concrete-table-desk-81cdb398e2a64f52bfafec406195e437
Title: Concrete table, desk
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

function Table(props) {
  const { nodes, materials } = useGLTF('/table.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.962}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.foot_Material002_0.geometry} material={materials['Material.002']} />
            <mesh geometry={nodes.foot_Material002_0_1.geometry} material={materials['Material.002']} />
            <mesh geometry={nodes.foot_Material002_0_2.geometry} material={materials['Material.002']} />
            <mesh geometry={nodes.foot_Material002_0_3.geometry} material={materials['Material.002']} />
            <mesh geometry={nodes.foot_Material002_0_4.geometry} material={materials['Material.002']} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.rebar_Material005_0.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.rebar_Material005_0_1.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.rebar_Material005_0_2.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.rebar_Material005_0_3.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.rebar_Material005_0_4.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.rebar_Material005_0_5.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.rebar_Material005_0_6.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.rebar_Material005_0_7.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.rebar_Material005_0_8.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.rebar_Material005_0_9.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.rebar_Material005_0_10.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.rebar_Material005_0_11.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.rebar_Material005_0_12.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.rebar_Material005_0_13.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.rebar_Material005_0_14.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.rebar_Material005_0_15.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.rebar_Material005_0_16.geometry} material={materials['Material.005']} />
          </group>
          <mesh geometry={nodes.beton_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.plate_Material001_0.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.resin_Material004_0.geometry} material={materials['Material.004']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.rubber_Material_0.geometry} material={materials.Material} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.beton_2_Material006_0.geometry} material={materials['Material.006']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/table.gltf')

export default Table;
