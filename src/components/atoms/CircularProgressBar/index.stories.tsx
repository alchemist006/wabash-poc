import type { Meta, StoryObj } from '@storybook/react';
import CircularProgressBar from '.';

const meta: Meta<typeof CircularProgressBar> = {
  title: 'Atoms/CircularProgressBar',
  component: CircularProgressBar,
};

export default meta;
type Story = StoryObj<typeof CircularProgressBar>;

export const Default: Story = {
  args: {},
};
