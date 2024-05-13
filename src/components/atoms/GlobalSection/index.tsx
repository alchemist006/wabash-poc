import React from 'react';
import { styled } from '@mui/material';

interface ISectionProps {
  sectionBgColor: string;
  sectionBorderBottom: string;
  sectionPadding: string;
  sectionShadow: string;
}

interface IContainerProps {
  containerWidth: string;
}

interface GlobalSectionProps {
  sectionBgColor?: string;
  sectionBorderBottom?: string;
  containerWidth?: string;
  sectionPadding?: string;
  children: React.ReactNode;
  sectionShadow?: string;
}

const Section = styled('div')(
  ({
    sectionBgColor,
    sectionBorderBottom,
    sectionPadding,
    sectionShadow,
  }: ISectionProps) => ({
    maxWidth: '100%',
    backgroundColor: sectionBgColor,
    borderBottom: sectionBorderBottom,
    padding: sectionPadding,
    boxShadow: sectionShadow,
  }),
);

const Container = styled('div')(({ containerWidth }: IContainerProps) => ({
  width: containerWidth,
  maxWidth: containerWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
}));

const GlobalSection: React.FC<GlobalSectionProps> = ({
  sectionBgColor = '#fff',
  sectionBorderBottom = 'none',
  containerWidth = '90%',
  sectionPadding = '',
  children,
  sectionShadow = 'none',
}) => {
  return (
    <Section
      sectionShadow={sectionShadow}
      sectionBgColor={sectionBgColor}
      sectionBorderBottom={sectionBorderBottom}
      sectionPadding={sectionPadding}
    >
      <Container containerWidth={containerWidth}>{children}</Container>
    </Section>
  );
};

export default GlobalSection;
