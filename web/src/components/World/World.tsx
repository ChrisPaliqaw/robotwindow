import { useRef } from 'react'

import { extend, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import Robot from '../Robot/Robot'

extend({ OrbitControls })

const World = () => {
  const { camera, gl } = useThree()

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} />
      <Robot />
    </>
  )
}

export default World
