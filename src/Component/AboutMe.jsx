import { useEffect } from "react";
import Skill from "./Skill/Skill";
import MagnetMouse from 'magnet-mouse';
import { Slide } from "react-awesome-reveal";
import ParticlesBackground from "./ParticlesBackground ";
import { FaUserAlt } from "react-icons/fa";

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
            <div className="container-fluid text-center aboutPage" id="About" style={{ position: "relative", paddingTop: "45px" }}>
                <div className="row"  style={{ color: "red" }}>
                    <div className="col-5" style={{ textAlign: "right",display:"flex",alignItems:"center",justifyContent:"flex-end" }}>
                        <FaUserAlt style={{  fontSize: "20px" }} />
                    </div>
                    <div className="col-5" style={{ textAlign: "left" }}>
                        <h2 className="heading">
                        <span style={{ color: "white" }}>About</span> <span style={{ color: "red" }}>Me...</span>
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm" style={{ marginRight: "20px" }}>
                        <img src={process.env.PUBLIC_URL + "/userIcon.png"} height="250" alt="iconUser" className="imgUser magnet" />
                    </div>
                    <div className="col-sm" style={{ marginTop: "10px",textAlign:"justify" }}>
                        <Slide direction={'up'}>

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