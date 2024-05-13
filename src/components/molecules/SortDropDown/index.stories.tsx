import { Meta, StoryFn } from '@storybook/react';
import DropDown, { DropDownProps } from '.';
import React from 'react';
import { SORT_OPTIONS } from '../../../utils/constants';

const meta: Meta<typeof DropDown> = {
  title: 'Molecules/DropDown',
  component: DropDown,
};
export default meta;

const Template: StoryFn<DropDownProps> = (args) => <DropDown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 'Product Name A-Z',
  options: SORT_OPTIONS,
};
