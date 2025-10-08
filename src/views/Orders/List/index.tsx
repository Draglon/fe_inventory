"use client";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Table } from "react-bootstrap";
import { ListUl } from "react-bootstrap-icons";

import isPresent from "@/utils/isPresent";
import removeAndHideModal from "@/utils/removeAndHideModal";
import { showModal as showModalAction } from "@/store/modal/actions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { isLoadingSelector, ordersSelector } from "@/store/orders/selectors";
import fetchOrders from "@/store/orders/operations/fetchOrders";
import deleteOrder from "@/store/orders/operations/deleteOrder";
import RemoveButton from "@/views/shared/RemoveButton";
import Button from "@/views/shared/bootstrap/Button";

type OrdersType = {
  _id: string;
  createdAt: string;
  date: string;
  description: string;
  products: string[];
  title: string;
  updatedAt: string;
  userId?: string;
};

const OrdersList = () => {
  const t = useTranslations();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isLoadingSelector);
  const orders = useAppSelector(ordersSelector);

  console.log("loader: ", isLoading);

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
  }, []);

  return (
    <div className="orders">
      {isPresent(orders) && (
        <Table className="orders__table" data-testid="ordersTable">
          <tbody>
            {(orders as OrdersType[]).map((item: OrdersType) => (
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
                  <div className="orders__quantity">23</div>
                  <div className="orders__text">Продукта</div>
                </td>
                <td className="orders__date">
                  <div className="orders__date-short">04 / 12</div>
                  <div className="orders__date-long">06 / Апр / 2017</div>
                </td>
                <td className="orders__price">
                  <div className="orders__price-usd">2500 $</div>
                  <div className="orders__price-uah">250 000.50 UAH</div>
                </td>
                <td className="orders__remove">
                  <RemoveButton onClick={showModal(item)} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default OrdersList;
