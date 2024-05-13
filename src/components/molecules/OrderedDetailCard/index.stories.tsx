import { Meta, StoryFn } from '@storybook/react';
import OrderDetailCard, { OrderDetailProps } from '.';
import React from 'react';

const meta: Meta<typeof OrderDetailCard> = {
  title: 'Molecules/OrderDetailCard',
  component: OrderDetailCard,
};
export default meta;

const Template: StoryFn<OrderDetailProps> = (args) => (
  <OrderDetailCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  part: 'HEAVY DUTY RUBBER',
  partNumber: '119042145',
  qty: 50,
  unitPrice: 13.5,
  total: 675,
  showXref: true,
  columns: ['PART', 'PART NUMBER', 'QTY', 'UNIT PRICE', 'TOTAL'],
};

export const Primary = Template.bind({});
Primary.args = {
  part: 'HEAVY DUTY RUBBER',
  partNumber: '119042145',
  qty: 50,
  unitPrice: 13.5,
  total: 675,
  showXref: false,
  columns: ['PART', 'PART NUMBER', 'QTY', 'UNIT PRICE', 'TOTAL'],
};
