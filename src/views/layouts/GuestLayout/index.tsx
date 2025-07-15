"use client";
import { Container } from "react-bootstrap";

import GuestHeader from "@/views/layouts/headers/GuestHeader";
// import ModalRoot from "@/views/shared/ModalRoot";

type Props = {
  children: React.ReactNode;
};

const GuestLayout = ({ children }: Props) => {
  return (
    <>
      <GuestHeader />
      <Container fluid className="layout">
        <main className="page__main">{children}</main>
        {/* <ModalRoot /> */}
      </Container>
    </>
  );
};

export default GuestLayout;
