import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

import Map from '../Map/Map'
import Robot from '../Robot/Robot'
import Transform from '../Transform/Transform'
import { button, useControls } from 'leva'
import Marker from '../Marker/Marker'

const World = () => {
  const { _ } = useControls({
    setFixedFrame: { options: ['odom', 'map', 'base_link'], value: 'odom' },
  })

  useControls('Navigation', {
    estimate2DLocation: button(() => {
      console.log('estimate2DLocation')
    }),
  })

  const { visible } = useControls('odom tf', {
    visible: false,
  })



  return (
    <>
      <OrbitControls enableDamping={true} makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.25} />
      <Robot position={new THREE.Vector3(0.1, 0, 0.075 * 0.5)} />
      <Transform name="odometry" visible={visible} />
      <Map />
      <Marker />
    </>
  )
}

export default World
