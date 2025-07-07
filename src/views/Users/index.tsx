"use client";
import { useTranslations } from "next-intl";

import PageHeader from "@/views/shared/PageHeader";

const Users = () => {
  const t = useTranslations("Users");

  return (
    <div className="page">
      <PageHeader title={t("title")} />
    </div>
  );
};

export default Users;
