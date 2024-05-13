import React from 'react';
import { Box, Link } from '@mui/material';
import theme from '../../../theme';
import { convertStringToLowerDash } from '../../../utils/formatters';

interface ITabLinks {
  tabNames: string[];
  tabValues?: string[];
  selectedValue?: string;
  onClick: (value: string) => void;
}

const LinkTabs: React.FC<ITabLinks> = (props) => {
  return (
    <div>
      <Box sx={{ display: 'flex', gap: '60px' }}>
        {props.tabNames.map((item) => {
          return (
            <Link
              key={item}
              onClick={() => props.onClick(convertStringToLowerDash(item))}
              sx={{
                cursor: 'pointer',
                textDecoration:
                  convertStringToLowerDash(item) == props.selectedValue
                    ? 'underlined'
                    : 'none',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
                color:
                  props.selectedValue != convertStringToLowerDash(item)
                    ? theme.palette.highEmphasis.main
                    : theme.palette.primary.main,
                ...theme.typography.subtitle1,
              }}
            >
              {item}
            </Link>
          );
        })}
      </Box>
    </div>
  );
};

export default LinkTabs;
