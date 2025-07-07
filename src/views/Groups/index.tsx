"use client";
import { useTranslations } from "next-intl";
import { Plus } from "react-bootstrap-icons";

import Button from "@/views/shared/bootstrap/Button";

const Groups = () => {
  const t = useTranslations("Groups");

  return (
    <div className="page">
      <header className="page__header">
        <Button className="plus__button">
          <Plus size={18} />
        </Button>
        <h1 className="page__title">{t("title")} / 25</h1>
      </header>
    </div>
  );
};

export default Groups;
