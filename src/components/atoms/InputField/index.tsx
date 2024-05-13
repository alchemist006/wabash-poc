import {
  OutlinedTextFieldProps,
  TextField as MuiTextField,
  styled,
  Box,
} from '@mui/material';
import React from 'react';
import theme from '../../../theme';
import search from '../../../../public/Assets/Icons/search.svg';
import CircularProgress from '@mui/material/CircularProgress';
import IconComponent from '../Icon';

export interface TextFieldProps extends Partial<OutlinedTextFieldProps> {
  showLoader?: boolean;
  primary?: boolean;
}

const StyledBox = styled(Box)({
  marginRight: '5px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});
const StyledTextField = styled(MuiTextField)(({ primary }: TextFieldProps) => ({
  '& .MuiInputBase-root': {
    backgroundColor: 'white',
    border: `1px solid ${theme.palette.stroke.light}`,
    borderRadius: 0,
  },
  '& input[type=number]::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },

  '& .MuiInputBase-input': {
    padding: `${theme.spacing(3)} ${theme.spacing(1)}`,
    paddingLeft: theme.spacing(3),
    color: theme.palette.highEmphasis.dark,
    ...theme.typography.subtitle2,
  },
  '&:hover .MuiOutlinedInput-root': {
    background: theme.palette.hover.main,
  },

  '& .MuiOutlinedInput-root': {
    border: `1px solid ${theme.palette.stroke.light}`,
    '&.Mui-focused': {
      border: `2px solid ${theme.palette.stroke.semiLight}`,
      '&:hover': {
        border: primary
          ? `1px solid ${theme.palette.stroke.light}`
          : '2px solid #007aff',
      },
    },
  },

  '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
}));
const InputField = ({ ...props }: TextFieldProps) => {
  return (
    <StyledTextField
      {...props}
      data-testid="text-field"
      InputProps={{
        endAdornment: props.primary && (
          <StyledBox>
            {props.showLoader && (
              <CircularProgress size={20} data-testid="progress" />
            )}

            <IconComponent
              src={search}
              iconAlt={'search'}
              height="30px"
              width="30px"
            />
          </StyledBox>
        ),
      }}
    />
  );
};

export default InputField;
