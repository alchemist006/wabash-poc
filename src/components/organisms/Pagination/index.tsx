import React from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, styled } from '@mui/material';
import theme from '../../../theme';
import Typography from '../../atoms/Typography';

export interface PaginationProps {
  pageCount: number;
  items: number[];
  handlePageSizeChange: (page: number) => void;
  handlePageNumberChange: (page: number) => void;
  pageSize: number;
  pageNumber: number;
}

const StyledPagination = styled(Pagination)({
  '.css-1j4x7z0-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
    background: 'blue',
    color: 'white',
    '&:hover': {
      background: theme.palette.primary.main,
      color: 'white',
    },
  },
  '.css-1j4x7z0-MuiButtonBase-root-MuiPaginationItem-root': {
    borderRadius: 0,
    '&:hover': {
      color: theme.palette.primary.main,
      background: 'transparent',
    },
  },

  '.css-org83-MuiButtonBase-root-MuiPaginationItem-root': {
    color: 'black',
    ...theme.typography.subtitle2,
    '&:hover': {
      background: 'transparent',
    },
  },

  '.MuiSvgIcon-root': {
    color: theme.palette.primary.main,
    backgroundColor: 'transparent',
    width: '24px',
    height: '24px',
    '&:hover': {
      background: 'transparent',
    },
  },
  '.css-8je8zh-MuiTouchRipple-root': {
    color: 'blue',
    borderRadius: 0,
    padding: '5px',
    width: '10px',
    height: '10px',
  },
});

const CustomPagination = ({
  pageCount,
  items,
  pageSize,
  pageNumber,
  handlePageSizeChange,
  handlePageNumberChange,
}: PaginationProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <Typography variant="subtitle2" color={theme.palette.highEmphasis.main}>
          Items per Page:
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
          }}
        >
          {items.map((item) => {
            return (
              <Typography
                key={item}
                variant="subtitle2"
                sx={{
                  cursor: 'pointer',
                }}
                onClick={() => handlePageSizeChange(item)}
                color={
                  pageSize === item
                    ? theme.palette.highEmphasis.main
                    : theme.palette.primary.main
                }
              >
                {item}
              </Typography>
            );
          })}
        </Box>
      </Box>
      <StyledPagination
        count={pageCount}
        size="small"
        onChange={(event: React.ChangeEvent<unknown>, page: number) =>
          handlePageNumberChange(page)
        }
        page={pageNumber}
      />
      ;
    </Box>
  );
};

export default CustomPagination;
