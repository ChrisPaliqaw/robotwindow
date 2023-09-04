import { Canvas } from '@react-three/fiber'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Leva, useControls } from 'leva'
import { Perf } from 'r3f-perf'

import World from 'src/components/World/World'

const HomePage = () => {
  const { debugThree } = useControls({
    debugThree: false,
  })
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <p>Robot Window</p>
      <>
        <Leva collapsed={false} />
        <Canvas
          camera={{
            fov: 60,
            position: [-1, 1, 1],
          }}
        >
          {debugThree ? <Perf position="top-left" /> : null}

          <World />
        </Canvas>
      </>
    </>
  )
}

export default HomePage
