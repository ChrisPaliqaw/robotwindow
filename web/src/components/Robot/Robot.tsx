const Robot = () => {
  return (
    <>
      <mesh position={[0, 0.25, 0]}>
        <boxBufferGeometry args={[1, 0.5, 1]} />
        <meshStandardMaterial color="dimgray" />
      </mesh>
    </>
  )
}

export default Robot
