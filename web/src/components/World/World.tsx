import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

import Map from '../Map/Map'
import Robot from '../Robot/Robot'
import Transform from '../Transform/Transform'
import { useControls } from 'leva'

const World = () => {
  const { visible } = useControls("odom tf", {
    visible: false,
  })


  return (
    <>
      <OrbitControls enableDamping={true} makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.25} />
      <Robot position={new THREE.Vector3(0.1, 0.2, 0)} />
      <Transform name="odometry" visible={visible}/>
      <Map />
    </>
  )
}

export default World
