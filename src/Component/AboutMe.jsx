import { useEffect } from "react";
import Skill from "./Skill/Skill";
import MagnetMouse from 'magnet-mouse';
import { Slide } from "react-awesome-reveal";
import ParticlesBackground from "./ParticlesBackground ";

const Aboutme = () => {

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
            <div className="container-fluid text-center aboutPage" id="About" style={{ position: "relative", paddingTop: "35px"}}>

                <div className="row">
                    <div className="col" style={{ marginRight: "20px" }}>
                        <img src={process.env.PUBLIC_URL + "/userIcon.png"} height="250" alt="iconUser" className="imgUser magnet" />
                    </div>
                    <div className="col" style={{ marginTop: "10px" }}>
                        <Slide direction={'up'}>
                            <h1 className="heading text-center">
                                About me...
                            </h1>
                        </Slide>
                        <p>I'm a Front-end developer from New Delhi, India.
                            I Enjoy building everything from a small business site to
                            rich interactive web apps, a fan of animation and creating an intuitive,
                            dynamic user experience.</p>
                    </div>
                </div>
            </div>
            <Skill />
        </>
    )
}

export default Aboutme;