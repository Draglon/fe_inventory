"use client";
import Select from "@/views/shared/bootstrap/Select";

const Products = () => {
  return (
    <div className="filter">
      <Select
        id={"1"}
        label="Тип: "
        options={[
          { key: "1", value: "qwe" },
          { key: "2", value: "asd" },
        ]}
      />
      <Select
        id={"1"}
        label="Спецификация: "
        options={[
          { key: "1", value: "qwe" },
          { key: "2", value: "asd" },
        ]}
      />
    </div>
  );
};

export default Products;
