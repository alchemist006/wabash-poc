import React from 'react';
import MainTemplate from '../../../src/components/templates/MainTemplate';
import CustomFooter from '../../components/organisms/Footer';
import Header from '../../components/organisms/Header';
import ProductDetails from '../../components/organisms/ProductDetails';

const ProductDetailsPage = () => {
  return (
    <MainTemplate
      footer={<CustomFooter />}
      content={<ProductDetails />}
      header={<Header />}
    />
  );
};

export default ProductDetailsPage;
