import { OrbitControls } from '@react-three/drei'

import Map from '../Map/Map'
import Robot from '../Robot/Robot'
import Transform from '../Transform/Transform'

const World = () => {
  return (
    <>
      <OrbitControls enableDamping={true} makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.25} />
      <Robot />
      <Map />
      <Transform />
    </>
  )
}

export default World
