import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import theme from '../../../theme';
import { Box, styled } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Typography from '../../atoms/Typography';

export interface DropDownProps {
  handleChange: (value: string) => void;
  options: string[];
  value: string;
  showFilter?: boolean;
  handleClick?: () => void;
}

const FilterIconContainer = styled(Box)({
  display: 'flex',
  width: 24,
  maxHeight: '46px',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid rgb(224, 224, 224)',
  padding: '7px 14px',
});

const DropDownContainer = styled(Box)(
  ({ showFilter }: { showFilter: boolean | undefined }) => ({
    display: 'flex',
    gap: showFilter ? '12px' : '25px',
    alignItems: 'center',
  }),
);
const BoxWrapper = styled(Box)({
  position: 'absolute',
  right: '20px',
});
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: '152px',
      width: 248,
      left: 79,
      borderRadius: 0,
      boxShadow: 'none',
      border: '1px solid rgb(224, 224, 224)',
      padding: 0,
    },
  },
};

const StyledFormControl = styled(FormControl)({
  width: 306,
  maxHeight: '56px',
  '.css-14nbkev-MuiInputBase-root-MuiOutlinedInput-root': {
    borderRadius: 0,
    border: `1px solid ${theme.palette.stroke.light}`,
    padding: 0,
  },
});

const StyledSelect = styled(Select)({
  '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
    padding: '10px 15px',
    ...theme.typography.body2,
    color: theme.palette.accent.grey,
  },

  '.MuiSelect-icon': {
    display: 'none',
  },

  '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, &.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ,.css-1d3z3hw-MuiOutlinedInput-notchedOutline':
    { borderRadius: 0, border: `1px solid ${theme.palette.stroke.light}` },
});

const StyledMenuItem = styled(MenuItem)({
  background: 'white',
  ...theme.typography.subtitle2,
  color: theme.palette.highEmphasis.dark,
  '&.Mui-selected': {
    '&:hover': {
      background: `${theme.palette.backgroundElevation.light} !important`,
    },
    backgroundColor: 'transparent !important',
    color: theme.palette.primary.light,
  },
  '&:hover': {
    background: theme.palette.backgroundElevation.light,
  },
});

const DropDown = ({
  options,
  handleChange,
  value,
  showFilter,
  handleClick,
}: DropDownProps) => {
  return (
    <DropDownContainer showFilter={showFilter}>
      {showFilter ? (
        <FilterIconContainer data-testid="filter" onClick={handleClick}>
          <TuneIcon
            color={'inherit'}
            style={{ color: theme.palette.icons.main }}
          />
        </FilterIconContainer>
      ) : (
        <Typography variant="subtitle1" color={theme.palette.primary.light}>
          SORT BY
        </Typography>
      )}

      <StyledFormControl data-testid="dropdown">
        <StyledSelect
          value={value !== '' ? value : options[0]}
          IconComponent={(props) => {
            const iconSrc = props.className.includes('MuiSelect-iconOpen') ? (
              <BoxWrapper>
                <KeyboardArrowUpIcon color="primary" data-testid={'up-arrow'} />
              </BoxWrapper>
            ) : (
              <BoxWrapper>
                <KeyboardArrowDownIcon
                  color="primary"
                  data-testid={'down-arrow'}
                />
              </BoxWrapper>
            );

            return iconSrc;
          }}
          MenuProps={MenuProps}
          onChange={(event: SelectChangeEvent<unknown>) =>
            handleChange(event.target.value as string)
          }
        >
          {options.map((name, index) => (
            <StyledMenuItem
              data-testid={`item-${index}`}
              key={name}
              value={name}
              disableTouchRipple
            >
              {name}
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </StyledFormControl>
    </DropDownContainer>
  );
};

export default DropDown;
