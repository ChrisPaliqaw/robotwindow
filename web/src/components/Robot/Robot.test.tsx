import { render } from '@redwoodjs/testing/web'

import Robot from './Robot'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Robot', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Robot />)
    }).not.toThrow()
  })
})
