import { useRef } from 'react'

import { extend, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import Map from '../Map/Map'
import Robot from '../Robot/Robot'
import Transform from '../Transform/Transform'

extend({ OrbitControls })

const World = () => {
  const { camera, gl } = useThree()

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.25} />
      <Robot />
      <Map />
      <Transform />
    </>
  )
}

export default World
