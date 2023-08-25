import { render } from '@redwoodjs/testing/web'

import World from './World'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('World', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<World />)
    }).not.toThrow()
  })
})
