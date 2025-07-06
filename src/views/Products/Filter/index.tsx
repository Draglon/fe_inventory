"use client";
import { useTranslations } from "next-intl";

import Select from "@/views/shared/bootstrap/Select";

const Products = () => {
  const t = useTranslations("Products");

  return (
    <header className="filter__header">
      <h1 className="filter__title">{t("title")} / 25</h1>
      <Select
        id={"1"}
        label="Тип: "
        options={[
          { key: "1", value: "qwe" },
          { key: "2", value: "asd" },
        ]}
      />
      <Select
        id={"1"}
        label="Спецификация: "
        options={[
          { key: "1", value: "qwe" },
          { key: "2", value: "asd" },
        ]}
      />
    </header>
  );
};

export default Products;
