import React from 'react';
import GlobalSection from '../../atoms/GlobalSection';
import theme from '../../../theme';
import { Box, styled } from '@mui/material';
import IconComponent from '../../atoms/Icon';
import WabashLogo from '../../../../public/assets/images/wabash-logo.png';
import Button from '../../atoms/Button';
import { HOME_TABS, SIGN_IN } from '../../../utils/constants';
import HeaderContactSection from '../../molecules/HeaderContactSection';
import LinkTabs from '../../molecules/Tabs';
import GlobalSearch from '../GlobalSearchBar';
import { useLocation, useNavigate } from 'react-router-dom';

const MainContainer = styled(Box)({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: '17% 68% 15%',
  alignItems: 'center',
  '@media (max-width: 1200px)': {
    gridTemplateColumns: '15% 1fr auto',
  },
});

const StyledDiv = styled('div')({
  margin: '0rem',
  cursor: 'pointer',
});

const MainWrapper = styled('div')({
  width: '100%',
  position: 'sticky',
  top: '0px',
  zIndex: 9999,
});

const TabContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '1rem 0',
});

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleTabClick = (value: string) => {
    navigate(`/${value.toLowerCase()}`);
  };
  const handleLogo = () => {
    navigate('/');
  };
  return (
    <MainWrapper>
      <GlobalSection
        sectionBorderBottom={`1px solid ${theme.palette.stroke.light}`}
        containerWidth="90%"
      >
        <MainContainer>
          <StyledDiv onClick={handleLogo}>
            <IconComponent
              src={WabashLogo}
              iconAlt={'wabash-logo'}
              width="100%"
            />
          </StyledDiv>
          <StyledDiv>
            <div style={{ width: '100%', margin: '1.5rem 1.5rem' }}>
              <GlobalSearch />
            </div>
          </StyledDiv>
          <StyledDiv
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <Button
              labelColor={theme.palette.white.main}
              style={{ padding: '0.75rem 2rem' }}
              backgroundColor={theme.palette.primary.main}
              hoverbackgroundColor={theme.palette.primary.light}
              hoverColor={theme.palette.white.main}
              labelVariant={'subtitle3'}
              variant="contained"
            >
              {SIGN_IN}
            </Button>
          </StyledDiv>
        </MainContainer>
      </GlobalSection>
      <GlobalSection
        sectionBorderBottom={`1px solid ${theme.palette.stroke.light}`}
        containerWidth="94%"
      >
        <TabContainer>
          <LinkTabs
            tabNames={HOME_TABS}
            onClick={handleTabClick}
            selectedValue={location.pathname.substring(1)}
          />
        </TabContainer>
      </GlobalSection>
      <HeaderContactSection />
    </MainWrapper>
  );
};

export default Header;
