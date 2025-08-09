"use client";
import clsx from "clsx";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Table } from "react-bootstrap";

import { ProductProps } from "@/lib/constants/props/product";
import isPresent from "@/utils/isPresent";
import {
  showModal as showModalAction,
  hideModal as hideModalAction,
} from "@/store/modal/actions";
import fetchProducts from "@/store/products/operations/fetchProducts";
import deleteProduct from "@/store/products/operations/deleteProduct";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  isLoadingSelector,
  productsSelector,
} from "@/store/products/selectors";
import Image from "@/views/shared/Image";
import Price from "@/views/shared/Price";
import Indicator from "@/views/shared/Indicator";
import RemoveButton from "@/views/shared/RemoveButton";

const Products = () => {
  const t = useTranslations();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isLoadingSelector);
  const products = useAppSelector(productsSelector);

  const handleRemove = (id: string) => () => {
    dispatch(deleteProduct({ id }));
    dispatch(hideModalAction());
  };

  const showModal = (product: ProductProps) => () => {
    dispatch(
      showModalAction({
        modalType: "REMOVE_MODAL",
        modalProps: {
          title: t("shared.modal.removeProduct.title"),
          product,
          onRemove: handleRemove(product._id),
        },
      })
    );
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="products">
      {isLoading ? (
        <>Loading</>
      ) : (
        <Table className="products__table">
          <tbody>
            {isPresent(products) &&
              products.map((item: ProductProps) => {
                return (
                  <tr className="products__item" key={item._id}>
                    <td className="products__indicator">
                      <Indicator active={item.isNew} />
                    </td>
                    <td className="products__image">
                      <Image
                        src={item?.photo}
                        alt={item?.title}
                        width={36}
                        height={43}
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
                      <Price
                        className="products__price-usd"
                        price={item?.price[0]}
                      />
                      <Price
                        className="products__price-uah"
                        price={item?.price[1]}
                      />
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
                );
              })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Products;
