import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function Particle() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Particles loaded callback
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: false,
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 1,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            enable: false,
          },
          move: {
            direction: "right",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 0.05,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1500,
            },
            value: 160,
          },
          opacity: {
            value: { min: 0.05, max: 1 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.05,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.5, max: 1.5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
