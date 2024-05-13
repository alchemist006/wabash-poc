import React, { useState } from 'react';
import {
  Box,
  Stack,
  Divider,
  InputAdornment,
  IconButton,
  OutlinedInput,
  styled,
} from '@mui/material';
import theme from '../../../theme';
import Typography from '../../atoms/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Button from '../../atoms/Button';
import icon from '../../../../public/assets/images/no-image.png';
import Icon from '../../atoms/Icon';

interface ICartCardProps {
  part_number: string;
  manufacturer: string;
  total: number;
  price: number;
  handleRemoveProduct: () => void;
  value: number;
  handleOnChange: (value: number) => void;
}
const CartCardContainer = styled(Box)({
  display: 'flex',
});
const RightContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

const RowContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px',
});
const StyledInput = styled(OutlinedInput)({
  width: '80px',
  height: '40px',
  '& .MuiOutlinedInput-input': {
    fontFamily: 'Roboto',
    fontSize: '18px',
    color: theme.palette.highEmphasis.main,
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.icons.dark,
  },
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.stroke.light,
    paddingRight: '0px',
  },

  border: 'none',
});
const InnerContainer = styled(Box)({
  display: 'flex',
  gap: '30px',
  flex: 1,
});
const AddButtonWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  paddingTop: '15px',
  gap: '6px',
  marginBottom: '60px',
});

const CartCard = ({
  part_number,
  manufacturer,
  total,
  price,
  handleRemoveProduct,
  value,
  handleOnChange,
}: ICartCardProps) => {
  return (
    <CartCardContainer>
      <InnerContainer>
        <Box>
          <Icon src={icon} width="150px" height="120px" iconAlt={''} />
        </Box>

        <RightContainer>
          <RowContainer>
            <Typography color={''} variant="body2">
              {part_number}
            </Typography>
            <Typography color={''} variant="body2">
              ${total.toFixed(3)}
            </Typography>
          </RowContainer>
          <RowContainer>
            <Typography color={''} variant="body2">
              {manufacturer}
            </Typography>
            <Typography color={''} variant="body2">
              ${price.toFixed(3)}/each
            </Typography>
          </RowContainer>

          <Stack
            direction={'row'}
            alignItems={'center'}
            gap="20px"
            paddingTop="10px"
          >
            <Typography variant="caption1" color={''}>
              QTY
            </Typography>
            <StyledInput
              data-testid="quantity-input"
              type="number"
              value={value}
              onChange={(e) => {
                handleOnChange(Number(e.target.value));
              }}
              inputProps={{
                inputProps: {
                  min: 0,
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton data-testid="add-button">
                      <AddIcon />
                    </IconButton>
                    <IconButton>
                      <RemoveIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              labelColor={theme.palette.primary.main}
              variant="text"
              labelVariant="subtitle4"
              onClick={handleRemoveProduct}
            >
              Remove
            </Button>
          </Stack>
          <AddButtonWrapper>
            <ListAltIcon style={{ color: 'blue' }} />
            <Typography color={theme.palette.highEmphasis.main} variant="body2">
              Add To List
            </Typography>
          </AddButtonWrapper>
          <Divider />
        </RightContainer>
      </InnerContainer>
    </CartCardContainer>
  );
};
export default CartCard;
