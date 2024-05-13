import React, { useEffect, useState } from 'react';
import MainTemplate from '../../components/templates/MainTemplate';
import Header from '../../components/organisms/Header';
import GlobalSection from '../../components/atoms/GlobalSection';
import { styled } from '@mui/material';
import {
  CATEGORIES_HEAD,
  CONTACT_SIGNIN,
  MORE_DETAILS,
  CATEGORIES_HERO_SECTION_DATA,
  SIGNIN_TXT,
  SORT_OPTIONS,
  BACK,
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
import { CATEGORIES_LIST, MANUFACTURERS_LIST } from '../Parts';
import CategoryCard from '../../components/molecules/CategoryCard';
import { convertToUpperCase } from '../../utils/formatters';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import CustomPagination from '../../components/organisms/Pagination';
import GlobalSearch from '../../components/organisms/GlobalSearchBar';
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
  display: 'flex',
  flexDirection: 'column',
  gap: '70px',
});

const ListViewWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const BoxViewWrapper = styled('div')({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  flexDirection: 'column',
  rowGap: '1rem',
  columnGap: '1.5rem',
});

const CategoryCardsWrapper = styled('div')({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  flexDirection: 'column',
  rowGap: '1rem',
  columnGap: '1.5rem',
  cursor: 'pointer',
});

const BackButtonWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  cursor: 'pointer',
  alignItems: 'center',
  marginBottom: '1rem',
});

const CategoriesPage = () => {
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
  const [partsTitle, setPartsTitle] = React.useState<string>('');
  const [currentPageState, setCurrentPageState] = useState<
    'categories' | 'parts'
  >('categories');
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
              selected: category.subCategories.some(
                (subCategory) => subCategory.selected,
              ),
              indeterminate: category.subCategories.some(
                (subCategory) => subCategory.selected && !subCategory.selected,
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
    console.log('pageDataCount', productData.count);
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
    const handleCategoryCardClick = (
      categoryId: number,
      categoryName: string,
    ) => {
      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category.id === categoryId
            ? {
                ...category,
                selected: true,
                subCategories: category.subCategories.map((subCategory) => ({
                  ...subCategory,
                  selected: true,
                })),
              }
            : category,
        ),
      );

      setCurrentPageState('parts');
      setPartsTitle(categoryName);
    };

    const handleBackClick = () => {
      handleClearAll();
      setCurrentPageState('categories');
    };

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
          heading={CATEGORIES_HERO_SECTION_DATA.heading}
          description={CATEGORIES_HERO_SECTION_DATA.description}
          defaultImage={CATEGORIES_HERO_SECTION_DATA.defaultImage}
          fallBackImage={CATEGORIES_HERO_SECTION_DATA.fallBackImage}
          showButton={CATEGORIES_HERO_SECTION_DATA.showButton}
        />

        {currentPageState === 'parts' ? (
          <>
            <GlobalSection
              containerWidth="90%"
              sectionPadding="5.875rem 0"
              sectionBgColor={theme.palette.backgroundElevation.light}
            >
              <BackButtonWrapper onClick={handleBackClick}>
                <ArrowBackIcon sx={{ color: theme.palette.icons.dark }} />
                <Typography
                  color={theme.palette.icons.dark}
                  variant="subtitle4"
                >
                  {BACK}
                </Typography>
              </BackButtonWrapper>
              <ActionsWrapper>
                <Typography
                  color={theme.palette.highEmphasis.main}
                  variant={'h3'}
                >
                  {convertToUpperCase(partsTitle)}
                </Typography>
                <div style={{ width: '45%' }}>
                  <GlobalSearch />
                </div>

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
                      {sortedProducts
                        ?.slice(startIndex, endIndex)
                        .map((prod) => {
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
                      {sortedProducts
                        ?.slice(startIndex, endIndex)
                        ?.map((prod) => {
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
          </>
        ) : null}
        {currentPageState === 'categories' ? (
          <>
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
                  {CATEGORIES_HEAD}
                </Typography>
              </ActionsWrapper>
            </GlobalSection>
            <GlobalSection containerWidth="90%" sectionPadding="1.875rem 0">
              <CategoryCardsWrapper>
                {categories.map((item) => {
                  return (
                    <CategoryCard
                      key={'category_' + item.category}
                      handleClick={() => {
                        handleCategoryCardClick(item.id, item.category);
                      }}
                      content={item.category}
                    />
                  );
                })}
              </CategoryCardsWrapper>
            </GlobalSection>
          </>
        ) : null}
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

export default CategoriesPage;
