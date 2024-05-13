import type { Meta, StoryObj } from '@storybook/react';
import OrderHeaderSection from '.';

const meta: Meta<typeof OrderHeaderSection> = {
  title: 'Molecules/OrderHeaderSection',
  component: OrderHeaderSection,
};

export default meta;
type Story = StoryObj<typeof OrderHeaderSection>;

export const Default: Story = {
  args: {
    orderNo: 100011326,
    conformationNo: 100367861,
    orderDate: 'April 05, 2024',
    total: 675,
    status: 'Confirmed',
  },
};

export const Primary: Story = {
  args: {
    orderNo: 100011326,
    conformationNo: 100367861,
    orderDate: 'April 05, 2024',
    total: 675,
    status: 'Invoice',
  },
};
