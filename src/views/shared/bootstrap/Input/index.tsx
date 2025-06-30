"use client";
import clsx from "clsx";
import Form from "react-bootstrap/Form";

type InputProps = {
  id: string;
  label?: string;
  type?: "text" | "password";
  size?: "sm" | "lg";
  placeholder?: string;
  className?: string;
};

function Input({
  id,
  label,
  type = "text",
  size,
  placeholder,
  className,
}: InputProps) {
  return (
    <div className={clsx("input-field", className)}>
      {label && <Form.Label htmlFor={id}>{label}</Form.Label>}
      <Form.Control
        id={id}
        type={type}
        size={size}
        placeholder={placeholder}
        // aria-describedby="passwordHelpBlock"
      />
      {/* <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text> */}
    </div>
  );
}

export default Input;
