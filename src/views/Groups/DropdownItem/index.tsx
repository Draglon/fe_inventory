"use client";
import Image from "next/image";

import Indicator from "@/views/shared/Indicator";
import Status from "@/views/shared/Status";
import RemoveButton from "@/views/shared/RemoveButton";

type DropdownItemProps = {
  product: {
    title: string;
    photo: string;
    serialNumber: string;
    isNew: number;
    status: string;
  };
};

const DropdownItem = ({ product }: DropdownItemProps) => {
  return (
    <div className="product">
      <div className="product__item product__item--active">
        <Indicator active={product.isNew} />
      </div>
      <div className="product__item product__item--image">
        <Image src={product.photo} alt={product.title} width={50} height={42} />
      </div>
      <div className="product__item product__item--description">
        <h4 className="text-middle">{product.title}</h4>
        <div className="text-small text-hint">{product.serialNumber}</div>
      </div>
      <div className="product__item product__item--status">
        <Status active={product.isNew} status={product.status} />
      </div>
      <div className="product__item product__item--remove">
        <RemoveButton onClick={() => {}} />
      </div>
    </div>
  );
};

export default DropdownItem;
