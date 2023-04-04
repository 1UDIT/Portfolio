import React from "react";
import { FaGithub, FaLink, FaNodeJs } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaHtml5, FaReact, FaJs, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiNodeDotJs, SiRedux, SiHeroku } from "react-icons/si";

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
            tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaReact />]
        },
        {
            id: 3,
            project_name: "LinkedIn Learning",
            image:
                "https://github.com/kavish729/PORTFOLIO/blob/main/public/ProjectImages/linkedin.png?raw=true",
            project_desc:
                "LinkedIn Learning is an online educational platform that helps you discover and develop business, technology-related, and creative skills through expert-led course videos. With more than 5,000 courses and personalized recommendations, you can discover, complete, and track courses related to your field and interests..",
            deploy_link: "https://projectlynda.netlify.app/",
            repo_link: "https://github.com/ribhar/LinkedinLearning",
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />
                // <FaReact />,
                // <SiRedux />,
                // <SiMaterialui />,
                // <SiMongodb />,
                // // <SiExpress />,
                // <AiFillGithub />,
                // <FaJs />,
                // <FaNodeJs />,
            ]
        }
    ];
    return (
        <>
            <section className="ProjectDetail" id="Project">
                <div className="container-fluid text-center">
                    <h1 style={{ paddingTop: "40px", textAlign: "center" }}>Projects</h1>
                    <div className="row">
                        {projects.map((item) => (
                            <div className="col-5" key={item.id} style={{ paddingTop: "50px" }}>
                                <div className="card" style={{ width: "100%", height: "100%" }}>
                                    <img src={item.image} alt="icon" style={{ width: "100%" }} />
                                    <div className="card-body" style={{ color: "black" }}>
                                        <h5 className="card-title">{item.project_name}</h5>
                                        <p className="card-text">{item.project_desc}</p>
                                        <p className="card-text">{item.tech_stack}</p>
                                        <div className="row">
                                            <div className="col-6" key={item.id} >
                                                <a href={item.repo_link} className="btn btn-primary">Code</a>
                                            </div>
                                            <div className="col-6" key={item.id} >
                                                <a href={item.deploy_link} className="btn btn-primary">Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Project;