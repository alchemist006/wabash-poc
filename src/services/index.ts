import { ProductDetailProps } from '../components/organisms/ProductDetails';
import Api from '../utils/api';
import {
  InvoiceData,
  InvoiceType,
  ORDER,
  OrderData,
  Product,
} from '../utils/types';

interface ProductData {
  data: Product[];
  count: number;
}

export const getProductData = async (
  searchQuery: string,
): Promise<ProductData> => {
  try {
    const response = await Api.get(
      `/products/?_page=1&_limit=6&q=${searchQuery}`,
    );
    // console.log(response.headers);
    return { data: response.data, count: response.headers['x-total-count'] };
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getAllProducts = async (
  pageNumber: number,
  pageSize: number,
): Promise<ProductData> => {
  try {
    const getEndPoint =
      pageNumber == 0 && pageSize == 0
        ? `/products`
        : `/products?_page=${pageNumber}&_limit=${pageSize}`;
    const response = await Api.get(getEndPoint);
    return { data: response.data, count: response.headers['x-total-count'] };
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getProductById = async (
  id: number,
): Promise<ProductDetailProps> => {
  try {
    const response = await Api.get(`/products?id=${id}`);
    return response.data[0];
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getAllOrders = async (
  pageNumber: number,
  pageSize: number,
): Promise<OrderData> => {
  try {
    const getEndPoint =
      pageNumber == 0 && pageSize == 0
        ? `/orders`
        : `/orders?_page=${pageNumber}&_limit=${pageSize}`;
    const response = await Api.get(getEndPoint);
    return { data: response.data, count: response.headers['x-total-count'] };
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getAllInvoices = async (
  pageNumber: number,
  pageSize: number,
): Promise<InvoiceData> => {
  try {
    const getEndPoint =
      pageNumber == 0 && pageSize == 0
        ? `/invoices`
        : `/invoices?_page=${pageNumber}&_limit=${pageSize}`;
    const response = await Api.get(getEndPoint);
    return { data: response.data, count: response.headers['x-total-count'] };
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getOrderById = async (id: number): Promise<ORDER> => {
  try {
    const response = await Api.get(`/orders?id=${id}`);
    return response.data[0];
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getInvoiceById = async (id: number): Promise<InvoiceType> => {
  try {
    const response = await Api.get(`/invoices?id=${id}`);
    return response.data[0];
  } catch (e) {
    console.log(e);
    throw e;
  }
};
