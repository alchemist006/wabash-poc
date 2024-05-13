import React from 'react';
import GlobalSection from '../../atoms/GlobalSection';
import theme from '../../../theme';
import { Avatar, Box, Badge, styled } from '@mui/material';
import IconComponent from '../../atoms/Icon';
import WabashLogo from '../../../../public/assets/images/wabash-logo.png';
import LinkTabs from '../../molecules/Tabs';
import GlobalSearch from '../GlobalSearchBar';
import { useLocation, useNavigate } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Typography from '../../atoms/Typography';
import { HOME_TABS } from '../../../utils/constants';
interface ISignedHeaderProps {
  productLength: number;
}

const StyledMainContainer = styled(Box)({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: '17% 68% 15%',
  alignItems: 'center',
  '@media (max-width: 1200px)': {
    gridTemplateColumns: '15% 1fr auto',
  },
});
const StyledMainWrapper = styled('div')({
  width: '100%',
  position: 'sticky',
  top: '0px',
  zIndex: 9999,
});

const StyledTabContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '1rem 0',
});

const StyledPointerWrapper = styled('div')({
  margin: '0rem',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '1.5rem',
  alignItems: 'center',
});
const StyledBadge = styled(Badge)({
  '& .MuiBadge-badge': {
    color: theme.palette.accent.yellow,
    backgroundColor: theme.palette.accent.yellow,
    padding: '7px',
    borderRadius: '6px',
  },
});

const SignedHeader = ({ productLength }: ISignedHeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogo = () => {
    navigate('/');
  };
  const handleTabClick = (value: string) => {
    navigate(`/${value.toLowerCase()}`);
  };
  const handleBadgeClick = () => {
    navigate('/cart');
  };
  return (
    <StyledMainWrapper>
      <GlobalSection
        sectionBorderBottom={`1px solid ${theme.palette.stroke.light}`}
        containerWidth="90%"
      >
        <StyledMainContainer>
          <StyledPointerWrapper onClick={handleLogo}>
            <IconComponent
              src={WabashLogo}
              iconAlt={'wabash-logo'}
              width="100%"
            />
          </StyledPointerWrapper>
          <StyledPointerWrapper>
            <div style={{ width: '100%', margin: '1.5rem 1.5rem' }}>
              <GlobalSearch />
            </div>
          </StyledPointerWrapper>
          <StyledPointerWrapper>
            {productLength > 0 ? (
              <StyledBadge
                badgeContent={''}
                variant="dot"
                onClick={handleBadgeClick}
              >
                <ShoppingCartOutlinedIcon
                  data-testid="shopping-cart-icon"
                  sx={{ color: theme.palette.primary.main }}
                />
              </StyledBadge>
            ) : (
              <ShoppingCartOutlinedIcon
                sx={{ color: theme.palette.primary.main }}
              />
            )}
            <Avatar
              sx={{
                bgcolor: theme.palette.stroke.light,
                border: `1px solid ${theme.palette.primary.main}`,
              }}
            >
              <Typography variant="h6" color={theme.palette.primary.main}>
                A
              </Typography>
            </Avatar>
          </StyledPointerWrapper>
        </StyledMainContainer>
      </GlobalSection>
      <GlobalSection
        sectionBorderBottom={`1px solid ${theme.palette.stroke.light}`}
        containerWidth="94%"
      >
        <StyledTabContainer>
          <LinkTabs
            tabNames={HOME_TABS}
            onClick={handleTabClick}
            selectedValue={location.pathname.substring(1)}
          />
        </StyledTabContainer>
      </GlobalSection>
    </StyledMainWrapper>
  );
};

export default SignedHeader;
