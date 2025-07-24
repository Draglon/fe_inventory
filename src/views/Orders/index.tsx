"use client";
import { useTranslations } from "next-intl";

import PageHeader from "@/views/shared/PageHeader";
import OrdersList from "@/views/Orders/List";

const Orders = () => {
  const t = useTranslations();

  return (
    <div className="page">
      <PageHeader title={t("Orders.title")} quantity={25} withAddButton />
      <OrdersList />
    </div>
  );
};

export default Orders;
