"use client";
import { useTranslations } from "next-intl";

import PageHeader from "@/views/shared/PageHeader";
import ParishesList from "@/views/Parishes/List";

const Parishes = () => {
  const t = useTranslations();

  return (
    <div className="page">
      <PageHeader title={t("Parishes.title")} quantity={25} withAddButton />
      <ParishesList />
    </div>
  );
};

export default Parishes;
