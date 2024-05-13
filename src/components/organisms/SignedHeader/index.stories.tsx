import type { Meta, StoryObj } from '@storybook/react';
import SignedHeader from '.';

const meta: Meta<typeof SignedHeader> = {
  title: 'Organisms/SignedHeader',
  component: SignedHeader,
};

export default meta;
type Story = StoryObj<typeof SignedHeader>;

export const Default: Story = {
  args: {},
};
