import { StoryFn, Meta } from '@storybook/react';
import Image from '.';
import Brake from '../../../../public/Assets/Images/break.jpg';
import React from 'react';

export default {
  title: 'Atoms/Image',
  component: Image,
} as Meta<typeof Image>;

const Template: StoryFn<typeof Image> = (args) => <Image {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  src: Brake,
  width: '120px',
  height: '120px',
};
