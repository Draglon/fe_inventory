"use client";
import clsx from "clsx";

import formatPrice from "@/utils/formatPrice";

type PriceProps = {
  className?: string;
  price: { value: number; symbol: string };
  testid?: string;
};

const Price = ({ className, price, testid }: PriceProps) => {
  return (
    <div className={clsx("text-nowrap", className)} data-testid={testid}>
      {formatPrice(price)}
    </div>
  );
};

export default Price;
