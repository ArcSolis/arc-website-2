import React from "react";

const baseClasses = "btn";

const variantClasses = {
  default: "primary",
  primary: "primary",
  secondary: "secondary",
  outline: "ghost",
  ghost: "ghost",
};

export function Button({ variant = "default", className = "", href, children, ...props }) {
  const resolvedVariant = variantClasses[variant] || variantClasses.default;
  const classes = `${baseClasses} ${resolvedVariant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
