import { useState } from "react";
import { Product } from "../types/product.interfaces";

type ProductInCart = {
  count: number;
} & Product;

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCartChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((prev) => {
      const productInCart: ProductInCart = prev[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...prev,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: _, ...rest } = prev;
      return rest;
    });
  };

  return {
    shoppingCart,
    onProductCartChange,
  };
};
