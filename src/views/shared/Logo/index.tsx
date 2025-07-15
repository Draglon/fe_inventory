"use client";
import Image from "next/image";

import logo from "@/../public/images/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <Image
        className="logo__img"
        src={logo}
        alt="logo"
        width="36"
        height="43"
        data-testid="logoImg"
      />
      <div className="logo__text">INVENTORY</div>
    </div>
  );
};

export default Logo;
