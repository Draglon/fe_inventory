"use client";
import clsx from "clsx";
import React from "react";
import {
  Dropdown as bootstrapDropdown,
  SplitButton as BootstrapSplitButton,
} from "react-bootstrap";

type DropdownProps = {
  id?: string;
  items: any[];
  placement?:
    | "auto"
    | "auto-start"
    | "auto-end"
    | "top"
    | "bottom"
    | "right"
    | "left"
    | "top-start"
    | "top-end"
    | "bottom-start"
    | "bottom-end"
    | "right-start"
    | "right-end"
    | "left-start"
    | "left-end";
  drop?: "up" | "up-centered" | "start" | "end" | "down" | "down-centered";
  variant?: "primary" | "secondary" | "success" | "info" | "warning" | "danger";
  className?: string;
  title: React.ReactNode;
  onSelect?: () => void;
  onToggle?: () => void;
  children?: React.ReactNode;
};

function Dropdown({
  id,
  drop = "down",
  variant = "primary",
  title,
  items,
  className,
  children = <></>,
}: DropdownProps) {
  return (
    <BootstrapSplitButton
      id={id}
      drop={drop}
      className={clsx("alert", className)}
      title={title}
      variant={variant}
    >
      {children}
      {items.map((item) => (
        <>
          {item?.devider ? (
            <bootstrapDropdown.Divider />
          ) : (
            <bootstrapDropdown.Item eventKey={item.id}>
              {item.label}
            </bootstrapDropdown.Item>
          )}
        </>
      ))}
    </BootstrapSplitButton>
  );
}

export default Dropdown;
