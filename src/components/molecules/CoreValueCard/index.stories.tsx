import { Meta, StoryFn } from '@storybook/react';
import CardMolecule, { ICardProps } from '.';
import React from 'react';
import MindIcon from '../../../../public/assets/icons/mind.svg';
import Recycle from '../../../../public/assets/icons/recycle.svg';

const meta: Meta<typeof CardMolecule> = {
  title: 'Molecules/CardMolecule',
  component: CardMolecule,
};
export default meta;

const Template: StoryFn<ICardProps> = (args) => <CardMolecule {...args} />;

export const Peace = Template.bind({});
Peace.args = {
  src: MindIcon,
  heading: 'PEACE OF MIND',
  title: 'On Time, Every Time',
};

export const Operation = Template.bind({});
Operation.args = {
  src: Recycle,
  heading: 'EFFICIENT OPERATIONS',
  title: 'Quickest turn times in the industry',
};
