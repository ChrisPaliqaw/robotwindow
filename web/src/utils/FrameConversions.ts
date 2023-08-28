import { Vector3 } from 'three'

/* Viam considers +X to be to the right, +Y to be forwards, and +Z to be up.
 * See https://docs.viam.com/services/frame-system/
 * This is different from the three.js, which
 * considers +X to be to the right, +Y to be up, and +Z to be forwards.
 * See https://threejs.org/docs/index.html#api/en/math/Vector3.
 */

function ThreeToViam(threePosition: Vector3): Vector3 {
  return new Vector3(threePosition.x, threePosition.z, threePosition.y)
}

function ViamToThree(viamPosition: Vector3): Vector3 {
  return ThreeToViam(viamPosition)
}

export { ThreeToViam, ViamToThree }
