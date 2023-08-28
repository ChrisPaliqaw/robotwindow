import { useEffect, useRef, useState } from 'react'

import { Cylinder, Html } from '@react-three/drei'
import * as THREE from 'three'

/* Viam considers +X to be to the right, +Y to be forwards, and +Z to be up.
 * See https://docs.viam.com/services/frame-system/
 * This is different from the three.js, which
 * considers +X to be to the right, +Y to be up, and +Z to be forwards.
 * See https://threejs.org/docs/index.html#api/en/math/Vector3.
 */

function Transform() {
  const radius = 0.005
  const height = 0.3
  const radialSegments = 32

  const groupRef = useRef()

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
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* X axis */}
      <Cylinder
        args={[radius, radius, height, radialSegments]}
        position={[-height / 2.0, 0, 0]}
        rotation={[0.0, 0.0, Math.PI / -2.0]}
      >
        <meshStandardMaterial color="red" depthTest={true} />
      </Cylinder>
      {/* Y axis */}
      <Cylinder
        args={[radius, radius, height, radialSegments]}
        position={[0, 0, height / 2.0]}
        rotation-x={-Math.PI / 2.0}
      >
        <meshStandardMaterial color="green" depthTest={true} />
      </Cylinder>
      {/* Z axis */}
      <Cylinder
        args={[radius, radius, height, radialSegments]}
        position={[0, height / 2.0, 0]}
      >
        <meshStandardMaterial color="blue" depthTest={true} />
      </Cylinder>

      <Html position={[0, 0, 0]} wrapperClass="transform-label">
        {x},&nbsp;
        {y},&nbsp;
        {z}
      </Html>
    </group>
  )
}

export default Transform
