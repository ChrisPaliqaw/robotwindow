import { Image } from '@react-three/drei'

import { useControls } from 'leva'


import Transform from '../Transform/Transform'

function Robot({ position }) {
  // Dimensions: L 32 cm x W 22 cm x H 7.5 cm
  const length = 0.32
  const width = 0.22
  const height = 0.075
  const slightlyAboveSurface = 0.51
  const transformName = "viam_base"

  const { visible, wireframe, tf } = useControls("Robot", {
    visible: true,
    wireframe: false,
    tf: false
  })

  return (
    <mesh position={[position.x, position.z, position.y]}>
      <boxGeometry args={[length, height, width]} />
      <meshStandardMaterial color="dimgray" wireframe={wireframe} visible={visible} />
      <Transform name={transformName} visible={tf} />
      <Image
        url="viam.png"
        rotation-x={Math.PI / -2}
        scale={0.1}
        // 0.51 is slight above surface to make sure it's visible
        position-y={height * slightlyAboveSurface}
        visible={visible}
      />
    </mesh>
  )
}

export default Robot
