import { useContext } from "react";
import { ProductContext } from "./product-card";

export const ProductButtons = ({ className }: { className?: string }) => {
  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  return (
    <div style={{ display: "flex", gap: 4 }} className={className}>
      <button
        onClick={() => {
          increaseBy(-1);
        }}
      >
        -
      </button>
      <div>{counter}</div>
      <button
        onClick={() => {
          increaseBy(1);
        }}
        disabled={counter === maxCount}
      >
        +
      </button>
    </div>
  );
};
