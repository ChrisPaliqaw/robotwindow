import { Cylinder } from '@react-three/drei'

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
  return (
    <group>
      {/* X axis */}
      <Cylinder
        args={[radius, radius, height, radialSegments]}
        position={[-height / 2.0, 0, 0]}
        rotation={[0.0, 0.0, Math.PI / -2.0]}
      >
        <meshStandardMaterial color="red" />
      </Cylinder>
      {/* Y axis */}
      <Cylinder
        args={[radius, radius, height, radialSegments]}
        position={[0, 0, height / 2.0]}
        rotation-x={-Math.PI / 2.0}
      >
        <meshStandardMaterial color="green" />
      </Cylinder>
      {/* Z axis */}
      <Cylinder
        args={[radius, radius, height, radialSegments]}
        position={[0, height / 2.0, 0]}
      >
        <meshStandardMaterial color="blue" />
      </Cylinder>
    </group>
  )
}

export default Transform
