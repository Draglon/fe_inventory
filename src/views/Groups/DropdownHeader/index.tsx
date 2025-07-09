"use client";
import { useTranslations } from "next-intl";
import { Plus } from "react-bootstrap-icons";

import Button from "@/views/shared/bootstrap/Button";

type DropdownHeaderProps = {
  title: string;
};

const DropdownHeader = ({ title }: DropdownHeaderProps) => {
  const t = useTranslations("Groups");

  return (
    <header className="groups__dropdown-header">
      <h3 className="groups__dropdown-title">{title}</h3>
      <Button className="groups__dropdown-button-plus" variant="link">
        <Plus size={24} className="groups__dropdown-icon-plus" />
        <span className="groups__dropdown-text">{t("addProduct")}</span>
      </Button>
    </header>
  );
};

export default DropdownHeader;
