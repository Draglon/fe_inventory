"use client";
import { Plus } from "react-bootstrap-icons";

import Button from "@/views/shared/bootstrap/Button";

type PageHeaderProps = {
  title?: string;
  quantity?: number;
  withAddButton?: boolean;
  children?: React.ReactNode;
};

const PageHeader = ({
  title,
  quantity,
  children,
  withAddButton,
}: PageHeaderProps) => {
  return (
    <header className="page__header">
      {withAddButton && (
        <Button className="plus__button">
          <Plus size={18} />
        </Button>
      )}
      <h1 className="filter__title">
        {title}
        {quantity && ` / ${quantity}`}
      </h1>
      {children}
    </header>
  );
};

export default PageHeader;
