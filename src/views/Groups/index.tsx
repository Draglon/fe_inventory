"use client";
import { useTranslations } from "next-intl";

import PageHeader from "@/views/shared/PageHeader";

const Groups = () => {
  const t = useTranslations("Groups");

  return (
    <div className="page">
      <PageHeader title={t("title")} quantity={25} withAddButton />
    </div>
  );
};

export default Groups;
