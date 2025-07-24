"use client";
import { Container, Row, Col } from "react-bootstrap";

import { loginRoute, registrationRoute } from "@/lib/routes";
import Logo from "@/views/shared/Logo";
import NavigationLink from "@/views/shared/NavigationLink";
import Button from "@/views/shared/bootstrap/Button";

const GuestHeader = () => {
  return (
    <header className="header">
      <Container fluid>
        <Row>
          <Col col="4">
            <Logo />
          </Col>
          <Col col="8" className="text-right">
            <NavigationLink href={loginRoute}>
              <Button variant="link">Log in</Button>
            </NavigationLink>
            <NavigationLink href={registrationRoute}>
              <Button variant="link">Sign up</Button>
            </NavigationLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default GuestHeader;
