import { Box, Paper, Stack, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import InputField from '../../atoms/InputField';
import Typography from '../../atoms/Typography';
import SearchResultCard from '../../molecules/SearchResultCard';
import theme from '../../../theme';
import { getProductData } from '../../../services';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
export interface SearchResultCardProps {
  id: number;
  part_number: string;
  manufacturer: string;
  description: string;
  image?: string;
}

const InnerBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
});

const StyledPaper = styled(Paper)({
  zIndex: 99,
  maxHeight: '588px',
  padding: '10px 0 10px 0',
  '@media(max-width:1300px)': {
    overflowY: 'scroll',
  },
  width: '61%',
  position: 'absolute',
});
const GlobalSearch = () => {
  const [value, setValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [data, setData] = useState<SearchResultCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getProductData(value);
      setData(data.data);
      setCount(data.count);
      setIsLoading(false);
    };
    fetchData();
  }, [value]);
  const navigate = useNavigate();
  const handleViewAll = () => {
    navigate('/parts');
  };
  const handleNavigate = (id: number) => {
    navigate(`/${id}/product-details`, { state: { id: id } });
  };

  return (
    <Box>
      <InputField
        placeholder="Search parts name or keywords"
        primary
        fullWidth
        onFocus={() => {
          setShowDropdown(true);
        }}
        onBlur={() => {
          setShowDropdown(false);
        }}
        onChange={(e) => setValue(e.target.value)}
        showLoader={isLoading}
        value={value}
        autoComplete="off"
      />
      {showDropdown && (
        <StyledPaper>
          {isLoading ? (
            <Typography variant="body2" color={theme.palette.highEmphasis.main}>
              Loading...
            </Typography>
          ) : data.length == 0 ? (
            <Typography variant="body2" color={theme.palette.highEmphasis.main}>
              We could not find a match for your search
            </Typography>
          ) : (
            <>
              <InnerBox>
                <Typography
                  variant="body2"
                  color={theme.palette.highEmphasis.main}
                >
                  Results
                </Typography>
                <Stack direction={'row'} gap={3}>
                  <Typography
                    variant="body2"
                    color={theme.palette.highEmphasis.main}
                  >
                    {data.length}of {count}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.primary.main}
                    onClick={handleViewAll}
                    sx={{ cursor: 'pointer' }}
                  >
                    View all
                  </Typography>
                </Stack>
              </InnerBox>
              <Divider sx={{ borderColor: theme.palette.stroke.light }} />
              {data.map((item) => {
                return (
                  <Box
                    key={item.id}
                    sx={{
                      borderBottom: `1px solid ${theme.palette.stroke.extraLight}`,
                    }}
                  >
                    <SearchResultCard
                      part_number={item.part_number}
                      manfacturer={item.manufacturer}
                      description={item.description}
                      handleClick={() => {
                        handleNavigate(item.id);
                      }}
                      image={item.image}
                    />
                  </Box>
                );
              })}
            </>
          )}
        </StyledPaper>
      )}
    </Box>
  );
};

export default GlobalSearch;
