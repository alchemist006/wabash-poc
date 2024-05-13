import type { Meta, StoryObj } from '@storybook/react';
import ShippingCard from '.';

const meta: Meta<typeof ShippingCard> = {
  title: 'Organisms/ShippingCard',
  component: ShippingCard,
};

export default meta;
type Story = StoryObj<typeof ShippingCard>;

export const Default: Story = {
  args: {
    address: '3244 KOSSUTH ST LAFAYETTE,47905 N/A',
    shippingMethod: 'DDS',
    shippingFrom: 'Grand Rapids',
    freightAmt: 19.9,
  },
};
