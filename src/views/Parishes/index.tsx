"use client";
import { useTranslations } from "next-intl";

const Parishes = () => {
  const t = useTranslations("Parishes");

  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
};

export default Parishes;
