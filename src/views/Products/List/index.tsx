"use client";
import clsx from "clsx";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Table } from "react-bootstrap";

import { PRODUCTS } from "@/lib/constants/products";
import { showModal as showModalAction } from "@/store/modal/actions";
import { useAppDispatch } from "@/store/hooks";
import Indicator from "@/views/shared/Indicator";
import RemoveButton from "@/views/shared/RemoveButton";

const Products = () => {
  const t = useTranslations();
  const dispatch = useAppDispatch();

  const showModal = (item: any) => () => {
    dispatch(
      showModalAction({
        modalType: "REMOVE_MODAL",
        modalProps: {
          title: t("shared.modal.removeProduct.title"),
          product: item,
          onRemove: () => {},
        },
      })
    );
  };

  return (
    <div className="products">
      <Table className="products__table">
        <tbody>
          {PRODUCTS.map((item) => (
            <tr className="products__item" key={item.id}>
              <td className="products__indicator">
                <Indicator active={item.isNew} />
              </td>
              <td className="products__image">
                <Image
                  src={item?.photo}
                  alt={item.title}
                  width="36"
                  height="43"
                />
              </td>
              <td className="products__description">
                <div className="text-nowrap">{item?.title}</div>
                <div className="products__serialNumber text-nowrap">
                  {item?.serialNumber}
                </div>
              </td>
              <td
                className={clsx("products__status text-nowrap", {
                  "products__status--active": item.isNew,
                })}
              >
                {item?.status}
              </td>
              <td className="products__period">
                <div className="products__period-start text-nowrap">
                  <span>с</span> {item?.guarantee.start}
                </div>
                <div className="products__period-end text-nowrap">
                  <span>по</span> {item?.guarantee.end}
                </div>
              </td>
              <td className="products__product-status text-nowrap">
                {item?.specification}
              </td>
              <td className="products__price">
                <div className="products__price-usd text-nowrap">
                  {item?.price[0].value} {item?.price[0].symbol}
                </div>
                <div className="products__price-uah text-nowrap">
                  {item?.price[1].value} {item?.price[1].symbol}
                </div>
              </td>
              <td className="products__group">{item?.group}</td>
              <td className="products__fullName">{item?.fullName}</td>
              <td className="products__parish">{item?.parish}</td>
              <td className="products__date">
                <div className="products__date-short text-nowrap">
                  {item?.date}
                </div>
                <div className="products__date-long text-nowrap">
                  {item?.date}
                </div>
              </td>
              <td className="products__remove">
                <RemoveButton onClick={showModal(item)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Products;
