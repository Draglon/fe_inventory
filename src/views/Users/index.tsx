"use client";
import { useTranslations } from "next-intl";

import PageHeader from "@/views/shared/PageHeader";

const Users = () => {
  const t = useTranslations();

  return (
    <div className="page">
      <PageHeader title={t("Users.title")} />
    </div>
  );
};

export default Users;
