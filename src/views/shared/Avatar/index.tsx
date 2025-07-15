"use client";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { GearFill } from "react-bootstrap-icons";

import avatarSrc from "@/../public/images/avatar.jpg";

const Avatar = () => {
  return (
    <div className="avatar">
      <div className="avatar__wrapper">
        <Image
          className="avatar__img"
          src={avatarSrc}
          alt="avatar"
          width="100"
          height="100"
          data-testid="avatarImg"
        />
      </div>
      <Button
        variant="light"
        className="avatar__button"
        data-testid="avatarButtonSettings"
      >
        <GearFill size={14} />
      </Button>
    </div>
  );
};

export default Avatar;
