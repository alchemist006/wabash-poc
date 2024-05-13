import type { Meta, StoryObj } from '@storybook/react';
import LinkTabs from '.';

const meta: Meta<typeof LinkTabs> = {
  title: 'Molecules/LinkTabs',
  component: LinkTabs,
};

export default meta;
type Story = StoryObj<typeof LinkTabs>;

export const Default: Story = {
  args: {
    tabNames: ['PARTS', 'CATEGORIES', 'SUPPORT', 'ABOUT'],
    selectedValue: '',
  },
};
