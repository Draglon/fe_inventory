"use client";
import { useTranslations } from "next-intl";
import { Container, Row, Col } from "react-bootstrap";

import { loginRoute, registrationRoute } from "@/lib/routes";
import Logo from "@/views/shared/Logo";
import NavigationLink from "@/views/shared/NavigationLink";
import Button from "@/views/shared/bootstrap/Button";

const GuestHeader = () => {
  const t = useTranslations();

  return (
    <header className="header">
      <Container fluid>
        <Row>
          <Col col="4">
            <Logo />
          </Col>
          <Col col="8" className="text-right">
            <NavigationLink href={loginRoute}>
              <Button variant="link">{t("shared.logIn")}</Button>
            </NavigationLink>
            <NavigationLink href={registrationRoute}>
              <Button variant="link">{t("shared.signUp")}</Button>
            </NavigationLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default GuestHeader;
