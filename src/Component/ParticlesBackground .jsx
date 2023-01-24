import particles from "./config/particles.json";
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback } from "react"

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    //console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);



  const particlesLoaded = useCallback(async (container) => {
    // console.log(container);
  }, []);

  return (
   
      <Particles       
        id="particle_canvas"
        init={particlesInit}
        loaded={particlesLoaded}
        // options={{
        //   fullScreen: {
        //     enable: false
        //   },
        //   particles: {
        //     number: {
        //       value: 80,
        //       density: {
        //         enable: true,
        //         area: 800
        //       }
        //     },
        //     color: {
        //       value: "#fbc106"
        //     },
        //     shape: {
        //       type: "circle"
        //     },
        //     opacity: {
        //       value: { min: 0.1, max: 0.4 },
        //       animation: {
        //         enable: true,
        //         speed: 1,
        //         sync: false
        //       }
        //     },
        //     size: {
        //       value: { min: 0.1, max: 3 },
        //       animation: {
        //         enable: true,
        //         speed: 2,
        //         sync: false
        //       }
        //     },
        //     links: {
        //       enable: true,
        //       distance: 100,
        //       color: "#fbc106",
        //       opacity: 1,
        //       width: 1
        //     },
        //     move: {
        //       enable: true,
        //       speed: 1,
        //       direction: "none",
        //       random: false,
        //       straight: false,
        //       outModes: {
        //         default: "out"
        //       }
        //     }
        //   },
        //   interactivity: {
        //     detectsOn: "window",
        //     events: {
        //       onHover: {
        //         enable: false
        //       },
        //       onClick: {
        //         enable: false
        //       },
        //       resize: true
        //     }
        //   },
        //   detectRetina: true
        // }}
        options={particles}
      />
    
  )
}

export default ParticlesBackground;