import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const Particlests = (props) => {
    const options = useMemo(() => {
      return {
        background: {
          color: "#000",
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            push: {
              quantity: 5,
            },
            repulse: {
              distance: 100,
            },
          },
        },
        particles: {
          links: {
            enable: true,
            distance: 90,
          },
          move: {
            enable: true,
            speed: { min: 1, max: 3 },
          },
          opacity: {
            value: { min: 0.3, max: 0.7 },
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      };
    }, []);
    const particlesInit = useCallback((engine) => {
      loadSlim(engine);
    }, []);
    
    return <Particles id={props.id} init={particlesInit} options={options} />;
  };

export default Particlests