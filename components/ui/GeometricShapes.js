import React from "react";

export function GeometricShapes() {
  return (
    <div className="geometric-shapes-container" aria-hidden="true">
      <svg
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="geometric-shapes-svg"
      >
        {/* Large Architectural Line Shape */}
        <path
          d="M400 0L1000 300V1000L0 700V200L400 0Z"
          fill="var(--accent-blue)"
          className="shape-path-1"
        />
        {/* Subtle Accent Grid Overlay */}
        <path
          d="M0 200H1000M0 400H1000M0 600H1000M0 800H1000"
          stroke="var(--border-subtle)"
          strokeWidth="1"
          className="shape-grid-h"
        />
        <path
          d="M200 0V1000M400 0V1000M600 0V1000M800 0V1000"
          stroke="var(--border-subtle)"
          strokeWidth="1"
          className="shape-grid-v"
        />
        
        {/* Refined Geometric Accents */}
        <path
          d="M800 200L1000 400V600L800 400V200Z"
          fill="var(--accent-cyan)"
          className="shape-path-2"
        />
        <path
          d="M100 700L400 900L300 1000H0V800L100 700Z"
          fill="var(--accent)"
          className="shape-path-3"
        />
      </svg>
      <style jsx>{`
        .geometric-shapes-container {
          position: absolute;
          top: 0;
          right: 0;
          width: 80%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
          pointer-events: none;
        }
        .geometric-shapes-svg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.1) translateX(15%) translateY(-10%);
        }
        .shape-path-1 { opacity: 0.05; }
        .shape-grid-h, .shape-grid-v { opacity: 0.2; }
        .shape-path-2 { opacity: 0.1; }
        .shape-path-3 { opacity: 0.15; }
      `}</style>
    </div>
  );
}
