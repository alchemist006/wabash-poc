import React, { useEffect, useState } from 'react';
import MainTemplate from '../../components/templates/MainTemplate';
import Header from '../../components/organisms/Header';
import GlobalSection from '../../components/atoms/GlobalSection';
import { Box, styled } from '@mui/material';
import {
  ALL_PARTS,
  CONTACT_SIGNIN,
  MORE_DETAILS,
  PARTS_HERO_SECTION_DATA,
  SIGNIN_TXT,
  SORT_OPTIONS,
} from '../../utils/constants';
import Typography from '../../components/atoms/Typography';
import theme from '../../theme';
import CustomFooter from '../../components/organisms/Footer';
import HeroSection from '../../components/organisms/HeroSection';
import DropDown from '../../components/molecules/SortDropDown';
import Button from '../../components/atoms/Button';
import CustomizedAccordions, {
  Category,
} from '../../components/organisms/TreeView';
import { getAllProducts } from '../../services';
import { Product } from '../../utils/types';
import ProductListCard from '../../components/molecules/ProductListCard';
import ProductCard from '../../components/molecules/ProductCard';
import { useNavigate } from 'react-router-dom';
import CustomPagination from '../../components/organisms/Pagination';
import { usePagination } from '../../components/organisms/Pagination/hook';
import { useCartContext } from '../../context';

const ContentMainContianer = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const ActionsWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const SigninWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '0.5rem',
});

const HFlexWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
});

const AllPartsWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  gap: '2rem',
});

const TreeViewWrapper = styled('div')({
  width: '18.75rem',
});

const ProductCardsWrapper = styled('div')({
  flex: 1,
  gap: '70px',
  display: 'flex',
  flexDirection: 'column',
});

const ListViewWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const BoxViewWrapper = styled(Box)({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  flexDirection: 'column',
  rowGap: '1rem',
  columnGap: '1.5rem',
  '@media(max-width:1380px)': {
    gridTemplateColumns: 'repeat(3,1fr)',
  },
  '@media(max-width:1050px)': {
    gridTemplateColumns: 'repeat(2,1fr)',
  },
  '@media(max-width:830px)': {
    gridTemplateColumns: 'repeat(1,1fr)',
  },
});

export const CATEGORIES_LIST: Category[] = [
  {
    id: 7,
    category: 'Susp Ride Control',
    selected: false,
    indeterminate: false,
    subCategories: [
      { id: 101, category: 'Trailer Suspensions', selected: false },
      { id: 102, category: 'Leaf Springs & U-Bolts', selected: false },
      { id: 103, category: 'Shock Absorbers', selected: false },
      { id: 104, category: 'Truck Suspensions', selected: false },
      { id: 105, category: 'Air Springs', selected: false },
    ],
  },
  {
    id: 8,
    category: 'Safety Prods',
    selected: false,
    indeterminate: false,
    subCategories: [
      { id: 106, category: 'Misc Safety Products', selected: false },
      { id: 107, category: 'Mudflaps Brkts Parts', selected: false },
      { id: 108, category: 'Fastners-Screws', selected: false },
      { id: 109, category: 'Mirrors', selected: false },
      { id: 110, category: 'Liftgate', selected: false },
      { id: 111, category: 'Fastners-Screws', selected: false },
    ],
  },
  {
    id: 3,
    category: 'Electrical',
    selected: false,
    indeterminate: false,
    subCategories: [
      { id: 112, category: 'Electrical Products', selected: false },
      { id: 113, category: 'Misc Hardware', selected: false },
      { id: 114, category: 'Stop & Turn Lights', selected: false },
      { id: 115, category: 'Lighting', selected: false },
      { id: 116, category: 'Safety Lights & Alarms', selected: false },
      { id: 117, category: 'Reflective Tape', selected: false },
      { id: 118, category: 'Reflectors', selected: false },
    ],
  },
  {
    id: 4,
    category: 'Axle Components',
    selected: false,
    indeterminate: false,
    subCategories: [
      { id: 119, category: 'Axl Comp Tubes', selected: false },
      { id: 120, category: 'Slack Adjusters', selected: false },
    ],
  },
  {
    id: 5,
    category: 'Wheel Parts',
    selected: false,
    indeterminate: false,
    subCategories: [
      { id: 121, category: 'Wheel Attach Parts', selected: false },
      { id: 122, category: 'Hubs & Drum Assemblies', selected: false },
      { id: 123, category: 'Drums', selected: false },
      { id: 124, category: 'Oil Seals/Hub Gaskets', selected: false },
      { id: 125, category: 'Bearings', selected: false },
      { id: 126, category: 'Disc Whls', selected: false },
      { id: 127, category: 'Hubdometers', selected: false },
    ],
  },
  {
    id: 6,
    category: 'Miscellaneous',
    selected: false,
    indeterminate: false,
    subCategories: [
      { id: 128, category: 'Temporary Nonstocks', selected: false },
      { id: 129, category: 'Damaged Part', selected: false },
      { id: 130, category: 'Catalogs', selected: false },
    ],
  },
];

export const MANUFACTURERS_LIST = [
  { name: '3m Electrical Prod div', selected: false },
  { name: 'Aaa supply', selected: false },
  { name: 'Accuride', selected: false },
  { name: 'Advanced Distrib Svcs', selected: false },
  { name: 'Advanced Plastic Corp', selected: false },
  { name: 'Alcoa Fastening Sys', selected: false },
  { name: 'Alfa Tools', selected: false },
  { name: 'Alkon Corporation', selected: false },
  { name: 'Almag Aluminum', selected: false },
  { name: 'Alro Steel Corp', selected: false },
  { name: 'Aluminum Lines', selected: false },
  { name: 'Active Brass Foundry', selected: false },
];

const PartsPage = () => {
  const navigate = useNavigate();
  const { handleAddToCart, cart } = useCartContext();
  const handleNavigate = (id: number) => {
    navigate(`/${id}/product-details`, { state: { id: id } });
  };
  const [pageCount, setPageCount] = useState<number>(0);

  const [products, setProducts] = useState<Product[]>();
  const [selectedView, setSelectedView] = React.useState<'list' | 'box'>(
    'list',
  );
  const [sortValue, setSortValue] = useState<string>('Product Name A-Z');
  const [expanded, setExpanded] = React.useState<string[]>([]);
  const [categories, setCategories] =
    React.useState<Category[]>(CATEGORIES_LIST);
  const [manufacturers, setManufacturers] = React.useState([
    ...MANUFACTURERS_LIST,
  ]);
  const [stockSelected, setStockSelected] = React.useState<boolean>(false);
  const [promotionSelected, setPromotionSelected] =
    React.useState<boolean>(false);
  const handleCategoryChange = (categoryId: number) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              selected: !category.selected,
              subCategories: category.subCategories.map((subCategory) => ({
                ...subCategory,
                selected: !category.selected,
              })),
            }
          : category,
      ),
    );
  };
  const handleSubCategoryChange = (
    categoryId: number,
    subCategoryId: number,
  ) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              selected: category.subCategories.every((subCategory) =>
                subCategory.id === subCategoryId
                  ? !subCategory.selected
                  : subCategory.selected,
              ),
              subCategories: category.subCategories.map((subCategory) =>
                subCategory.id === subCategoryId
                  ? { ...subCategory, selected: !subCategory.selected }
                  : subCategory,
              ),
            }
          : category,
      ),
    );
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded((prevExpanded) =>
        newExpanded
          ? [...prevExpanded, panel]
          : prevExpanded.filter((p) => p !== panel),
      );
    };
  const { handlePageNumberChange, handlePageSizeChange, pageNumber, pageSize } =
    usePagination(8, 1);

  const fetchData = async () => {
    const productData = await getAllProducts(0, 0);
    setProducts(productData.data);
    setPageCount(productData.count);
    console.log('paginationdata', productData.data);
  };

  useEffect(() => {
    // console.log(categories);
  }, [categories]);

  useEffect(() => {
    // console.log(manufacturers);
  }, [manufacturers]);

  useEffect(() => {
    // console.log(stockSelected);
  }, [stockSelected]);

  useEffect(() => {
    // console.log(promotionSelected);
  }, [promotionSelected]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, pageSize]);

  const handleManufacturerChange = (manufacturerName: string) => {
    setManufacturers((prevManufacturers) =>
      prevManufacturers.map((manufacturer) =>
        manufacturer.name === manufacturerName
          ? { ...manufacturer, selected: !manufacturer.selected }
          : manufacturer,
      ),
    );
  };

  const handleClearAll = () => {
    setCategories(
      categories.map((category) => ({
        ...category,
        selected: false,
        subCategories: category.subCategories.map((subCategory) => ({
          ...subCategory,
          selected: false,
        })),
      })),
    );
    setManufacturers(
      manufacturers.map((manufacturer) => ({
        ...manufacturer,
        selected: false,
      })),
    );
    setStockSelected(false);
    setPromotionSelected(false);
  };

  const handleSortChange = (value: string) => {
    setSortValue(value as string);
  };

  const handlePromotionSwitchChange = () => {
    setPromotionSelected(!promotionSelected);
  };
  const handleStockSwitchChange = () => {
    setStockSelected(!stockSelected);
  };
  const handleListViewChange = () => {
    setSelectedView('list');
  };
  const handleBoxViewChange = () => {
    setSelectedView('box');
  };

  const Content = () => {
    const filteredProducts = products
      ?.filter((product) => {
        if (
          (stockSelected && !promotionSelected) ||
          (!stockSelected && promotionSelected)
        ) {
          if (stockSelected && !promotionSelected) {
            return product.stocked === 'yes';
          } else {
            return product.stocked === 'no';
          }
        } else {
          return true;
        }
      })
      .filter((product) => {
        if (
          categories.some((category) => category.selected) ||
          manufacturers.some((manufacturer) => manufacturer.selected)
        ) {
          return (
            categories.some((category) =>
              category.subCategories.some(
                (subCategory) =>
                  subCategory.selected &&
                  subCategory.category === product.category,
              ),
            ) ||
            manufacturers.some(
              (manufacturer) =>
                manufacturer.selected &&
                manufacturer.name === product.manufacturer,
            )
          );
        } else {
          return true;
        }
      });

    const sortedProducts = filteredProducts?.sort((a, b) => {
      switch (sortValue) {
        case 'Product Name A-Z':
          return a.description.localeCompare(b.description);
        case 'Product Name Z-A':
          return b.description.localeCompare(a.description);
        case 'Manfacturer A-Z':
          return a.manufacturer.localeCompare(b.manufacturer);
        case 'Manfacturer Z-A':
          return b.manufacturer.localeCompare(a.manufacturer);
        case 'Part Number A-Z':
          return a.part_number.localeCompare(b.part_number);
        case 'Part Number Z-A':
          return b.part_number.localeCompare(a.part_number);
        default:
          return 0;
      }
    });
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pageCount = sortedProducts?.length ?? 0;

    const handleAddItem = (product: Product) => {
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id == product.id,
      );
      if (existingProductIndex == -1) {
        handleAddToCart({ product, qty: 1 });
      }
      console.log('havdle cart');
      navigate('/cart');
    };
    return (
      <ContentMainContianer>
        <HeroSection
          heading={PARTS_HERO_SECTION_DATA.heading}
          description={PARTS_HERO_SECTION_DATA.description}
          defaultImage={PARTS_HERO_SECTION_DATA.defaultImage}
          fallBackImage={PARTS_HERO_SECTION_DATA.fallBackImage}
          showButton={PARTS_HERO_SECTION_DATA.showButton}
          caption={PARTS_HERO_SECTION_DATA.caption}
        />
        <GlobalSection
          containerWidth="90%"
          sectionPadding="5.875rem 0"
          sectionBgColor={theme.palette.backgroundElevation.light}
        >
          <ActionsWrapper>
            <Typography
              color={theme.palette.highEmphasis.main}
              variant={'body1'}
            >
              {ALL_PARTS}
            </Typography>
            <DropDown
              handleChange={handleSortChange}
              options={SORT_OPTIONS}
              value={sortValue}
            />
          </ActionsWrapper>
        </GlobalSection>
        <GlobalSection containerWidth="90%" sectionPadding="5.875rem 0">
          <AllPartsWrapper>
            <TreeViewWrapper>
              <CustomizedAccordions
                selectedView={selectedView}
                expanded={expanded}
                categories={categories}
                manufacturers={manufacturers}
                stockSelected={stockSelected}
                promotionSelected={promotionSelected}
                handleCategoryChange={handleCategoryChange}
                handleSubCategoryChange={handleSubCategoryChange}
                handleChange={handleChange}
                handleManufacturerChange={handleManufacturerChange}
                handleClearAll={handleClearAll}
                handlePromotionSwitchChange={handlePromotionSwitchChange}
                handleStockSwitchChange={handleStockSwitchChange}
                handleListViewChange={handleListViewChange}
                handleBoxViewChange={handleBoxViewChange}
              />
            </TreeViewWrapper>
            <ProductCardsWrapper>
              {selectedView === 'list' ? (
                <ListViewWrapper>
                  {sortedProducts?.slice(startIndex, endIndex).map((prod) => {
                    return (
                      <ProductListCard
                        key={prod.id}
                        CardHash={prod.description}
                        CardNumber={prod.part_number}
                        CardName={prod.manufacturer}
                        image={prod.image_src}
                        handleClick={() => {
                          handleNavigate(prod.id);
                        }}
                        handleAddToCart={() => {
                          handleAddItem(prod);
                        }}
                      />
                    );
                  })}
                </ListViewWrapper>
              ) : (
                <BoxViewWrapper>
                  {sortedProducts?.slice(startIndex, endIndex).map((prod) => {
                    return (
                      <ProductCard
                        key={prod.id}
                        productName={prod.description}
                        productNumber={prod.part_number}
                        product={prod.manufacturer}
                        onClick={() => {
                          handleNavigate(prod.id);
                        }}
                      />
                    );
                  })}
                </BoxViewWrapper>
              )}
              <CustomPagination
                pageCount={Math.ceil(pageCount / pageSize)}
                items={[8, 10, 20, 30]}
                handlePageSizeChange={(pageSize: number) => {
                  handlePageSizeChange(pageSize);
                }}
                handlePageNumberChange={(pageNumber: number) =>
                  handlePageNumberChange(pageNumber)
                }
                pageSize={pageSize}
                pageNumber={pageNumber}
              />
            </ProductCardsWrapper>
          </AllPartsWrapper>
        </GlobalSection>
        <GlobalSection
          containerWidth="90%"
          sectionPadding="5.875rem 0"
          sectionBgColor={theme.palette.backgroundElevation.light}
        >
          <SigninWrapper>
            <HFlexWrapper>
              <Button
                labelVariant="subtitle2"
                onClick={() => {}}
                labelColor={theme.palette.primary.main}
                variant="text"
                hoverColor={theme.palette.primary.main}
              >
                {SIGNIN_TXT}
              </Button>
              <Typography
                color={theme.palette.highEmphasis.main}
                variant={'subtitle2'}
              >
                {MORE_DETAILS}
              </Typography>
            </HFlexWrapper>
            <Typography
              color={theme.palette.highEmphasis.main}
              variant={'subtitle2'}
            >
              {CONTACT_SIGNIN}
            </Typography>
          </SigninWrapper>
        </GlobalSection>
      </ContentMainContianer>
    );
  };
  return (
    <MainTemplate
      footer={<CustomFooter />}
      content={<Content />}
      header={<Header />}
    />
  );
};

export default PartsPage;
