"use client";
import { useTranslations } from "next-intl";
import { Row, Col } from "react-bootstrap";
import { Clock } from "react-bootstrap-icons";

import Logo from "@/views/shared/Logo";
import Input from "@/views/shared/bootstrap/Input";

const UserHeader = () => {
  const t = useTranslations("shared");

  return (
    <header className="header">
      <Row>
        <Col lg="2">
          <Logo />
        </Col>
        <Col lg="8">
          <Input
            id="search"
            size="sm"
            placeholder={t("search")}
            className="input-search"
          />
        </Col>
        <Col lg="2">
          <div className="date-time">
            <Row>
              <Col className="date-time__day">Вторник</Col>
            </Row>
            <Row>
              <Col>
                <span className="date-time__date mr-16">06 Апр, 2017</span>
                <span className="date-time__time">
                  <Clock className="date-time__icon-clock" size="14" /> 17:20
                </span>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default UserHeader;
