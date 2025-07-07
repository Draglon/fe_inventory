"use client";
import { useTranslations } from "next-intl";
import { Plus } from "react-bootstrap-icons";

import ParishesList from "@/views/Parishes/List";
import Button from "@/views/shared/bootstrap/Button";

const Parishes = () => {
  const t = useTranslations("Parishes");

  return (
    <div className="page">
      <header className="page__header">
        <Button className="plus__button">
          <Plus size={18} />
        </Button>
        <h1 className="page__title">{t("title")} / 25</h1>
      </header>
      <ParishesList />
    </div>
  );
};

export default Parishes;
