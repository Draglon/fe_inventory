"use client";
import { useTranslations } from "next-intl";
import { Modal } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

import { useAppDispatch } from "@/store/hooks";
import { hideModal as hideModalAction } from "@/store/modal/actions";
import Indicator from "@/views/shared/Indicator";
import Image from "@/views/shared/Image";
import Button from "@/views/shared/bootstrap/Button";

type RemoveProductModalProps = {
  title: string;
  product: {
    title: string;
    photo: string;
    serialNumber: string;
    isNew: number | boolean;
  };
  onRemove: () => void;
};

const RemoveProductModal = ({
  title,
  product,
  onRemove,
}: RemoveProductModalProps) => {
  const dispatch = useAppDispatch();
  const t = useTranslations();

  const onCloseModal = () => {
    dispatch(hideModalAction());
  };

  return (
    <Modal
      className="modal"
      size="lg"
      centered
      show={true}
      onHide={onCloseModal}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header className="modal__header" closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="modal__title"
        >
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal__body">
        <div className="product">
          <div className="product__active">
            <Indicator active={product?.isNew} />
          </div>
          <div className="product__image">
            <Image
              src={product?.photo}
              alt={product?.title}
              width={36}
              height={43}
            />
          </div>
          <div className="product__description">
            <h4 className="product__title">{product?.title}</h4>
            <div className="product__serialNumber">{product?.serialNumber}</div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="modal__footer">
        <Button
          className="modal__button--link"
          size="lg"
          variant="link"
          onClick={onCloseModal}
          data-testid="handleClose"
        >
          {t("shared.cancel")}
        </Button>
        <Button
          className="modal__button--danger"
          size="lg"
          variant="light"
          onClick={onRemove}
          data-testid="handleRemove"
        >
          <Trash size="14" />
          <span>{t("shared.delete")}</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RemoveProductModal;
