import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlobalSection from '.';
import theme from '../../../theme';

const meta: Meta<typeof GlobalSection> = {
  title: 'Atoms/GlobalSection',
  component: GlobalSection,
};

export default meta;
type Story = StoryObj<typeof GlobalSection>;

export const Default: Story = {
  args: {
    sectionBgColor: theme.palette.backgroundElevation.light,
    sectionPadding: '2rem 0 2rem 0',
    children: <div>Children</div>,
  },
};
