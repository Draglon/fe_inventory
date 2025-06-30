"use client";
import { useTranslations } from "next-intl";

const Users = () => {
  const t = useTranslations("Users");

  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
};

export default Users;
