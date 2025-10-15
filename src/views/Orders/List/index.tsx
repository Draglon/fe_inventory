"use client";
import { useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Table } from "react-bootstrap";
import { ListUl } from "react-bootstrap-icons";

import isPresent from "@/utils/isPresent";
import totalPrice from "@/utils/totalPrice";
import removeAndHideModal from "@/utils/removeAndHideModal";
import { shortDateFromISO, fullDateWithLocaleFromISO } from "@/utils/dateTime";
import { showModal as showModalAction } from "@/store/modal/actions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ordersSelector } from "@/store/orders/selectors";
import fetchOrders from "@/store/orders/operations/fetchOrders";
import deleteOrder from "@/store/orders/operations/deleteOrder";
import RemoveButton from "@/views/shared/RemoveButton";
import Button from "@/views/shared/bootstrap/Button";
import Price from "@/views/shared/Price";

type PriceProps = {
  value: number;
  symbol: string;
  isDefault: number;
};

type OrdersType = {
  _id: string;
  createdAt: string;
  date: string;
  description: string;
  products: PriceProps[];
  title: string;
  updatedAt: string;
  userId?: string;
};

const OrdersList = () => {
  const t = useTranslations();
  const locale = useLocale();
  const dispatch = useAppDispatch();
  const orders = useAppSelector(ordersSelector);

  const showModal = (item: OrdersType) => () => {
    dispatch(
      showModalAction({
        modalType: "REMOVE_MODAL",
        modalProps: {
          title: t("shared.modal.removeOrder.title"),
          product: item,
          onRemove: removeAndHideModal(dispatch, deleteOrder, { id: item._id }),
        },
      })
    );
  };

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="orders">
      {isPresent(orders) && (
        <Table className="orders__table" data-testid="ordersTable">
          <tbody>
            {(orders as OrdersType[]).map((item: OrdersType) => {
              const totalPriceUSD = totalPrice(item.products, "USD");
              const totalPriceUAH = totalPrice(item.products, "UAH");

              return (
                <tr className="orders__item" key={item._id}>
                  <td className="orders__title">
                    <a href="#" className="orders__link">
                      {item?.title}
                    </a>
                  </td>
                  <td className="orders__list">
                    <Button
                      className="orders__button-list"
                      variant="outline-dark"
                    >
                      <ListUl className="orders__icon-list" size="24" />
                    </Button>
                  </td>
                  <td className="orders__count">
                    <div className="orders__quantity">
                      {item.products.length}
                    </div>
                    <div className="orders__text">{t("shared.product")}</div>
                  </td>
                  <td className="orders__date">
                    <div className="orders__date-short">
                      {shortDateFromISO(item?.date)}
                    </div>
                    <div className="orders__date-long">
                      {fullDateWithLocaleFromISO(item?.date, locale)}
                    </div>
                  </td>
                  <td className="orders__price">
                    {totalPriceUSD > 0 && (
                      <Price
                        className="products__price-usd"
                        price={{ value: totalPriceUSD, symbol: "USD" }}
                      />
                    )}
                    {totalPriceUAH > 0 && (
                      <Price
                        className="products__price-uah"
                        price={{ value: totalPriceUAH, symbol: "UAH" }}
                      />
                    )}
                  </td>
                  <td className="orders__remove">
                    <RemoveButton onClick={showModal(item)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default OrdersList;
