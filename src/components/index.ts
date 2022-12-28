import { ProductCard as ProductCardHOC } from "./product-card";
import { ProductTitle } from "./product-title";
import { ProductButtons } from "./product-buttons";

export const ProductCard = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Buttons: ProductButtons,
});
