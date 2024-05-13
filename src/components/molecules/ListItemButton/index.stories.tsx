import type { Meta, StoryObj } from '@storybook/react';
import ListItemButton from '.';
import { CATEGORIES } from '../../../utils/constants';

const meta: Meta<typeof ListItemButton> = {
  title: 'Molecules/ListItemButton',
  component: ListItemButton,
};

export default meta;
type Story = StoryObj<typeof ListItemButton>;

export const Default: Story = {
  args: { label: CATEGORIES, onClick: () => {} },
};
