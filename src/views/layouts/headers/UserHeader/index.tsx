"use client";
import { Container, Row, Col } from 'react-bootstrap';

import Logo from "@/views/shared/Logo";

const UserHeader = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <Col col="4">
            <Logo />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default UserHeader;
