import React from "react";

export default function Button(props: buttonProps) {
  const className = "btn btn-primary " + props.className;
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      className={className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

interface buttonProps {
  children: React.ReactNode;

  onClick?(): void;

  type: "button" | "submit";
  className?: string;
  disabled: boolean;
}

Button.defaultProps = {
  type: "button",
  disabled: false,
}