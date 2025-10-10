"use client";

import SelectType from "@/views/Products/Filter/Type";
import SelectSpecification from "@/views/Products/Filter/Specification";

const ProductsFilter = () => {
  return (
    <div className="filter" data-testid="filter">
      <SelectType />
      <SelectSpecification />
    </div>
  );
};

export default ProductsFilter;
