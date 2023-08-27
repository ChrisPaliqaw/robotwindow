import { Canvas } from '@react-three/fiber'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import World from 'src/components/World/World'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <p>Robot Window</p>
      <>
        <Canvas
          camera={{
            fov: 60,
            position: [-1, 1, 1],
          }}
        >
          <World />
        </Canvas>
      </>
    </>
  )
}

export default HomePage
