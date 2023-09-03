import { Cone, PivotControls } from '@react-three/drei'
import * as THREE from 'three'
import { useControls } from 'leva'

const Marker = () => {
  const dir = new THREE.Vector3(1, 0, 0)
  const origin = new THREE.Vector3(0, 0, 0)
  const length = 0.3
  const headLength = 0.2 * length
  const headWidth = 0.2 * headLength

  const { position, rotation, color} = useControls("Marker",{
      position: {
        value: {x: 1, z: 1},
        // joystick: 'invertX'
      },
      rotation: {
        value: 0,
        min: 0,
        max: 2 * Math.PI,
      },
      color: "#ff0000",
})
  return (
      <Cone
        args={[0.05, 0.1]}
        position={[position.x, 0.05, position.z]}
        rotation={[0, rotation, 0]}
        material-color={color}
      >
        <arrowHelper args={[dir, origin, length, color, headLength, headWidth]} />
      </Cone>
    // <mesh >
    //   <boxGeometry args={[0.5, 0.5, 0.5]} />
    //   <meshBasicMaterial color="yellow" />

    // </mesh>
  )
}

export default Marker
