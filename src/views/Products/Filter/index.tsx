"use client";
import { useTranslations } from "next-intl";

import Select from "@/views/shared/bootstrap/Select";

const ProductsFilter = () => {
  const t = useTranslations();

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("event: ", event.target.value);
  };

  const handleSpecificationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    console.log("event: ", event.target.value);
  };

  return (
    <div className="filter">
      <Select
        id={"type"}
        label={t("Products.filter.type.label")}
        options={[
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
        onChange={handleTypeChange}
      />
      <Select
        id={"specification"}
        label={t("Products.filter.specification.label")}
        options={[
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
        onChange={handleSpecificationChange}
      />
    </div>
  );
};

export default ProductsFilter;
