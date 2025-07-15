"use client";
import { useTranslations } from "next-intl";

import PageHeader from "@/views/shared/PageHeader";
import ProductsFilter from "@/views/Products/Filter";
import ProductsList from "@/views/Products/List";

const Products = () => {
  const t = useTranslations();

  return (
    <div className="page">
      <PageHeader title={t("Products.title")} quantity={25}>
        <ProductsFilter />
      </PageHeader>
      <ProductsList />
    </div>
  );
};

export default Products;
