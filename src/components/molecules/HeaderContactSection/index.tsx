import React from 'react';
import GlobalSection from '../../atoms/GlobalSection';
import theme from '../../../theme';
import Typography from '../../atoms/Typography';
import { Box, styled } from '@mui/material';
import { HEADER_CONTACT_SECTION_TEXT } from '../../../utils/constants';

const MainContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

const HeaderContactSection = () => {
  return (
    <GlobalSection
      sectionBgColor={theme.palette.backgroundElevation.light}
      sectionBorderBottom={theme.palette.stroke.main}
      sectionPadding="0.32rem 0"
      sectionShadow={theme.shadows[1]}
    >
      <MainContainer>
        <Typography color={theme.palette.mediumEmphasis.main} variant={'body3'}>
          {HEADER_CONTACT_SECTION_TEXT}
        </Typography>
      </MainContainer>
    </GlobalSection>
  );
};

export default HeaderContactSection;
