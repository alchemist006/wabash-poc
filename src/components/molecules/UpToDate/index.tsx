import React from 'react';
import GlobalSection from '../../atoms/GlobalSection';
import { Box } from '@mui/material';
import Typography from '../../atoms/Typography';
import Button from '../../atoms/Button';
import styled from '@emotion/styled';
import InputField from '../../atoms/InputField';
import theme from '../../../theme';
import {
  BUTTON_LABEL,
  UPDATE_BODY,
  UPDATE_HEADER,
  UPDATE_PLACHOLDER,
} from '../../../utils/constants';

export interface IUptoDateProps {
  handleClick?: () => void;
}

const StyledContainer = styled(Box)({
  display: 'flex',
  gap: '40px',
  flexDirection: 'column',
  width: '55%',
});

const TextWrapper = styled(Box)({
  display: 'flex',
  gap: '16px',
  flexDirection: 'column',
});

const InputFieldWrapper = styled(Box)({
  display: 'flex',
  gap: '25px',
});
const OuterContainer = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
});
const StyledButton = styled(Button)({
  width: '122px',
  height: '45px',
  padding: '12px 32px',
});
const UptoDateSection = (prop: IUptoDateProps) => {
  return (
    <GlobalSection
      sectionBgColor="rgb(241, 245, 249);"
      sectionPadding="6.25rem 0"
      containerWidth="80vw"
    >
      <OuterContainer>
        <StyledContainer data-testid="uptodate-section">
          <TextWrapper>
            <Typography variant="body3" color={theme.palette.highEmphasis.main}>
              {UPDATE_HEADER}
            </Typography>
            <Typography variant="body4" color={theme.palette.highEmphasis.main}>
              {UPDATE_BODY}
            </Typography>
          </TextWrapper>
          <InputFieldWrapper>
            <InputField placeholder={UPDATE_PLACHOLDER} fullWidth />
            <StyledButton
              variant="contained"
              labelColor={theme.palette.white.main}
              backgroundColor={theme.palette.primary.main}
              hoverbackgroundColor={theme.palette.primary.light}
              labelVariant="subtitle3"
              onClick={prop.handleClick}
            >
              {BUTTON_LABEL}
            </StyledButton>
          </InputFieldWrapper>
        </StyledContainer>
      </OuterContainer>
    </GlobalSection>
  );
};
export default UptoDateSection;
