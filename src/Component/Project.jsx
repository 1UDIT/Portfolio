import React from "react";
import { FaGithub, FaLink, FaNodeJs } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaHtml5, FaReact, FaJs, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiNodeDotJs, SiRedux, SiHeroku } from "react-icons/si";
import ContactUs from "./ContactUs";

const Project = () => {
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

            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
                <SiRedux />,
                <FaReact />
            ]
        },

    ];
    return (
        <>
            <div className="container-fluid text-center ProjectDetail" id="Project">
                <h1 style={{ paddingTop: "40px", textAlign: "center" }}>Projects</h1>
                <div className="row">
                    {projects.map((item) => (
                        <div className="col-sm" style={{ paddingTop: "50px" }}>
                            <div className="card" style={{ width: "100%", height: "100%" }} key={item.id}>
                                <img src={item.image} alt="icon" style={{ width: "100%" }} />
                                <div className="card-body" style={{ color: "black" }}>
                                    <h5 className="card-title">{item.project_name}</h5>
                                    <p className="card-text">{item.project_desc}</p>
                                    <p className="card-text">{item.tech_stack}</p>
                                    <div className="row">
                                        <div className="col"   >
                                            <a href={item.repo_link} className="btn btn-primary">Code</a>
                                        </div>
                                        <div className="col"   >
                                            <a href={item.deploy_link} className="btn btn-primary">Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ContactUs />
        </>
    )
}
export default Project;