import type { Meta, StoryObj } from '@storybook/react';
import CustomizedAccordions from '.';
import { CATEGORIES_LIST, MANUFACTURERS_LIST } from '../../../pages/Parts';

const meta: Meta<typeof CustomizedAccordions> = {
  title: 'Organisms/CustomizedAccordions',
  component: CustomizedAccordions,
};

export default meta;
type Story = StoryObj<typeof CustomizedAccordions>;

export const Default: Story = {
  args: {
    selectedView: 'list',
    expanded: [],
    categories: CATEGORIES_LIST,
    manufacturers: MANUFACTURERS_LIST,
    stockSelected: false,
    promotionSelected: false,
    handleCategoryChange: (categoryId: number) => {},
    handleSubCategoryChange: (categoryId: number, subCategoryId: number) => {},
    handleChange: (panel: string) => () => {},
    handleManufacturerChange: (manufacturerName: string) => {},
    handleClearAll: () => {},
    handlePromotionSwitchChange: () => {},
    handleStockSwitchChange: () => {},
    handleListViewChange: () => {},
    handleBoxViewChange: () => {},
  },
};
