import type { Meta, StoryObj } from '@storybook/react';
import OrderedByCard from '.';

const meta: Meta<typeof OrderedByCard> = {
  title: 'Molecules/OrderedByCard',
  component: OrderedByCard,
};

export default meta;
type Story = StoryObj<typeof OrderedByCard>;

export const Default: Story = {
  args: {
    part_name: 'Manager WABASH NATIONAL CROP',
    accountNo: 915930,

    salesRepId: 'Mike Braxton',
    invoice: false,
  },
};

export const Primary: Story = {
  args: {
    part_name: 'Manager WABASH NATIONAL CROP',
    accountNo: 915930,
    po: '235690076878',
    orderNo: 100355646345,
    salesRepId: 'Mike Braxton',
    invoice: true,
  },
};
