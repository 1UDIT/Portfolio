import { Slide } from "react-awesome-reveal";
import ParticlesBackground from "./ParticlesBackground ";
import Skill from "./Skill/Skill";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import MagnetMouse from 'magnet-mouse';
import Aboutme from "./AboutMe";

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
      <section style={{ position: "relative", paddingBottom: "100px", height: '600px' }} id="Home">
        <ParticlesBackground />
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col" style={{ marginTop: "100px", paddingLeft: "150px", paddingRight: "100px" }}>
              <Slide direction={'up'}>
                <h1 className="heading">
                  Hi There!{" "} I'm Udit Sharma
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
              </Slide>

              <h1 className="heading-name">
                {/* <span className="typewriter"></span> */}
                <Slide direction={'up'}><Typewriter
                  options={{
                    strings: [
                      "Software Engineer",
                      "Front-End Developer",
                    ],
                    pauseFor: 1000,
                    autoStart: true,
                    loop: true,
                  }}
                />
                </Slide> </h1>

            </div>
            <div className="col" style={{ marginTop: "110px" }}>
              <img src={process.env.PUBLIC_URL + "/userIcon.png"} height="250" alt="iconUser" className="imgUser magnet" />
            </div>
          </div>
        </div>
      </section>
      <Aboutme/>
    </>
  );
};

export default Home;