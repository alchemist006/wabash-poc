import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MainTemplate from '.';
import Header from '../../organisms/Header';

const meta: Meta<typeof MainTemplate> = {
  title: 'Templates/MainTemplate',
  component: MainTemplate,
};

export default meta;
type Story = StoryObj<typeof MainTemplate>;

export const Default: Story = {
  args: {
    header: <Header />,
    content: <div></div>,
    footer: <div></div>,
  },
};
