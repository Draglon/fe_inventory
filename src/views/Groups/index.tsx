"use client";
import { useTranslations } from "next-intl";

const Groups = () => {
  const t = useTranslations("Groups");

  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
};

export default Groups;
