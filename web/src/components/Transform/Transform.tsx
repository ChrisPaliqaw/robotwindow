import { useEffect, useRef, useState } from 'react'

import { Cylinder, Html } from '@react-three/drei'
import * as THREE from 'three'
import { useControls } from 'leva'

/* Viam considers +X to be to the right, +Y to be forwards, and +Z to be up.
 * See https://docs.viam.com/services/frame-system/
 * This is different from the three.js, which
 * considers +X to be to the right, +Y to be up, and +Z to be forwards.
 * See https://threejs.org/docs/index.html#api/en/math/Vector3.
 */

function Transform({ name, visible }) {
  const radius = 0.005
  const height = 0.3
  const radialSegments = 32

  const groupRef = useRef()

  const yAxisRef = useRef()

  const [x, setX] = useState()
  const [y, setY] = useState()
  const [z, setZ] = useState()

  useEffect(() => {
    if (groupRef.current) {
      console.log(groupRef.current.getWorldPosition(new THREE.Vector3()))
      const position = groupRef.current.getWorldPosition(new THREE.Vector3())
      setX(position.x)
      setY(position.y)
      setZ(position.z)
    }
  }, [groupRef.current])
  return (
    <group ref={groupRef} position={[0, 0, 0]} >
      {/* X axis */}
      <Cylinder
        args={[radius, radius, height, radialSegments]}
        position={[-height / 2.0, 0, 0]}
        rotation={[0.0, 0.0, Math.PI / -2.0]}
      >
        <meshStandardMaterial color="red" depthTest={true} visible={visible}/>
      </Cylinder>
      {/* Y axis */}
      <Cylinder
        ref={yAxisRef}
        args={[radius, radius, height, radialSegments]}
        position={[0, 0, height / 2.0]}
        rotation-x={-Math.PI / 2.0}
      >
        <meshStandardMaterial color="green" depthTest={true} visible={visible}/>
      </Cylinder>
      {/* Z axis */}
      <Cylinder
        args={[radius, radius, height, radialSegments]}
        position={[0, height / 2.0, 0]}
      >
        <meshStandardMaterial color="blue" depthTest={true} visible={visible}/>
      </Cylinder>

      <Html
        position={[0.0, 0.0, 0.0]}
        wrapperClass="transform-label"
        distanceFactor={undefined} // Don't scale the label with distance
        style={{
          opacity: !visible ? 0 : 1,
          transform: `scale(${!visible ? 0.5 : 1})`
        }}
      >
        {name}:&nbsp;
        {x},&nbsp;
        {y},&nbsp;
        {z}
      </Html>
    </group>
  )
}

export default Transform
