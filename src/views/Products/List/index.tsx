"use client";
import clsx from "clsx";
import Image from "next/image";
import { Table } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

import productSrc from "@/../public/images/product.webp";

const products = [
  {
    id: "1",
    inStock: true,
    productSrc,
    description:
      "Інтерактивна панель Promethean ActivPanel LX 75 з модулем OPS-A",
    serialNumber: "SN-12.3456789",
    status: "Свободен",
    periodStart: "06 / 04 / 2017",
    periodEnd: "06 / 08 / 2025",
    productStatus: "Новый",
    priceUsd: "2500 $",
    priceRub: "250 000.50 UAH",
    group: null,
    fullName: "Христорождественский Александр",
    parish: "Длинное предлинное длиннючее название прихода",
    dateShort: "06 / 12",
    dateLong: "06 / Сен / 2017",
  },
  {
    id: "2",
    inStock: false,
    productSrc,
    description:
      "Інтерактивна панель Promethean ActivPanel LX 75 з модулем OPS-A",
    serialNumber: "SN-12.3456789",
    status: "В ремонте",
    periodStart: "06 / 04 / 2017",
    periodEnd: "06 / 08 / 2025",
    productStatus: "Б / у",
    priceUsd: "2500 $",
    priceRub: "250 000.50 UAH",
    group: "Длинное предлинное длиннючее название группы",
    fullName: null,
    parish: "Длинное предлинное длиннючее название прихода",
    dateShort: "06 / 12",
    dateLong: "06 / Сен / 2017",
  },
  {
    id: "3",
    inStock: false,
    productSrc,
    description:
      "Інтерактивна панель Promethean ActivePanel LX 75 з модулем OPS-A",
    serialNumber: "SN-12.3456789",
    status: "В ремонте",
    periodStart: "06 / 04 / 2017",
    periodEnd: "06 / 08 / 2025",
    productStatus: "Новый",
    priceUsd: "2500 $",
    priceRub: "250 000.50 UAH",
    group: "Длинное предлинное длиннючее название группы",
    fullName: null,
    parish: "Длинное предлинное длиннючее название прихода",
    dateShort: "06 / 12",
    dateLong: "06 / Сен / 2017",
  },
];

const Products = () => {
  return (
    <div className="products">
      <Table className="products__table">
        <tbody>
          {products.map((item) => (
            <tr className="products__item" key={item.id}>
              <td className="products__indicator">
                <div className={clsx("indicator", { active: item.inStock })} />
              </td>
              <td className="products__image">
                <Image
                  src={item?.productSrc}
                  alt="logo"
                  width="36"
                  height="43"
                />
              </td>
              <td className="products__description">
                <div className="nowrap">{item?.description}</div>
                <div className="products__serialNumber nowrap">
                  {item?.serialNumber}
                </div>
              </td>
              <td
                className={clsx("products__status", {
                  "products__status--active": item.inStock,
                })}
              >
                {item?.status}
              </td>
              <td className="products__period">
                <div className="products__period-start nowrap">
                  <span>с</span> {item?.periodStart}
                </div>
                <div className="products__period-end nowrap">
                  <span>по</span> {item?.periodEnd}
                </div>
              </td>
              <td className="products__product-status nowrap">
                {item?.productStatus}
              </td>
              <td className="products__price">
                <div className="products__price-usd nowrap">
                  {item?.priceUsd}
                </div>
                <div className="products__price-uah nowrap">
                  {item?.priceRub}
                </div>
              </td>
              <td className="products__group">{item?.group}</td>
              <td className="products__fullName">{item?.fullName}</td>
              <td className="products__parish">{item?.parish}</td>
              <td className="products__date">
                <div className="products__date-short nowrap">
                  {item?.dateShort}
                </div>
                <div className="products__date-long nowrap">
                  {item?.dateLong}
                </div>
              </td>
              <td className="products__remove">
                <Trash className="products__icon-remove" size="14" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Products;
