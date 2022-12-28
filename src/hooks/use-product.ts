import { useEffect, useRef, useState } from "react";
import type { InitialValues, Product } from "../types/product.interfaces";

type UseProductProps = {
  product: Product;
  onChange?: ({ product, count }: { product: Product; count: number }) => void;
  value?: number;
  initialValues?: InitialValues;
};

export const useProduct = ({
  product,
  onChange,
  value,
  initialValues,
}: UseProductProps) => {
  const [counter, setCounter] = useState<number>(
    initialValues?.count || value || 0
  );

  const isMounted = useRef(false);

  const isControlled = useRef(Boolean(onChange));

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({
        count: value,
        product,
      });
    }

    if (initialValues?.maxCount && counter + value > initialValues.maxCount)
      return setCounter(initialValues.maxCount);

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
  };

  const resetCounter = () => {
    setCounter(initialValues?.count || 0);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value || 0);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return {
    counter,
    increaseBy,
    resetCounter,
  };
};
