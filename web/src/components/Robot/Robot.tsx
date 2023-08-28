import * as THREE from 'three'

import Transform from '../Transform/Transform'

function Robot({ position }) {
  console.log(position)
  return (
    // Dimensions: L 32 cm x W 22 cm x H 7.5 cm
    <mesh
      position-x={position.x}
      position-y={position.z}
      position-z={position.y}
    >
      <boxGeometry args={[0.32, 0.075, 0.22]} />
      <meshStandardMaterial color="dimgray" wireframe={false} />
      <Transform />
    </mesh>
  )
}

export default Robot
