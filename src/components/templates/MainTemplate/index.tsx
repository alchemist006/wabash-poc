import { Stack, styled } from '@mui/material';
import React from 'react';

interface MainTemplateProps {
  footer: React.ReactNode;
  content: React.ReactNode;
  header: React.ReactNode;
}
const MainContainer = styled(Stack)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const MainTemplate = ({ footer, content, header }: MainTemplateProps) => {
  return (
    <MainContainer data-testid="main-template">
      {header}
      {content}
      {footer}
    </MainContainer>
  );
};

export default MainTemplate;
