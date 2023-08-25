// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import World from './World'

const meta: Meta<typeof World> = {
  component: World,
}

export default meta

type Story = StoryObj<typeof World>

export const Primary: Story = {}
