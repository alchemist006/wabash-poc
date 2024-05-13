import { Box } from '@mui/material';
import React from 'react';
import Typography from '../../atoms/Typography';
import theme from '../../../theme';

interface ProductReferenceProps {
  icon: React.ReactNode;
  heading: string;
  data: { heading: string; description: string; id: number }[];
}
const ProductReferencesCard = ({
  icon,
  heading,

  data,
}: ProductReferenceProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        background: 'rgba(242,242,242,0.4)',
        flexDirection: 'column',
        borderRadius: '4px',
        padding: '10px',
        minHeight: '200px',
        flex: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          paddingBottom: '24px',
        }}
      >
        {icon}
        <Typography variant="caption2" color={''}>
          {heading.toUpperCase()}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        {data?.map((item) => {
          return (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <Typography
                variant="caption1"
                color={theme.palette.primary.main}
                sx={{ letterSpacing: '2px' }}
              >
                {item.heading.toUpperCase()}#
              </Typography>
              <Typography variant="caption1" color={theme.palette.primary.main}>
                {item.description.toUpperCase()}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ProductReferencesCard;
