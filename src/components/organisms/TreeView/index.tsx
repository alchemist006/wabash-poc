import * as React from 'react';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import theme from '../../../theme';
import Typography from '../../atoms/Typography';
import {
  ACCORDION_LABELS,
  CLEAR_ALL,
  FILTER_BY,
  NO_DETAILS,
  SWITCH_LABELS,
} from '../../../utils/constants';
import IconButton from '../../atoms/IconButton';
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';
import TextualSwitch from '../../molecules/TextualSwitch';
import Button from '../../atoms/Button';
import CheckboxLabel from '../../molecules/CheckboxWIthLabel';
import CheckBox from '../../atoms/Checkbox';
import InputField from '../../atoms/InputField';
import { Box } from '@mui/material';

export interface SubCategory {
  id: number;
  category: string;
  selected: boolean;
}

export interface Category {
  id: number;
  category: string;
  selected: boolean;
  indeterminate: boolean;
  subCategories: SubCategory[];
}

export interface TreeviewProps {
  selectedView: 'list' | 'box';
  expanded: string[];
  categories: Category[];
  manufacturers: {
    name: string;
    selected: boolean;
  }[];
  stockSelected: boolean;
  promotionSelected: boolean;
  handleCategoryChange: (categoryId: number) => void;
  handleSubCategoryChange: (categoryId: number, subCategoryId: number) => void;
  handleChange: (
    panel: string,
  ) => (event: React.SyntheticEvent, newExpanded: boolean) => void;
  handleManufacturerChange: (manufacturerName: string) => void;
  handleClearAll: () => void;
  handlePromotionSwitchChange: () => void;
  handleStockSwitchChange: () => void;
  handleListViewChange: () => void;
  handleBoxViewChange: () => void;
}

const MainContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '0.5rem',
});

const SwitchContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  paddingLeft: '2.75rem',
  gap: '0.375rem',
  paddingBottom: '0.375rem',
});

const Head = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
});

const ClearButton = styled(Button)({
  padding: '1rem 0px 1rem 0px',
});

const CategoryAccordionContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
});

const SubCategoryContainer = styled('div')({
  padding: '0.375rem 0 0.375rem 1.25rem',
});

const AccordionBottomBorderedContainer = styled('div')({
  borderBottom: `1px solid ${theme.palette.stroke.light}`,
});
const AccordionTopBorderedContainer = styled('div')({
  borderTop: `1px solid ${theme.palette.stroke.light}`,
});
const StyledInputBox = styled(Box)({
  textAlign: 'center',
  padding: '15px',
});

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({}) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    {...props}
    expandIcon={
      <KeyboardArrowDownIcon sx={{ color: theme.palette.primary.main }} />
    }
  />
))(({ theme }) => ({
  padding: '0.25rem 0',
  backgroundColor: theme.palette.white.main,
  flexDirection: 'row',
  flex: 1,
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '&:hover': {
    backgroundColor: theme.palette.grey[200],
  },
  '&:active': {
    backgroundColor: theme.palette.grey[400],
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({}) => ({
  padding: '0.375rem 0 0.375rem 0',
}));

const OptionsContainer = styled('div')({ paddingLeft: '2rem' });

const CategoryAccordionWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
});

const CustomizedAccordions: React.FC<TreeviewProps> = ({
  selectedView,
  expanded,
  categories,
  manufacturers,
  stockSelected,
  promotionSelected,
  handleCategoryChange,
  handleSubCategoryChange,
  handleChange,
  handleManufacturerChange,
  handleClearAll,
  handlePromotionSwitchChange,
  handleStockSwitchChange,
  handleListViewChange,
  handleBoxViewChange,
}) => {
  const [value, setValue] = React.useState('');
  const filteredManufacturer = manufacturers.filter((manfacturer) => {
    return manfacturer.name.toLowerCase().includes(value.toLowerCase());
  });
  console.log('filtered', manufacturers);
  return (
    <MainContainer>
      <Head>
        <Typography color={theme.palette.mediumEmphasis.main} variant={'h5'}>
          {FILTER_BY}
        </Typography>
        <div>
          <IconButton
            icon={<ListIcon style={{ padding: '0.5rem' }} color="inherit" />}
            onClick={handleListViewChange}
            selected={selectedView === 'list'}
          />
          <IconButton
            icon={
              <GridViewIcon
                fontSize="small"
                style={{ padding: '0.5rem' }}
                color="inherit"
              />
            }
            onClick={handleBoxViewChange}
            selected={selectedView === 'box'}
          />
        </div>
      </Head>
      <SwitchContainer>
        <TextualSwitch
          handleChange={handleStockSwitchChange}
          label={SWITCH_LABELS[0]}
          checked={stockSelected}
        />
        <TextualSwitch
          handleChange={handlePromotionSwitchChange}
          label={SWITCH_LABELS[1]}
          checked={promotionSelected}
        />
      </SwitchContainer>
      <OptionsContainer>
        <AccordionTopBorderedContainer>
          <AccordionBottomBorderedContainer>
            <Accordion
              expanded={expanded.includes('panel1')}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography
                  color={theme.palette.highEmphasis.main}
                  variant={'body2'}
                >
                  {ACCORDION_LABELS[0]}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {categories.map((item) => {
                  const isAnySubCategorySelected = item.subCategories.some(
                    (subItem) => subItem.selected,
                  );

                  const areAllSubCategoriesSelected = item.subCategories.every(
                    (subItem) => subItem.selected,
                  );

                  item.indeterminate =
                    isAnySubCategorySelected && !areAllSubCategoriesSelected;
                  return (
                    <Accordion
                      key={item.id}
                      expanded={expanded.includes(`panel${item.id}`)}
                      onChange={handleChange(`panel${item.id}`)}
                    >
                      <CategoryAccordionWrapper>
                        <CheckBox
                          categoyId={item.category + item.id}
                          checked={item.indeterminate ? false : item.selected}
                          handleCheckBoxChange={() =>
                            handleCategoryChange(item.id)
                          }
                          indeterminate={item.indeterminate}
                        />
                        <AccordionSummary
                          aria-controls={`panel${item.id}d-content`}
                          id={`panel${item.id}d-header`}
                        >
                          <Typography
                            color={theme.palette.highEmphasis.main}
                            variant={'caption4'}
                          >
                            {item.category}
                          </Typography>
                        </AccordionSummary>
                      </CategoryAccordionWrapper>
                      <AccordionDetails>
                        {item.subCategories.map((subItem) => {
                          return (
                            <CategoryAccordionContainer key={subItem.id}>
                              <SubCategoryContainer>
                                <CheckboxLabel
                                  label={subItem.category}
                                  onClick={() =>
                                    handleSubCategoryChange(item.id, subItem.id)
                                  }
                                  checked={subItem.selected}
                                />
                              </SubCategoryContainer>
                            </CategoryAccordionContainer>
                          );
                        })}
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          </AccordionBottomBorderedContainer>
        </AccordionTopBorderedContainer>
        <AccordionBottomBorderedContainer>
          <Accordion
            expanded={expanded.includes('panel2')}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography
                color={theme.palette.highEmphasis.main}
                variant={'body2'}
              >
                {ACCORDION_LABELS[1]}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <div style={{ maxHeight: '20vh', overflowY: 'scroll' }}>
                <InputField
                  fullWidth
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  primary={true}
                />
                {filteredManufacturer.length === 0 && (
                  <StyledInputBox>
                    <Typography
                      color={theme.palette.stroke.main}
                      variant="caption4"
                    >
                      {NO_DETAILS}
                    </Typography>
                  </StyledInputBox>
                )}
                {filteredManufacturer.map((manufacturer) => {
                  return (
                    <CategoryAccordionContainer key={manufacturer.name}>
                      <SubCategoryContainer>
                        <CheckboxLabel
                          label={manufacturer.name}
                          onClick={() =>
                            handleManufacturerChange(manufacturer.name)
                          }
                          checked={manufacturer.selected}
                        />
                      </SubCategoryContainer>
                    </CategoryAccordionContainer>
                  );
                })}
              </div>
            </AccordionDetails>
          </Accordion>
        </AccordionBottomBorderedContainer>
        <ClearButton
          variant="text"
          labelVariant="body2"
          labelColor={theme.palette.primary.main}
          onClick={handleClearAll}
        >
          {CLEAR_ALL}
        </ClearButton>
      </OptionsContainer>
    </MainContainer>
  );
};

export default CustomizedAccordions;
