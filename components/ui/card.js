import React from "react";

export function Card({ className = "", children, ...props }) {
  return (
    <div className={`arc-card ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children, ...props }) {
  return (
    <div className={`arc-card-header ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className = "", children, ...props }) {
  return (
    <h3 className={`arc-card-title ${className}`.trim()} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ className = "", children, ...props }) {
  return (
    <p className={`arc-card-description ${className}`.trim()} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ className = "", children, ...props }) {
  return (
    <div className={`arc-card-content ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
