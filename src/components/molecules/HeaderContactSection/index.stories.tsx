import type { Meta, StoryObj } from '@storybook/react';
import HeaderContactSection from '.';

const meta: Meta<typeof HeaderContactSection> = {
  title: 'Molecules/HeaderContactSection',
  component: HeaderContactSection,
};

export default meta;
type Story = StoryObj<typeof HeaderContactSection>;

export const Default: Story = {
  args: {},
};
