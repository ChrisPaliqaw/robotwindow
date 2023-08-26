import { render } from '@redwoodjs/testing/web'

import Transform from './Transform'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Transform', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Transform />)
    }).not.toThrow()
  })
})
