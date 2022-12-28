import { useContext } from "react";
import { ProductContext } from "./product-card";

export const ProductTitle = ({ className }: { className?: string }) => {
  const { product } = useContext(ProductContext);
  return <span className={className}>{product.title}</span>;
};
