import { RoundedBox } from '@react-three/drei'

const Robot = () => {
  return (
    // Dimensions: L 32 cm x W 22 cm x H 7.5 cm
    <mesh>
      <boxGeometry args={[0.32, 0.075, 0.22]} />
      <meshStandardMaterial color="dimgray" />
    </mesh>
  )
}

export default Robot
