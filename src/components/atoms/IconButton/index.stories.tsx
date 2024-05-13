import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import IconButton from '.';
import TuneIcon from '@mui/icons-material/Tune';

const meta: Meta<typeof IconButton> = {
  title: 'atoms/IconButton',
  component: IconButton,
  argTypes: {
    onClick: { action: 'Button clicked' },
  },
};

export default meta;

type story = StoryObj<typeof IconButton>;

export const Default: story = {
  args: {
    icon: <TuneIcon color="inherit" />,
    sx: { width: '40px', padding: '0px' },
  },
};
