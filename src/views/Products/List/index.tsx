"use client";
import { useTranslations, useLocale } from "next-intl";
import { Table } from "react-bootstrap";

import { ProductProps } from "@/lib/constants/props/product";
import {
  shortDateFromISO,
  fullDateFromISO,
  fullDateWithLocaleFromISO,
} from "@/utils/dateTime";
import isPresent from "@/utils/isPresent";
import {
  showModal as showModalAction,
  hideModal as hideModalAction,
} from "@/store/modal/actions";
import deleteProduct from "@/store/products/operations/deleteProduct";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  isLoadingSelector,
  productsSelector,
} from "@/store/products/selectors";
import Image from "@/views/shared/Image";
import Price from "@/views/shared/Price";
import ProductStatus from "@/views/shared/ProductStatus";
import ProductAvailable from "@/views/shared/ProductAvailable";
import Indicator from "@/views/shared/Indicator";
import RemoveButton from "@/views/shared/RemoveButton";

const Products = () => {
  const t = useTranslations();
  const locale = useLocale();
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

  return (
    <div className="products">
      {isLoading ? (
        <>Loading</>
      ) : (
        <Table className="products__table">
          <tbody>
            {isPresent(products) &&
              (products as ProductProps[]).map((item: ProductProps) => (
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
                  <td className="products__status text-nowrap">
                    <ProductAvailable status={item?.isNew} />
                  </td>
                  <td className="products__period">
                    <div className="products__period-start text-nowrap">
                      <span>{t("Products.guarantee.from")}</span>{" "}
                      {fullDateFromISO(item?.guarantee?.start as string)}
                    </div>
                    <div className="products__period-end text-nowrap">
                      <span>{t("Products.guarantee.to")}</span>{" "}
                      {fullDateFromISO(item?.guarantee?.end as string)}
                    </div>
                  </td>
                  <td className="products__product-status text-nowrap">
                    <ProductStatus status={item?.isNew} />
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
                  <td className="products__group">{"-"}</td>
                  <td className="products__fullName">{"-"}</td>
                  <td className="products__parish">{"-"}</td>
                  <td className="products__date text-center">
                    <div className="products__date-short text-nowrap">
                      {shortDateFromISO(item?.date)}
                    </div>
                    <div className="products__date-long text-nowrap">
                      {fullDateWithLocaleFromISO(item?.date, locale)}
                    </div>
                  </td>
                  <td className="products__remove">
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

export default Products;
