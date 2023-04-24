import React, { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaHtml5, FaReact, FaJs, FaCss3,FaNext } from "react-icons/fa";
import { SiMongodb, SiNodeDotJs, SiRedux, SiNextdotjs } from "react-icons/si";
import ContactUs from "./ContactUs";

const Project = () => {
    const [buttonLeft, setButtonLeft] = useState({ display: 'none' });
    const [buttonRight, setButtonRight] = useState({ display: 'none' });
    const projects = [
        {
            id: 1,
            project_name: "restaurant",
            image:
                "https://github.com/1UDIT/Portfolio/blob/Added-Project-list/Images/restaurant.png?raw=true",
            project_desc:
                "This is an restaurant Demo website",
            deploy_link: "https://1udit.github.io/restauranDemo/#/",
            repo_link: "https://github.com/1UDIT/restauranDemo",
            tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaReact />]
        },
        {
            id: 2,
            project_name: "Weather Info",
            image:
                "https://github.com/1UDIT/Portfolio/blob/Added-Project-list/Images/WeatherInfo.png?raw=true",
            project_desc:
                "This is an Weather Demo website",
            deploy_link: "https://1udit.github.io/weatherDisplay/",
            repo_link: "https://github.com/1UDIT/weaherApp",
            tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaReact />, <SiRedux />]
        },
        {
            id: 3,
            project_name: "Iplaey",
            image:
                "https://github.com/1UDIT/Portfolio/blob/Added-Project-list/Images/Iplaey.png?raw=true",
            project_desc:
                "video Playout System.",
            deploy_link: null,
            repo_link: null,
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
                <SiRedux />,
                <FaReact />
            ]
        },
        {
            id: 4,
            project_name: "News Website ",
            image:
                "https://github.com/1UDIT/Portfolio/blob/Added-Project-list/Images/Iplaey.png?raw=true",
            project_desc:
                "schedule of Anime",
            deploy_link: "https://animexzone.netlify.app/",
            repo_link: "github.com/1UDIT/anime_x",
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />, 
                <SiNextdotjs />
            ]
        },

    ];
    return (
        <>
            <div className="container-fluid text-center ProjectDetail p-4" id="Project">
                <div className="row" style={{ color: "red" }}>
                    <div className="col-5" style={{ textAlign: "right", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                        <FaLaptopCode style={{ fontSize: "25px" }} />
                    </div>
                    <div className="col-5" style={{ textAlign: "left" }}>
                        <h2 className="heading">
                            <span style={{ color: "white" }}>Projects</span>
                        </h2>
                    </div>
                </div>
                <div className="row">
                    {projects.map((item) => (
                        <div className="col-sm col-3" style={{ paddingTop: "50px" }}>

                            <div className="card" style={{ width: "100%", height: "100%" }} key={item.id}>
                                <img src={item.image} alt="icon" style={{ width: "100%" }} />
                                <div className="card-body" style={{ color: "black" }} >

                                    <h5 className="card-title"> {item.project_name}</h5>
                                    <p className="card-text"  >{item.project_desc}</p>
                                    <p className="card-text" >{item.tech_stack}</p>
                                    {item.repo_link === null ? null : <div className="row" style={{ position: "absolute", bottom: "0px", left: "0px", right: "0px" }}>
                                        <div className="col"   >
                                            <a href={item.repo_link} className="btn btn-primary">Code</a>
                                        </div>
                                        <div className="col"   >
                                            <a href={item.deploy_link} className="btn btn-primary">Demo</a>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
            <ContactUs />
        </>
    )
}
export default Project;