import { Image } from '@react-three/drei'
import * as THREE from 'three'

import Transform from '../Transform/Transform'

function Robot({ position }) {
  // Dimensions: L 32 cm x W 22 cm x H 7.5 cm
  const length = 0.32
  const width = 0.22
  const height = 0.075
  const slightlyAboveSurface = 0.51
  return (
    <mesh position={[position.x, position.z, position.y]}>
      <boxGeometry args={[length, height, width]} />
      <meshStandardMaterial color="dimgray" wireframe={false} />
      <Transform name="viam_base" />
      <Image
        url="viam.png"
        rotation-x={Math.PI / -2}
        scale={0.1}
        // 0.51 is slight above surface to make sure it's visible
        position-y={height * slightlyAboveSurface}
      />
    </mesh>
  )
}

export default Robot
