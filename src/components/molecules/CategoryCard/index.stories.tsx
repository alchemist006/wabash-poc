import type { Meta, StoryObj } from '@storybook/react';
import CategoryCard from '.';

const meta: Meta<typeof CategoryCard> = {
  title: 'Molecules/CategoryCard',
  component: CategoryCard,
};

export default meta;
type Story = StoryObj<typeof CategoryCard>;

export const Default: Story = {
  args: {
    content: 'SUSP RIDE CONTROL',
  },
};
