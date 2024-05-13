import type { Meta, StoryObj } from '@storybook/react';
import ProductListCard from '.';
import Break from '../../../../public/Assets/Images/break.jpg';

const meta: Meta<typeof ProductListCard> = {
  title: 'Molecules/ProductListCard',
  component: ProductListCard,
};

export default meta;
type Story = StoryObj<typeof ProductListCard>;

export const Default: Story = {
  args: {
    image: Break,
    xref: true,
    CardHash: '#10 TF',
    CardNumber: 'KTGD4SCFE5678',
    CardName: 'DEXTER AXEL',
  },
};

export const Primary: Story = {
  args: {
    xref: false,
    CardHash: '#10 TF',
    CardNumber: 'KTGD4SCFE5678',
    CardName: 'DEXTER AXEL',
  },
};
