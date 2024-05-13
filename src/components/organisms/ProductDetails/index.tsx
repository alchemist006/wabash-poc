import {
  Box,
  Stack,
  Divider,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Icon from '../../atoms/Icon';
import icon from '../../../../public/assets/images/no-image.png';
import Typography from '../../atoms/Typography';
import Button from '../../atoms/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import theme from '../../../theme';
import { getProductById } from '../../../services';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';
import CachedIcon from '@mui/icons-material/Cached';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ProductReferencesCard from '../../molecules/ProductReferenceCard';
import CustomChip from '../../atoms/Chip';
import styled from '@emotion/styled';
import { BACK } from '../../../utils/constants';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCartContext } from '../../../context';
export interface ProductDetailProps {
  id: number;
  image_src?: string;
  part_number: string;
  manufacturer: string;
  description: string;
  list: number;
  price: number;
  stocked: string;
  qty_available: number;
  uom: string;
  self_pack: number;
  wgt: number;
  shipping: string;
  category: string;
}

const StyledCard = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  padding: '30px',
  paddingRight: '90px',
  gap: '90px',
  '@media(max-width:885px)': {
    flexDirection: 'column',
  },
});
const DataWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '25px',
  flexWrap: 'wrap',
  paddingTop: '20px',
});

const AddButtonWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  paddingTop: '15px',
  gap: '6px',
});

const OuterLayout = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  paddingBottom: '60px',
});
const InnerLayout = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  flex: 0.8,
  flexWrap: 'wrap',
  gap: '12px',
});
const LocationWrapper = styled(Box)({
  display: 'flex',
  gap: '5px',
});
const OuterWrapper = styled(Box)({
  padding: '40px',
});
const StyledDivider = styled(Divider)({
  borderColor: theme.palette.stroke.extraLight,
});
const StyledSpecification = styled(Box)({
  borderBottom: '3px solid blue',
  width: 'fit-content',
});

const BackButtonWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  cursor: 'pointer',
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

const ProductDetails = () => {
  const location = useLocation();
  const { id } = location.state;

  const navigate = useNavigate();
  const defaultArgs = {
    id: 0,
    image_src: '',
    part_number: '',
    manufacturer: '',
    description: '',
    list: 0,
    price: 0,
    stocked: '',
    qty_available: 0,
    uom: '',
    self_pack: 0,
    wgt: 0,
    shipping: '',
    category: '',
  };

  const labels = [
    'Part Number',
    'Manufacturer',
    'Description',
    'List',
    'Price',
    'Stocked',
    'QTY Available',
    'UOM',
    'Self Pack',
    'Wgt',
    'Shipping',
  ];

  const [data, setData] = useState<ProductDetailProps>(defaultArgs);
  useEffect(() => {
    const fetchProductDetails = async () => {
      const productData = await getProductById(id);

      setData(productData);
    };
    fetchProductDetails();
  }, [id]);

  const excludeKeys = ['id', 'image_src', 'category'];
  const dummy = { ...data };
  const filteredEntries = Object.entries(dummy).filter(
    ([key]) => !excludeKeys.includes(key),
  );
  const filteredObject = Object.fromEntries(filteredEntries);
  const dataArray = Object.entries(filteredObject).map(([key, value]) => ({
    label: key,
    value: value,
  }));
  const image_url = data.image_src ? data.image_src : icon;

  const { handleAddToCart, cart } = useCartContext();

  const { products } = cart;

  const item = products.find((prod) => prod.id == id);

  const multiData = [dataArray.slice(0, 5), dataArray.slice(5)];
  const [count, setCount] = useState(0);
  const [showUpdates, setShowUpdates] = useState(false);
  const handleInputChange = (value: number) => {
    setShowUpdates(true);
    setCount(value < 0 ? 0 : value);
  };

  const handleAddProduct = () => {
    handleAddToCart({ qty: count, product: data });
    navigate('/cart');
  };
  return (
    <OuterWrapper>
      <Box>
        <BackButtonWrapper onClick={() => navigate(-1)}>
          <ArrowBackIcon sx={{ color: theme.palette.icons.dark }} />
          <Typography color={theme.palette.icons.dark} variant="subtitle4">
            {BACK}
          </Typography>
        </BackButtonWrapper>
        <Typography
          color={theme.palette.highEmphasis.main}
          variant="h4"
          sx={{ paddingTop: '30px' }}
        >
          {data.manufacturer}
        </Typography>
        <Typography
          color={theme.palette.highEmphasis.main}
          variant="body2"
          sx={{ padding: '20px 0px' }}
        >
          {data.part_number}
        </Typography>
      </Box>
      <OuterLayout>
        <InnerLayout>
          <Icon src={image_url} width="370px" height="300px" iconAlt={''} />
          <Box>
            <Typography
              variant="caption2"
              color={theme.palette.highEmphasis.main}
            >
              $
              {item
                ? showUpdates
                  ? count * data.price
                  : data.price * (item?.count ?? 0)
                : data.price * count}
            </Typography>
            <Typography variant="body2" color={theme.palette.highEmphasis.main}>
              List: ${data.list}
            </Typography>
            <Stack
              direction={'row'}
              alignItems={'center'}
              gap="20px"
              paddingTop="40px"
            >
              <Typography variant="body2" color={theme.palette.primary.main}>
                QTY
              </Typography>
              <StyledInput
                type="number"
                value={showUpdates ? count : item?.count ?? 0}
                contentEditable={true}
                onChange={(e) => handleInputChange(Number(e.target.value))}
                inputProps={{
                  inputProps: {
                    min: 0,
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <AddIcon />
                      </IconButton>
                      <IconButton>
                        <RemoveIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <Stack direction={'row'} gap="20px" paddingTop="40px">
              <Box>
                <Button
                  variant="contained"
                  labelColor={theme.palette.white.main}
                  labelVariant="subtitle2"
                  backgroundColor={theme.palette.primary.main}
                  disabled={showUpdates ? count == 0 : (item?.count ?? 0) == 0}
                  onClick={() => handleAddProduct()}
                >
                  ADD TO CART
                </Button>
                <AddButtonWrapper>
                  <ListAltIcon style={{ color: 'blue' }} />
                  <Typography
                    color={theme.palette.highEmphasis.main}
                    variant="body2"
                  >
                    Add To List
                  </Typography>
                </AddButtonWrapper>
              </Box>
              <LocationWrapper>
                <LocationOnIcon sx={{ color: 'blue' }} />
                <Stack direction={'column'} gap="4px">
                  <Typography
                    variant="body2"
                    color={theme.palette.highEmphasis.main}
                  >
                    Available for order
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.highEmphasis.main}
                  >
                    Reach out to your CSR for an estimate on shipping
                  </Typography>
                </Stack>
              </LocationWrapper>
            </Stack>
          </Box>
        </InnerLayout>
      </OuterLayout>

      <Box>
        <Box>
          <StyledSpecification>
            <Typography variant="caption2" color={theme.palette.primary.main}>
              Specifications
            </Typography>
          </StyledSpecification>

          <Divider />

          <Box sx={{ padding: '30px' }}>
            <Typography
              variant="caption2"
              color={theme.palette.highEmphasis.main}
            >
              Product Details
            </Typography>
            <DataWrapper>
              {multiData.map((chunk, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  {chunk.map((item) => (
                    <>
                      <Box
                        key={item.value}
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          width: '400px',
                          gap: '50px',
                        }}
                      >
                        <Typography
                          variant="body4"
                          color={theme.palette.stroke.main}
                        >
                          {
                            labels.filter((label) =>
                              label
                                .toLowerCase()
                                .includes(item.label.replace('_', ' ')),
                            )[0]
                          }
                        </Typography>
                        <Box sx={{ width: '200px' }}>
                          <Typography
                            variant="caption1"
                            color={theme.palette.highEmphasis.main}
                          >
                            {item.label == 'list' || item.label == 'price'
                              ? `$${item.value}`
                              : item.value}
                          </Typography>
                        </Box>
                      </Box>
                      <StyledDivider />
                    </>
                  ))}
                </Box>
              ))}
            </DataWrapper>
          </Box>
        </Box>
      </Box>
      <StyledCard>
        <ProductReferencesCard
          icon={<CustomChip label="XREF" />}
          heading={'Cross References'}
          data={[
            { heading: 'Manufacturer Part', description: '-', id: 1 },
            { heading: 'Customer Part', description: '-', id: 2 },
          ]}
        />

        <ProductReferencesCard
          icon={<CachedIcon sx={{ color: 'blue' }} />}
          heading={'Related Parts'}
          data={[]}
        />
      </StyledCard>
    </OuterWrapper>
  );
};

export default ProductDetails;
