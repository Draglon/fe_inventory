"use client";
import { Button as BootstrapButton } from "react-bootstrap";

type ButtonProps = {
  size?: "sm" | "lg";
  type?: "button" | "reset" | "submit";
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
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
};

function Button({
  type = "button",
  variant = "primary",
  className,
  children,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <BootstrapButton
      className={className}
      type={type}
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {children}
    </BootstrapButton>
  );
}

export default Button;
