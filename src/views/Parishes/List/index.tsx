"use client";
import { useTranslations } from "next-intl";
import { Table } from "react-bootstrap";
import { Trash, ListUl } from "react-bootstrap-icons";

import { ORDERS } from "@/lib/constants/orders";
import { showModal as showModalAction } from "@/store/modal/actions";
import { useAppDispatch } from "@/store/hooks";
import Button from "@/views/shared/bootstrap/Button";

const Products = () => {
  const t = useTranslations("shared");
  const dispatch = useAppDispatch();

  const showModal = (item: any) => () => {
    dispatch(
      showModalAction({
        modalType: "REMOVE_PARISH_MODAL",
        modalProps: {
          title: t("modal.removeParish.title"),
          product: item,
          onRemove: () => {},
        },
      })
    );
  };

  return (
    <div className="parishes">
      <Table className="parishes__table">
        <tbody>
          {ORDERS.map((item) => (
            <tr className="parishes__item" key={item.id}>
              <td className="parishes__title">
                <a href="#" className="parishes__link">
                  {item?.title}
                </a>
              </td>
              <td className="parishes__list">
                <Button
                  className="parishes__button-list"
                  variant="outline-dark"
                >
                  <ListUl className="parishes__icon-list" size="24" />
                </Button>
              </td>
              <td className="parishes__count">
                <div className="parishes__quantity">23</div>
                <div className="parishes__text">Продукта</div>
              </td>
              <td className="parishes__date">
                <div className="parishes__date-short">04 / 12</div>
                <div className="parishes__date-long">06 / Апр / 2017</div>
              </td>
              <td className="parishes__price">
                <div className="parishes__price-usd">2500 $</div>
                <div className="parishes__price-uah">250 000.50 UAH</div>
              </td>
              <td className="parishes__remove">
                <Trash
                  className="parishes__icon-remove"
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
