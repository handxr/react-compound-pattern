import { createContext } from "react";
import { useProduct } from "../hooks/use-product";
import { InitialValues, Product } from "../types/product.interfaces";

type ProductCardProps = {
  children: ({ resetCounter }: any) => React.ReactNode;
  product: Product;
  className?: string;
  style?: React.CSSProperties;
  onChange?: ({ product, count }: { product: Product; count: number }) => void;
  value?: number;
  initialValues?: InitialValues;
};

type ProductContextProps = {
  counter: number;
  increaseBy: (n: number) => void;
  product: Product;
  maxCount?: number;
};

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const { counter, increaseBy, resetCounter } = useProduct({
    product,
    onChange,
    value,
    initialValues,
  });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount: initialValues?.maxCount,
      }}
    >
      <div className={className} style={style}>
        {children({ resetCounter })}
      </div>
    </Provider>
  );
};
