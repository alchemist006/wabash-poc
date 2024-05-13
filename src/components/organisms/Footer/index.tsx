import { Box, styled, Divider } from '@mui/material';
import React from 'react';
import logo from '../../../../public/assets/images/wabash-logo-white.png';
import Icon from '../../atoms/Icon';
import Image from '../../atoms/Image';
import Typography from '../../atoms/Typography';
import FacebookIcon from '../../../../public/assets/icons/fb-white.svg';
import YouTubeIcon from '../../../../public/assets/icons/yt-white.svg';
import InstagramIcon from '../../../../public/assets/icons/ing-white.svg';
import LinkedInIcon from '../../../../public/assets/icons/in-whit.svg';
import theme from '../../../theme';

const CustomFooter = () => {
  const socialIcons = [
    {
      defaultIcon: FacebookIcon,
      id: 1,
    },
    {
      defaultIcon: YouTubeIcon,
      id: 2,
    },
    {
      defaultIcon: InstagramIcon,
      id: 3,
    },
    {
      defaultIcon: LinkedInIcon,
      id: 4,
    },
  ];

  const FooterContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxHeight: '100vh',
    background: theme.palette.primary.light,
  });

  const ItemWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '30px 85px 90px 100px',
    flexWrap: 'wrap',
  });

  const DownWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '30px 90px 30px 90px',
    flexWrap: 'wrap',
  });
  const SocialIconWrapper = styled(Box)({
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
  });

  const TextWrapper = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    '@media(max-width:643px)': {
      gap: '15px',
      flexWrap: 'wrap',
    },
  });

  const IconOuterBox = styled(Box)({
    position: 'relative',
    cursor: 'pointer',
    borderRadius: '50%',
  });

  const IconInnerBox = styled(Box)({
    width: '24px',
    height: '24px',
    top: '-7px',
    bottom: 0,
    left: '-8px',
    position: 'absolute',
    zIndex: 1,
    '&:hover': {
      background: 'rgba(2, 19, 97, 0.8)',
    },
    borderRadius: '100%',
    padding: '10px',
    justifyContent: 'center',
    //backgroundColor: 'rgba(2,19,97,0.8 )',
  });

  const StyledDivider = styled(Divider)({
    backgroundColor: theme.palette.stroke.dark,
  });

  const textElements = [
    'Privacy',
    'Terms',
    'California Transparency in Supply Chains Act of 2014',
  ];
  return (
    <FooterContainer>
      <>
        <ItemWrapper>
          <Image src={logo} width="158px" height="59px" alt="logo" />
          <SocialIconWrapper>
            {socialIcons.map((icon) => {
              return (
                <IconOuterBox key={icon.id}>
                  <Icon src={icon.defaultIcon} iconAlt={'icon'} />
                  <IconInnerBox />
                </IconOuterBox>
              );
            })}
          </SocialIconWrapper>
        </ItemWrapper>
      </>

      <StyledDivider />

      <DownWrapper>
        <Typography variant="subtitle2" color={theme.palette.white.main}>
          ©2023 Wabash National Corporation. All rights reserved.
        </Typography>

        <TextWrapper>
          {textElements.map((text) => {
            return (
              <Typography
                variant="subtitle2"
                color={theme.palette.white.main}
                key={text}
                sx={{ cursor: 'pointer' }}
              >
                {text}
              </Typography>
            );
          })}
        </TextWrapper>
      </DownWrapper>
    </FooterContainer>
  );
};

export default CustomFooter;
