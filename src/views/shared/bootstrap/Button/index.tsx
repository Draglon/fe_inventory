"use client";
import clsx from "clsx";
import { Button as BootstrapButton } from "react-bootstrap";

type ButtonProps = {
  id?: string;
  size?: "sm" | "lg";
  type?: "button" | "reset" | "submit";
  active?: boolean;
  disabled?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "light"
    | "dark"
    | "link"
    | "outline-primary"
    | "outline-secondary"
    | "outline-success"
    | "outline-danger"
    | "outline-warning"
    | "outline-info"
    | "outline-dark"
    | "outline-light";
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

function Button({
  id,
  size,
  type = "button",
  variant = "primary",
  active,
  disabled,
  className,
  onClick,
  children,
}: ButtonProps) {
  return (
    <BootstrapButton
      id={id}
      size={size}
      type={type}
      variant={variant}
      active={active}
      disabled={disabled}
      className={clsx("button", className)}
      onClick={onClick}
    >
      {children}
    </BootstrapButton>
  );
}

export default Button;
