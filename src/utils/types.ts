export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle3'
  | 'subtitle4'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'caption1'
  | 'caption2'
  | 'caption3'
  | 'caption4'
  | undefined;

export interface SlideProps {
  headText: string;
  subText: string;
  buttonLabel: string;
  onClick: () => void;
  bgImage: string;
}

export interface Product {
  id: number;
  image_src?: string;
  manufacturer: string;
  description: string;
  part_number: string;
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

export type ORDER = {
  id: number;
  orderNo: string;
  confirmationNo: string;
  orderDate: string;
  po: string;
  total: number;
  freightAmt: string;
  status: 'Confirmed' | 'Invoiced';
  orderBy: {
    name: string;
    accountNo: string;
    salesRepId: string;
  };
  shipping: {
    address: string;
    shippingMethod: string;
    shippingFrom: string;
  };
  productIds: number[];
};

export interface OrderData {
  data: ORDER[];
  count: number;
}

export type InvoiceType = {
  id: number;
  invoiceNo: string;
  invoiceDate: string;
  po: string;
  shipTo: string;
  shipFrom: string;
  total: number;
  freightAmount: string;
  terms: string;
  orderBy: {
    name: string;
    accountNo: string;
    salesRepId: string;
    orderNo: number;
  };
  shipping: {
    shippingMethod: string;
    shippingFrom: string;
  };
};

export interface InvoiceData {
  data: InvoiceType[];
  count: number;
}
