import React from 'react';
import IconComponent, { IconProps } from '.';
import { Meta, StoryFn } from '@storybook/react';
import DownArrow from '../../../../public/assets/icons/fb-dark.svg';

const meta: Meta = {
  title: 'atoms/Icon',
  component: IconComponent,
};
export default meta;

const Template: StoryFn<IconProps> = (args) => <IconComponent {...args} />;

export const Arrow = Template.bind({});
Arrow.args = {
  src: DownArrow,
  iconAlt: 'list-icon',
  height: '1.5rem',
  width: '1.5rem',
};
