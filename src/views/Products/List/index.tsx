"use client";
import clsx from "clsx";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Table } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

import { PRODUCTS } from "@/lib/constants/products";
import { showModal as showModalAction } from "@/store/modal/actions";
import { useAppDispatch } from "@/store/hooks";

const Products = () => {
  const t = useTranslations("shared");
  const dispatch = useAppDispatch();

  const showModal = (item: any) => () => {
    dispatch(
      showModalAction({
        modalType: "REMOVE_MODAL",
        modalProps: {
          title: t("modal.removeProduct.title"),
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
                <div className={clsx("indicator", { active: item.isNew })} />
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
                <div className="nowrap">{item?.title}</div>
                <div className="products__serialNumber nowrap">
                  {item?.serialNumber}
                </div>
              </td>
              <td
                className={clsx("products__status nowrap", {
                  "products__status--active": item.isNew,
                })}
              >
                {item?.status}
              </td>
              <td className="products__period">
                <div className="products__period-start nowrap">
                  <span>с</span> {item?.guarantee.start}
                </div>
                <div className="products__period-end nowrap">
                  <span>по</span> {item?.guarantee.end}
                </div>
              </td>
              <td className="products__product-status nowrap">
                {item?.specification}
              </td>
              <td className="products__price">
                <div className="products__price-usd nowrap">
                  {item?.price[0].value} {item?.price[0].symbol}
                </div>
                <div className="products__price-uah nowrap">
                  {item?.price[1].value} {item?.price[1].symbol}
                </div>
              </td>
              <td className="products__group">{item?.group}</td>
              <td className="products__fullName">{item?.fullName}</td>
              <td className="products__parish">{item?.parish}</td>
              <td className="products__date">
                <div className="products__date-short nowrap">{item?.date}</div>
                <div className="products__date-long nowrap">{item?.date}</div>
              </td>
              <td className="products__remove">
                <Trash
                  className="products__icon-remove"
                  size="14"
                  onClick={showModal(item)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Products;
