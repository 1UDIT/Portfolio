import { useEffect } from "react";
import Skill from "./Skill/Skill";
import MagnetMouse from 'magnet-mouse';
import { Slide } from "react-awesome-reveal";

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
            <section className="aboutPage" id="About" style={{ position: "relative", paddingTop: "35px", height: '300px' }}>
                <div className="row">
                    <div className="col-4" style={{   marginRight: "20px" }}>
                        <img src={process.env.PUBLIC_URL + "/userIcon.png"} height="250" alt="iconUser" className="imgUser magnet" />
                    </div>
                    <div className="col-7" style={{ marginTop: "10px" }}>
                        <Slide direction={'up'}>
                            <h1 className="heading text-left">
                                About me...
                            </h1>
                        </Slide>
                        <p>I'm a Front-end developer from New Delhi, India.
                            I Enjoy building everything from a small business site to
                            rich interactive web apps, a fan of animation and creating an intuitive,
                            dynamic user experience.</p>
                    </div>
                </div>
            </section>
            <Skill />
        </>
    )
}

export default Aboutme;