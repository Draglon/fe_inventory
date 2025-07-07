"use client";
import { useTranslations } from "next-intl";

import PageHeader from "@/views/shared/PageHeader";
import ProductsFilter from "@/views/Products/Filter";
import ProductsList from "@/views/Products/List";

const Products = () => {
  const t = useTranslations("Products");

  return (
    <div className="page">
      <PageHeader title={t("title")} quantity={25}>
        <ProductsFilter />
      </PageHeader>
      <ProductsList />
    </div>
  );
};

export default Products;
