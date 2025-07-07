"use client";
import { useTranslations } from "next-intl";

import LocalSwitcherSelect from "@/views/shared/LocalSwitcherSelect";

const Settings = () => {
  const t = useTranslations("Settings");

  return (
    <div>
      <h1>{t("title")}</h1>

      <LocalSwitcherSelect />
    </div>
  );
};

export default Settings;
