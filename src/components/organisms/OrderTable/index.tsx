import React, { useEffect, useState } from 'react';
import { Box, MenuItem, Stack, TextField, styled } from '@mui/material';
import theme from '../../../theme';
import Typography from '../../atoms/Typography';
import { ORDERS_TABLE_HEADERs } from '../../../utils/constants';
import CheckBox from '../../atoms/Checkbox';
import { ORDER } from '../../../utils/types';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { getAllOrders } from '../../../services';
import { useNavigate } from 'react-router-dom';
import InputField from '../../atoms/InputField';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const AllOrdersContainer = styled(Stack)({
  gap: theme.spacing(3),
});

const TableHeaders = styled('div')({
  display: 'grid',
  gridTemplateColumns: '4rem repeat(7, 1fr) 4rem',
  width: '100%',
  alignItems: 'center',
  height: theme.spacing(9),
  padding: '0.5rem 0',
});

export const TableContainer = styled(Stack)({
  flexDirection: 'column',
  width: '100%',
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: theme.spacing(2),
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'darkgrey',
    borderRadius: theme.spacing(2),
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'lightgrey',
    borderRadius: theme.spacing(2),
  },
});
const StyledTypographyStack = styled(Stack)({
  flexDirection: 'row',
});

const TableHeaderStack = styled(Stack)({
  flexDirection: 'row',
  width: '100%',
});

export const BodyContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
});

export const TableDataContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '4rem repeat(7, 1fr) 4rem',
  width: '100%',
  alignItems: 'center',
  height: theme.spacing(9),
  borderTop: `1px solid ${theme.palette.stroke.light}`,
  padding: '0.5rem 0',
});
const StyledDatePicker = styled(DatePicker)({
  cursor: 'pointer',
  '.css-i4bv87-MuiSvgIcon-root': {
    color: 'blue',
  },
  '.css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
    height: '12px',
    width: '100px',
    border: 'none',
    '&:hover': {
      border: 'none',
    },
  },
  '.css-1xm7vtn-MuiInputBase-root-MuiOutlinedInput-root': {
    borderRadius: '1px',
    fontSize: '16px',
    color: theme.palette.accent.grey,
  },
});

const StyledDropDown = styled(TextField)({
  '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
    padding: 4,
  },
  width: '200px',
  '.css-dl6j4i-MuiButtonBase-root-MuiMenuItem-root': {
    fontSize: '10px',
  },
  '.css-sfz26s-MuiFormLabel-root-MuiInputLabel-root': {
    fontSize: '16px',
  },
});

const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<ORDER[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [filterOrders, setFilterOrders] = useState<ORDER[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const ORDER_STATUS_OPTIONS = [
    { value: 'Confirmed', label: 'Confirmed' },
    { value: 'Invoiced', label: 'Invoiced' },
  ];

  const fetchData = async () => {
    const orderData = await getAllOrders(0, 0);
    setOrders(orderData.data);
    setFilterOrders(orderData.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRowClick = (id: number) => {
    navigate(`/${id}/order-details`);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const filteredOrders = orders.filter((order) => {
      const normalizedSearchQuery = searchQuery.toLowerCase();
      const matchesSearchQuery =
        order.orderNo.toString().includes(normalizedSearchQuery) ||
        order.confirmationNo.toString().includes(normalizedSearchQuery) ||
        order.po.toLowerCase().includes(normalizedSearchQuery) ||
        order.total.toString().includes(normalizedSearchQuery) ||
        order.freightAmt.toString().includes(normalizedSearchQuery) ||
        order.status.toLowerCase().includes(normalizedSearchQuery);
      const matchesStatus =
        selectedStatus === null || order.status === selectedStatus;
      return matchesSearchQuery && matchesStatus;
    });
    setFilterOrders([...filteredOrders]);
  }, [searchQuery, selectedStatus]);

  useEffect(() => {
    if (startDate && endDate) {
      if (startDate > endDate) {
        setOrders([]);
      }
    }
    const filterOrders = orders.filter((order) => {
      if (startDate && endDate) {
        return (
          new Date(order.orderDate) >= startDate &&
          new Date(order.orderDate) <= endDate
        );
      } else if (startDate) {
        return new Date(order.orderDate) >= startDate;
      } else if (endDate) {
        return new Date(order.orderDate) <= endDate;
      } else {
        return true;
      }
    });
    setFilterOrders([...filterOrders]);
  }, [startDate, endDate]);

  const TableRow = (row: ORDER) => {
    return (
      <TableDataContainer>
        <StyledTypographyStack>
          <CheckBox />
        </StyledTypographyStack>
        <StyledTypographyStack>
          <Typography
            variant="subtitle2"
            color={theme.palette.highEmphasis.main}
          >
            {row.orderNo}
          </Typography>
        </StyledTypographyStack>
        <StyledTypographyStack>
          <Typography
            variant="subtitle2"
            color={theme.palette.highEmphasis.main}
          >
            {row.confirmationNo}
          </Typography>
        </StyledTypographyStack>
        <StyledTypographyStack>
          <Typography
            variant="subtitle2"
            color={theme.palette.highEmphasis.main}
          >
            {row.orderDate}
          </Typography>
        </StyledTypographyStack>
        <StyledTypographyStack>
          <Typography
            variant="subtitle2"
            color={theme.palette.highEmphasis.main}
          >
            {row.po}
          </Typography>
        </StyledTypographyStack>
        <StyledTypographyStack>
          <Typography
            variant="subtitle2"
            color={theme.palette.highEmphasis.main}
          >
            {row.total}
          </Typography>
        </StyledTypographyStack>
        <StyledTypographyStack>
          <Typography
            variant="subtitle2"
            color={theme.palette.highEmphasis.main}
          >
            {row.freightAmt}
          </Typography>
        </StyledTypographyStack>
        <StyledTypographyStack>
          {row.status == 'Confirmed' ? (
            <CheckCircleOutlineIcon
              sx={{ color: theme.palette.success.main, marginRight: '4px' }}
              fontSize="small"
            />
          ) : (
            <MonetizationOnOutlinedIcon
              sx={{ color: theme.palette.success.main, marginRight: '4px' }}
              fontSize="small"
            />
          )}
          <Typography
            variant="subtitle2"
            color={theme.palette.highEmphasis.main}
          >
            {row.status}
          </Typography>
        </StyledTypographyStack>
        <ChevronRightIcon
          sx={{ color: theme.palette.icons.dark }}
          onClick={() => {
            handleRowClick(row.id);
          }}
        />
      </TableDataContainer>
    );
  };

  const renderTableData = () => (
    <TableContainer>
      <TableHeaderStack>
        <TableHeaders>
          <StyledTypographyStack>
            <CheckBox />
          </StyledTypographyStack>
          {ORDERS_TABLE_HEADERs.map((text) => {
            return (
              <StyledTypographyStack key={text}>
                <Typography
                  variant="h5"
                  color={theme.palette.mediumEmphasis.main}
                >
                  {text}
                </Typography>
              </StyledTypographyStack>
            );
          })}
        </TableHeaders>
      </TableHeaderStack>
      <BodyContainer>
        {filterOrders.map((row) => {
          return TableRow(row);
        })}
      </BodyContainer>
    </TableContainer>
  );

  const renderHeader = () => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Typography color={''} variant={undefined}>
        {`ALL ORDERS (${orders.length})`}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <InputField
          showLoader={false}
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          primary={true}
        />
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDatePicker
              onChange={(newValue) => {
                if (newValue) {
                  setStartDate(newValue?.toDate());
                }
              }}
            />
            <StyledDatePicker
              onChange={(newValue) => {
                if (newValue) {
                  setEndDate(newValue?.toDate());
                }
              }}
            />
          </LocalizationProvider>
        </Box>
        <StyledDropDown
          select
          label="status"
          placeholder="status"
          value={selectedStatus || ''}
          onChange={(e) => setSelectedStatus(e.target.value)}
          variant="outlined"
        >
          {ORDER_STATUS_OPTIONS.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{ fontSize: '16px' }}
            >
              {option.label}
            </MenuItem>
          ))}
        </StyledDropDown>
      </Box>
    </Box>
  );

  return (
    <AllOrdersContainer data-testid={'order-table'}>
      {renderHeader()}
      {renderTableData()}
    </AllOrdersContainer>
  );
};

export default React.memo(Orders);
