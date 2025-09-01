"use client";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

import { useAppDispatch } from "@/store/hooks";
import fetchProducts from "@/store/products/operations/fetchProducts";
import PageHeader from "@/views/shared/PageHeader";
import ProductsFilter from "@/views/Products/Filter";
import ProductsList from "@/views/Products/List";

const Products = () => {
  const t = useTranslations();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
