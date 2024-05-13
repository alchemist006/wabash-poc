import type { Meta, StoryObj } from '@storybook/react';
import CartCard from '.';

const meta: Meta<typeof CartCard> = {
  title: 'Molecules/CartCard',
  component: CartCard,
};

export default meta;
type Story = StoryObj<typeof CartCard>;

export const Default: Story = {
  args: {
    part_number: '#10 TF',
    manufacturer: 'KT359550X45768',
    total: 963,
    price: 567,
  },
};
