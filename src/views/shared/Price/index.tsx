"use client";
import clsx from "clsx";

type PriceProps = {
  className?: string;
  price: { value: number; symbol: string };
  testid?: string;
};

const Price = ({ className, price, testid }: PriceProps) => {
  return (
    <div className={clsx("text-nowrap", className)} data-testid={testid}>
      {price.value} {price.symbol}
    </div>
  );
};

export default Price;
