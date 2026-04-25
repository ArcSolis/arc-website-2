import React from "react";

export function GeometricShapes() {
  return (
    <div className="animated-bg-container" aria-hidden="true">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      <div className="noise-overlay"></div>
      
      <style jsx>{`
        .animated-bg-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
          pointer-events: none;
          background: var(--bg-pure);
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.5;
          animation: float 20s infinite ease-in-out alternate;
          will-change: transform;
        }

        .orb-1 {
          width: 80vw;
          height: 80vw;
          max-width: 800px;
          max-height: 800px;
          background: var(--accent-soft);
          top: -20%;
          left: -10%;
          animation-duration: 25s;
          animation-delay: -5s;
        }

        .orb-2 {
          width: 70vw;
          height: 70vw;
          max-width: 700px;
          max-height: 700px;
          background: var(--accent-secondary);
          bottom: -20%;
          right: -10%;
          opacity: 0.3;
          animation-duration: 22s;
          animation-direction: alternate-reverse;
        }

        .orb-3 {
          width: 60vw;
          height: 60vw;
          max-width: 600px;
          max-height: 600px;
          background: var(--accent-primary);
          top: 20%;
          left: 40%;
          opacity: 0.15;
          animation-duration: 28s;
          animation-delay: -10s;
        }

        .noise-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.4;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
        }

        @keyframes float {
          0% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(5%, 10%) scale(1.1) rotate(5deg);
          }
          66% {
            transform: translate(-10%, 5%) scale(0.9) rotate(-5deg);
          }
          100% {
            transform: translate(5%, -5%) scale(1.05) rotate(0deg);
          }
        }

        @media (max-width: 768px) {
          .orb {
            filter: blur(60px);
          }
        }
      `}</style>
    </div>
  );
}
