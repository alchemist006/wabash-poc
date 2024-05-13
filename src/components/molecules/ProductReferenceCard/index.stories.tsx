import { Meta, StoryObj } from '@storybook/react';
import ProductReferencesCard from '.';
import CustomChip from '../../atoms/Chip';
import CachedIcon from '@mui/icons-material/Cached';
import React from 'react';

const meta: Meta<typeof ProductReferencesCard> = {
  title: 'molecules/ProductReferencesCard',
  component: ProductReferencesCard,
};

export default meta;
type Story = StoryObj<typeof ProductReferencesCard>;
export const Default: Story = {
  args: {
    icon: <CustomChip label={'XREF'} />,

    heading: 'Cross References',
    data: [
      { heading: 'Manufacturer Part', description: '-', id: 1 },
      { heading: 'Customer Part', description: '-', id: 2 },
    ],
  },
};

export const Primary: Story = {
  args: {
    icon: <CachedIcon sx={{ color: 'blue' }} />,
    heading: 'Related Parts',
    data: [],
  },
};
