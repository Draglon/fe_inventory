"use client";
import { useTranslations } from "next-intl";
import { Modal } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

import { useAppDispatch } from "@/store/hooks";
import { hideModal as hideModalAction } from "@/store/modal/actions";
import Button from "@/views/shared/bootstrap/Button";

type RemoveParishModalProps = {
  title: string;
  product: {
    title: string;
    photo: string;
    serialNumber?: string;
    isNew: number;
  };
  onRemove?: () => void;
};

const RemoveParishModal = ({ title, onRemove }: RemoveParishModalProps) => {
  const dispatch = useAppDispatch();
  const t = useTranslations("shared");

  const onCloseModal = () => {
    dispatch(hideModalAction());
  };

  return (
    <Modal
      className="modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={true}
      onHide={onCloseModal}
    >
      <Modal.Header className="modal__header" closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="modal__title"
        >
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer className="modal__footer">
        <Button
          className="modal__button--link"
          size="lg"
          variant="link"
          onClick={onCloseModal}
        >
          {t("cancel")}
        </Button>
        <Button
          className="modal__button--danger"
          size="lg"
          variant="light"
          onClick={onRemove}
        >
          <Trash size="14" />
          <span>{t("delete")}</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RemoveParishModal;
