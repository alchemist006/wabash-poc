import { createContext, useReducer, useContext } from 'react';
import * as React from 'react';
import { Product } from '../utils/types';

interface ProductProps extends Product {
  count?: number;
}

const types = {
  add: 'add',
  remove: 'remove',
  empty: 'empty',
  removeItem: 'removeItem',
  updateQuantity: 'updateQuantity',
} as const;

interface Cart {
  products: ProductProps[];
  count: number;
}
type payload = {
  value: number;
  id: number;
};
type addProduct = {
  qty?: number;
  product: ProductProps;
};

export interface ICartContext {
  cart: Cart;
  handleAddToCart: (product: addProduct) => void;
  handleRemoveFromCart: (id: number) => void;
  handleEmptyCart: (payload: number) => void;
  handleRemoveItem: (payload: number) => void;
  handleUpdateQuantity: (payload: payload) => void;
}

type actionType =
  | { action: typeof types.add; payload: addProduct }
  | { action: typeof types.remove; payload: number }
  | { action: typeof types.empty; payload: number }
  | { action: typeof types.removeItem; payload: number }
  | { action: typeof types.updateQuantity; payload: payload };

const defaultValues: ICartContext = {
  cart: { products: [], count: 0 },
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
  handleEmptyCart: () => {},
  handleRemoveItem: () => {},
  handleUpdateQuantity: () => {},
};

export const CartContext = createContext<ICartContext>(defaultValues);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const CartReducer = (state: Cart, actionType: actionType): Cart => {
    const { products, count } = state;
    const { payload, action } = actionType;
    switch (action) {
      case types.add:
        const { qty, product } = payload;
        const index = products.findIndex((item) => item.id === product.id);
        const updatedProducts = [...products];

        if (index !== -1) {
          console.log('updated', updatedProducts[index]);
          const quantity = qty ?? (updatedProducts[index].count ?? 0) + 1;

          updatedProducts[index] = {
            ...updatedProducts[index],
            count: quantity,
          };
        } else {
          console.log('seeing', count);
          const quantity = qty ?? 1;
          updatedProducts.splice(updatedProducts.length, 0, {
            ...product,
            count: quantity,
          });
        }

        return {
          ...state,
          products: updatedProducts,
        };
      case types.remove:
        if (products.length == 0) return state;
        const productIndex = products.findIndex((item) => item.id == payload);
        console.log('remove');
        if (productIndex != -1) {
          const updatedProducts = [...products];
          if ((products[productIndex].count as number) > 1) {
            updatedProducts[productIndex].count =
              (updatedProducts[productIndex].count ?? 0) - 1;
          } else {
            updatedProducts.splice(productIndex, 1);
          }

          return {
            ...state,
            products: updatedProducts,
            count: count - 1,
          };
        }

      case types.empty:
        console.log('empty');

        return {
          ...state,
          products: [],
          count: 0,
        };

      case types.updateQuantity:
        const { value, id } = payload;
        const updatedQuantity = [...products];
        const itemIndex = products.findIndex((product) => product.id == id);
        if (itemIndex != -1) {
          if (value > 0)
            updatedQuantity[itemIndex] = {
              ...updatedQuantity[itemIndex],
              count: value,
            };
          else {
            updatedQuantity.splice(itemIndex, 1);
          }
        } else {
          updatedQuantity[itemIndex] = {
            ...updatedQuantity[itemIndex],
            count: value,
          };
        }
        return {
          ...state,
          products: updatedQuantity,
        };

      case types.removeItem:
        const updatedProduct = products.filter(
          (product) => payload !== product.id,
        );
        console.log('up', updatedProduct);
        return {
          ...state,
          products: updatedProduct,
        };

      default:
        return state;
    }
  };

  const [cart, dispatch] = useReducer(CartReducer, defaultValues.cart);

  const handleAddToCart = (product: addProduct) => {
    dispatch({ action: types.add, payload: product });
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch({ action: types.remove, payload: id });
  };

  const handleEmptyCart = (id: number) => {
    dispatch({ action: types.empty, payload: id });
  };

  const handleRemoveItem = (id: number) => {
    dispatch({ action: types.removeItem, payload: id });
  };
  const handleUpdateQuantity = (payload: payload) => {
    dispatch({ action: types.updateQuantity, payload: payload });
  };

  const values = React.useMemo(
    () => ({
      handleAddToCart,
      handleRemoveFromCart,
      cart,
      handleEmptyCart,
      handleRemoveItem,
      handleUpdateQuantity,
    }),
    [
      handleAddToCart,
      handleRemoveFromCart,
      cart,
      handleEmptyCart,
      handleRemoveItem,
      handleUpdateQuantity,
    ],
  );
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
