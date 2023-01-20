import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback } from "react"
import particles from "./config/particles.json";
import { Slide } from "react-awesome-reveal";
import ParticlesBackground from "./ParticlesBackground ";

const Particle = () => {
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
    <>
      <section >
       <ParticlesBackground/>
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col" style={{ color: "white", position: "relative", marginTop: "130px" }}>
              <Slide direction={'up'}>
                <h1 className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
              </Slide>
              <Slide direction={'up'}>
                <h1 className="heading-name">
                  <span className="typewriter"></span>
                </h1>
              </Slide>
              <div style={{ padding: 50, textAlign: "left" }}>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section >
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col" style={{ color: "white", position: "relative", marginTop: "130px" }}>
              <Slide direction={'up'}>
                <h1 className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
              </Slide>
              <Slide direction={'up'}>
                <h1 className="heading-name">
                  <span className="typewriter"></span>
                </h1>
              </Slide>
              <div style={{ padding: 50, textAlign: "left" }}>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Particle