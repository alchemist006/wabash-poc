import { Meta, StoryFn } from '@storybook/react';
import CustomFooter from '.';
import React from 'react';

const meta: Meta<typeof CustomFooter> = {
  title: 'Molecules/CustomFooter',
  component: CustomFooter,
};
export default meta;

const Template: StoryFn = (args) => <CustomFooter {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
