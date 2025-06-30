"use client";
// import { useTranslations } from "next-intl";
import { Container, Row, Col } from "react-bootstrap";

import Logo from "@/views/shared/Logo";

const GuestHeader = () => {
  // const t = useTranslations("shared");

  return (
    <header className="header">
      <Container fluid>
        <Row>
          <Col col="4">
            <Logo />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default GuestHeader;
