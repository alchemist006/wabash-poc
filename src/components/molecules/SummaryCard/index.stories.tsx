import type { Meta, StoryObj } from '@storybook/react';
import SummaryCard from '.';

const meta: Meta<typeof SummaryCard> = {
  title: 'Molecules/SummaryCard',
  component: SummaryCard,
};

export default meta;
type Story = StoryObj<typeof SummaryCard>;

export const Default: Story = {
  args: {
    subtotal: 689,
    savings: 0,
  },
};
