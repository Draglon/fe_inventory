"use client";
import clsx from "clsx";
import { useTranslations } from "next-intl";

type ProductAvailableProps = {
  status: number;
};

const ProductAvailable = ({ status }: ProductAvailableProps) => {
  const t = useTranslations();
  const isFree = status === 1;

  return (
    <span
      className={clsx("status", { "status--free": isFree })}
      data-testid="productStatusAvailable"
    >
      {t(`shared.status.${isFree ? "free" : "repair"}`)}
    </span>
  );
};

export default ProductAvailable;
