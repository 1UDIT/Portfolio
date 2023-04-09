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
        <div className="container-fluid text-center" style={{ position: "relative", minHeight: '100%', height: "100vh" }} id="Home">
        <ParticlesBackground />
          <div className="row" style={{ paddingTop: "150px", color: "#fff" }}>
            <div className="col-sm" >
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
            <div className="col-sm" style={{ marginTop: "10px" }}>
              <img src={process.env.PUBLIC_URL + "/userIcon.png"} height="250" alt="iconUser" className="imgUser magnet" />
            </div>
          </div>
        </div> 
      <Aboutme />
    </>
  );
};

export default Home;