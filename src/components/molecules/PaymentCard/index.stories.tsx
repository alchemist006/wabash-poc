import type { Meta, StoryObj } from '@storybook/react';
import PaymentCard from '.';

const meta: Meta<typeof PaymentCard> = {
  title: 'Molecules/PaymentCard',
  component: PaymentCard,
};

export default meta;
type Story = StoryObj<typeof PaymentCard>;

export const Default: Story = {
  args: {
    numberData: [
      { label: 'subtotal', value: 675 },
      { label: 'savings', value: 0 },
      { label: 'shipping', value: 0 },
      { label: 'tax', value: 0 },
    ],
    stringData: { label: 'po_number', value: '4800155837' },
  },
};
