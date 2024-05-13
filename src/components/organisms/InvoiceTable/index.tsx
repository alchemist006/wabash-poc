import React, { useEffect, useState } from 'react';
import { Box, Stack, styled } from '@mui/material';
import theme from '../../../theme';
import Typography from '../../atoms/Typography';
import { INVOICE_TABLE_HEADS } from '../../../utils/constants';
import CheckBox from '../../atoms/Checkbox';
import { InvoiceType } from '../../../utils/types';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { getAllInvoices } from '../../../services';
import { useNavigate } from 'react-router-dom';
import InputField from '../../atoms/InputField';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const AllOrdersContainer = styled(Stack)({
  gap: theme.spacing(3),
});

const CustomTableHeaders = styled('div')({
  display: 'grid',
  gridTemplateColumns: '4rem repeat(7, 1fr) 4rem',
  width: '100%',
  alignItems: 'center',
  height: theme.spacing(9),
  padding: '0.5rem 0',
});

const StyledTypographyStack = styled(Stack)({
  flexDirection: 'row',
});

const CustomTableHeaderStack = styled(Stack)({
  flexDirection: 'row',
  width: '100%',
});

export const BodyContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
});

export const CustomTableContainer = styled(Stack)({
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

const CustomStyledDatePicker = styled(DatePicker)({
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

export const CustomTableDataContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '4rem repeat(7, 1fr) 4rem',
  width: '100%',
  alignItems: 'center',
  height: theme.spacing(9),
  borderTop: `1px solid ${theme.palette.stroke.light}`,
  padding: '0.5rem 0',
});

const InvoiceTable = () => {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState<InvoiceType[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [filterOrders, setFilterOrders] = useState<InvoiceType[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = async () => {
    const invoiceData = await getAllInvoices(0, 0);
    setInvoices(invoiceData.data);
    setFilterOrders(invoiceData.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const filteredOrders = invoices.filter((invoice) => {
      const normalizedSearchQuery = searchQuery.toLowerCase();
      return (
        invoice.invoiceNo.toString().includes(normalizedSearchQuery) ||
        invoice.po.toLowerCase().includes(normalizedSearchQuery) ||
        invoice.shipFrom.toLowerCase().includes(normalizedSearchQuery) ||
        invoice.shipTo.toLowerCase().includes(normalizedSearchQuery) ||
        invoice.total.toString().includes(normalizedSearchQuery) ||
        invoice.freightAmount.toString().includes(normalizedSearchQuery) ||
        invoice.terms.toLowerCase().includes(normalizedSearchQuery)
      );
    });
    setFilterOrders([...filteredOrders]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  useEffect(() => {
    if (startDate && endDate) {
      if (startDate > endDate) {
        setInvoices([]);
      }
    }
    const filterOrders = invoices.filter((invoice) => {
      if (startDate && endDate) {
        return (
          new Date(invoice.invoiceDate) >= startDate &&
          new Date(invoice.invoiceDate) <= endDate
        );
      } else if (startDate) {
        return new Date(invoice.invoiceDate) >= startDate;
      } else if (endDate) {
        return new Date(invoice.invoiceDate) <= endDate;
      } else {
        return true;
      }
    });
    setFilterOrders([...filterOrders]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  const handleRowClick = (id: number) => {
    navigate(`/${id}/invoice-details`);
  };

  const TableRow = (row: InvoiceType) => {
    return (
      <CustomTableDataContainer>
        <StyledTypographyStack>
          <CheckBox />
        </StyledTypographyStack>
        <StyledTypographyStack>
          <Typography
            variant="subtitle2"
            color={theme.palette.highEmphasis.main}
          >
            {row.invoiceNo}
          </Typography>
        </StyledTypographyStack>
        <StyledTypographyStack>
          <Typography
            variant="subtitle2"
            color={theme.palette.highEmphasis.main}
          >
            {row.invoiceDate}
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
            {row.shipTo}
          </Typography>
        </StyledTypographyStack>
        <StyledTypographyStack>
          <Typography
            variant="subtitle2"
            color={theme.palette.highEmphasis.main}
          >
            {row.shipFrom}
          </Typography>
        </StyledTypographyStack>
        <StyledTypographyStack>
          <Typography
            variant="subtitle2"
            color={theme.palette.highEmphasis.main}
          >
            {row.freightAmount}
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
        <ChevronRightIcon
          sx={{ color: theme.palette.icons.dark }}
          onClick={() => {
            handleRowClick(row.id);
          }}
        />
      </CustomTableDataContainer>
    );
  };

  const renderHeader = () => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Typography color={''} variant={undefined}>
        {`ALL INVOICES (${invoices.length})`}
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
            <CustomStyledDatePicker
              onChange={(newValue) => {
                if (newValue) {
                  setStartDate(newValue?.toDate());
                }
              }}
            />
            <CustomStyledDatePicker
              onChange={(newValue) => {
                if (newValue) {
                  setEndDate(newValue?.toDate());
                }
              }}
            />
          </LocalizationProvider>
        </Box>
      </Box>
    </Box>
  );

  const renderTableData = () => (
    <CustomTableContainer>
      <CustomTableHeaderStack>
        <CustomTableHeaders>
          <StyledTypographyStack>
            <CheckBox />
          </StyledTypographyStack>
          {INVOICE_TABLE_HEADS.map((text) => {
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
        </CustomTableHeaders>
      </CustomTableHeaderStack>
      <BodyContainer>
        {filterOrders.map((row) => {
          return TableRow(row);
        })}
      </BodyContainer>
    </CustomTableContainer>
  );

  return (
    <AllOrdersContainer data-testid={'invoice-table'}>
      {renderHeader()}
      {renderTableData()}
    </AllOrdersContainer>
  );
};

export default React.memo(InvoiceTable);
