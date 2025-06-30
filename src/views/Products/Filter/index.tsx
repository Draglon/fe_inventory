"use client";
import { useTranslations } from "next-intl";
import { Row, Col } from "react-bootstrap";

import Select from "@/views/shared/bootstrap/Select";

const Products = () => {
  const t = useTranslations("Products");

  return (
    <>
      <Row>
        <Col>
          <h1>{t("title")} / 25</h1>
        </Col>
        <Col>
          <Select
            id={"1"}
            options={[
              { key: "1", value: "qwe" },
              { key: "2", value: "asd" },
            ]}
          />
        </Col>
        <Col>
          <Select
            id={"2"}
            options={[
              { key: "1", value: "qwe" },
              { key: "2", value: "asd" },
            ]}
          />
        </Col>
      </Row>
    </>
  );
};

export default Products;
