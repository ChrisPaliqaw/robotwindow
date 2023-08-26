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

import Transform from './Transform'

const meta: Meta<typeof Transform> = {
  component: Transform,
}

export default meta

type Story = StoryObj<typeof Transform>

export const Primary: Story = {}
