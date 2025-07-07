"use client";
import { useTranslations } from "next-intl";

import PageHeader from "@/views/shared/PageHeader";
import LocalSwitcherSelect from "@/views/shared/LocalSwitcherSelect";

const Settings = () => {
  const t = useTranslations("Settings");

  return (
    <div className="page">
      <PageHeader title={t("title")} />
      <LocalSwitcherSelect />
    </div>
  );
};

export default Settings;
