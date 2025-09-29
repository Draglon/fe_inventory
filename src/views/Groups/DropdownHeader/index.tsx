"use client";
import { useTranslations } from "next-intl";
import { Plus } from "react-bootstrap-icons";
import { noop } from "lodash";

import Button from "@/views/shared/bootstrap/Button";

type DropdownHeaderProps = {
  title: string;
};

const DropdownHeader = ({ title }: DropdownHeaderProps) => {
  const t = useTranslations();

  return (
    <header className="groups__dropdown-header">
      <h3 className="groups__dropdown-title">{title}</h3>
      <Button
        className="groups__dropdown-button-plus"
        variant="link"
        data-testid="button-plus"
        onClick={noop}
      >
        <Plus className="groups__dropdown-icon-plus" size={24} />
        <span className="groups__dropdown-text">{t("Groups.addProduct")}</span>
      </Button>
    </header>
  );
};

export default DropdownHeader;
