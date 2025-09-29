"use client";
import { noop } from "lodash";

import Indicator from "@/views/shared/Indicator";
import Image from "@/views/shared/Image";
import ProductStatus from "@/views/shared/ProductStatus";
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
    <div className="groups-product">
      <div className="groups-product__item groups-product__item--active">
        <Indicator active={product.isNew} />
      </div>
      <div className="groups-product__item groups-product__item--image">
        <Image src={product.photo} alt={product.title} width={50} height={42} />
      </div>
      <div className="groups-product__item groups-product__item--description">
        <h4 className="text-middle">{product.title}</h4>
        <div className="text-small text-hint">{product.serialNumber}</div>
      </div>
      <div className="groups-product__item groups-product__item--status">
        <ProductStatus status={product.isNew} />
      </div>
      <div className="groups-product__item groups-product__item--remove">
        <RemoveButton onClick={noop} />
      </div>
    </div>
  );
};

export default DropdownItem;
