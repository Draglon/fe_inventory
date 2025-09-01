"use client";
import clsx from "clsx";
import { useTranslations } from "next-intl";

type ProductStatusProps = {
  status: number;
};

const ProductStatus = ({ status }: ProductStatusProps) => {
  const t = useTranslations();
  const isNew = status === 1;

  return (
    <span
      className={clsx("status", { "status--new": isNew })}
      data-testid="productStatus"
    >
      {t(`shared.status.${isNew ? "new" : "used"}`)}
    </span>
  );
};

export default ProductStatus;
