"use client";
import { useTranslations } from "next-intl";

import { useAppDispatch } from "@/store/hooks";
import { setFilterParams } from "@/store/products/actions";
import fetchProducts from "@/store/products/operations/fetchProducts";
import Select from "@/views/shared/bootstrap/Select";

const ProductsFilterType = () => {
  const t = useTranslations();
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilterParams({ type: event.target.value }));
    dispatch(fetchProducts());
  };

  return (
    <Select
      id={"type"}
      label={t("Products.filter.type.label")}
      options={[
        {
          key: "all",
          value: "",
          label: t("Products.filter.type.option.all"),
        },
        {
          key: "phone",
          value: "phone",
          label: t("Products.filter.type.option.phone"),
        },
        {
          key: "monitor",
          value: "monitor",
          label: t("Products.filter.type.option.monitor"),
        },
      ]}
      onChange={handleChange}
    />
  );
};

export default ProductsFilterType;
