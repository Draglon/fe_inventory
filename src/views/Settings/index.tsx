"use client";
import { useTranslations } from "next-intl";

const Settings = () => {
  const t = useTranslations("Settings");

  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
};

export default Settings;
