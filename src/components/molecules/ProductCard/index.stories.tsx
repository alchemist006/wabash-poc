import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from '.';
import { Box } from '@mui/material'; // Import Box component
import Break from '../../../../public/Assets/Images/break.jpg';
import React from 'react';
const meta: Meta<typeof ProductCard> = {
  title: 'Molecules/ProductCard',
  component: ProductCard,
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    productName: 'BRAKE DRUM CENTERFUSE',
    productNumber: '89996B',
    product: 'MOTOR WHEEL',
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: '250px' }}>
        <Story />
      </Box>
    ),
  ],
};

export const Primary: Story = {
  args: {
    productName: 'BRAKE DRUM CENTERFUSE',
    productNumber: '89996B',
    product: 'MOTOR WHEEL',
    image: Break,
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: '250px' }}>
        <Story />
      </Box>
    ),
  ],
};
