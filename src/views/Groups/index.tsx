"use client";
import { useTranslations } from "next-intl";

import { GROUPS } from "@/lib/constants/groups";
import PageHeader from "@/views/shared/PageHeader";
import Dropdown from "@/views/shared/bootstrap/Dropdown";
import DropdownHeader from "@/views/Groups/DropdownHeader";
import DropdownTitle from "@/views/Groups/DropdownTitle";
import DropdownItem from "@/views/Groups/DropdownItem";

const Groups = () => {
  const t = useTranslations();

  return (
    <div className="page">
      <PageHeader title={t("Groups.title")} quantity={25} withAddButton />

      <section className="groups">
        {GROUPS.map((group) => (
          <Dropdown
            key={group.id}
            className="groups__dropdown"
            title={<DropdownTitle />}
            drop="end"
            items={group.products.map((product) => ({
              id: product.id,
              label: <DropdownItem product={product as any} />,
            }))}
          >
            <DropdownHeader title="Длинное предлинное длннючее длинючее название прихода" />
          </Dropdown>
        ))}
      </section>
    </div>
  );
};

export default Groups;
