import * as Three from 'three'

import { ThreeToViam, ViamToThree } from './FrameConversions'

function add(x: number, y: number): number {
  if (arguments.length < 2) {
    throw new Error('add requires 2 arguments')
  }
  return x + y
}

describe('add()', () => {
  it('adds two numbers', () => {
    expect(add(1, 1)).toEqual(2)
  })

  it('throws an error for too few arguments', () => {
    expect(() => add(1)).toThrow('add requires 2 arguments')
  })
})

describe('frame conversions', () => {
  const viam = new Three.Vector3(1, 2, 3)
  const three = new Three.Vector3(1, 3, 2)
  it('converts from three to viam', () => {
    expect(ThreeToViam(three)).toEqual(viam)
  })

  it('converts from viam to three', () => {
    expect(ViamToThree(viam)).toEqual(three)
  })
})
