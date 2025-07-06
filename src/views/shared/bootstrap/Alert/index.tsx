"use client";
import clsx from "clsx";

type AlertProps = {
  id?: string;
  key?: string;
  className?: string;
  show?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light";
  onClose?: () => void;
  children: React.ReactNode;
};

function Alert({
  id,
  key,
  show,
  variant = "primary",
  children,
  className,
}: AlertProps) {
  return (
    <Alert
      id={id}
      key={key}
      show={show}
      variant={variant}
      className={clsx("alert", className)}
    >
      {children}
    </Alert>
  );
}

export default Alert;
