import { Slide } from "react-awesome-reveal";
import ParticlesBackground from "./ParticlesBackground ";
import Skill from "./Skill";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";
import MagnetMouse from 'magnet-mouse';

const Home = () => {

  useEffect(() => {

    let mm = new MagnetMouse({
      magnet: {
        element: '.magnet',
        class: 'follow-mouse-active'
      }
    });
    mm.init();
    window.dispatchEvent(new Event('resize'))
  }, [])

  return (
    <>
      <section style={{ position: "relative", paddingBottom: "100px", height: '550px' }}>
        <ParticlesBackground />
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col" style={{ position: "relative", marginTop: "130px", paddingLeft: "150px" }}>
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
                  {/* <span className="typewriter"></span> */}
                  <Typewriter
                    options={{
                      strings: [
                        "Software Engineer",
                        "Full Stack Developer",
                      ],
                      pauseFor: 1000,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
              </Slide>
            </div>
            <div className="col" style={{ position: "relative", marginTop: "130px" }}>
              <img src={process.env.PUBLIC_URL + "/userIcon.png"} height="250" className="imgUser magnet" />
            </div>
          </div>
        </div>
      </section>
      <Skill />
    </>
  );
};

export default Home;