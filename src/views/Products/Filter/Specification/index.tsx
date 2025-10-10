"use client";
import { useTranslations } from "next-intl";

import { useAppDispatch } from "@/store/hooks";
import { setFilterParams } from "@/store/products/actions";
import fetchProducts from "@/store/products/operations/fetchProducts";
import Select from "@/views/shared/bootstrap/Select";

const ProductsFilterSpecification = () => {
  const t = useTranslations();
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilterParams({ specification: event.target.value }));
    dispatch(fetchProducts());
  };

  return (
    <Select
      id={"specification"}
      label={t("Products.filter.specification.label")}
      options={[
        {
          key: "all",
          value: "",
          label: t("Products.filter.specification.option.all"),
        },
        {
          key: "phone",
          value: "phone",
          label: t("Products.filter.specification.option.phone"),
        },
        {
          key: "monitor",
          value: "monitor",
          label: t("Products.filter.specification.option.monitor"),
        },
      ]}
      onChange={handleChange}
    />
  );
};

export default ProductsFilterSpecification;
