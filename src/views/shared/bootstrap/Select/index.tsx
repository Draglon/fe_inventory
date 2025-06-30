"use client";
import clsx from "clsx";
import Form from "react-bootstrap/Form";

type SelectProps = {
  id: string;
  label?: string;
  type?: "text" | "password";
  size?: "sm" | "lg";
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  options: {
    key: string;
    value: string;
  }[];
};

function Select({
  id,
  label,
  size,
  className,
  disabled,
  options,
}: SelectProps) {
  return (
    <div className="select-field">
      {label && <Form.Label htmlFor={id}>{label}</Form.Label>}
      <Form.Select
        className={clsx("select", className)}
        size={size}
        disabled={disabled}
      >
        {options.map(({ key, value }) => (
          <option key={key}>{value}</option>
        ))}
      </Form.Select>
    </div>
  );
}

export default Select;
