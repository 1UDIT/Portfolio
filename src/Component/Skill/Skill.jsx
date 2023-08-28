import { Slide } from "react-awesome-reveal";
import {
    FaHtml5,
    FaReact,
    FaJs,
    FaNodeJs,
    FaCss3,
} from 'react-icons/fa';
import { GoFileCode } from "react-icons/go";
import { SiRedux } from 'react-icons/si';
import "./Skill.css"
import Project from "../Project";

const Skill = () => {
    const projects = [
        {
            id: 0,
            project_name: 'JavaScript',
            project_desc: <FaJs className='commonIcons' />,
        },
        {
            id: 1,
            project_name: 'React JS',
            project_desc: <FaReact className='commonIcons' />,
        },
        {
            id: 2,
            project_name: 'Redux',
            project_desc: <SiRedux className='commonIcons' />,
        },
        {
            id: 3,
            project_name: 'HTML',
            project_desc: <FaHtml5 className='commonIcons' />,
        },
        {
            id: 4,
            project_name: 'CSS',
            project_desc: <FaCss3 className='commonIcons' />,
        },
        {
            id: 5,
            project_name: 'Node JS',
            project_desc: <FaNodeJs className='commonIcons' />,
        },
        {
            id: 6,
            project_name: 'Express',
            project_desc: <FaNodeJs className='commonIcons' />,
        },
        // {
        //     id: 7,
        //     project_name: 'Mongo DB',
        //     project_desc: <SiMongodb className='commonIcons' />,
        // },
    ];
    return (
        <>
            <div className="container-fluid text-center" id="SkillDiv">
                <div className="row" style={{ color: "red" }}>
                    <div className="col-5" style={{ textAlign: "right", display: "inline-flex", justifyContent: "flex-end", alignItems: "center" }}>
                        <GoFileCode style={{ fontSize: "25px" }} />
                    </div>
                    <div className="col-5" style={{ textAlign: "left" }}>
                        <h2 className="heading">
                            <span style={{ color: "white" }}>TECHNOLOGY</span>
                        </h2>
                    </div>
                </div>
                <div className="row colorTechnologies">
                    {projects.map((item, index) => {
                        return (
                            <div className="col-4" style={{ marginTop: "130px", paddingLeft: "10px" }} key={item.id}>
                                <div className="colorTechnologies">
                                    <Slide direction={'up'}>
                                        {item.project_desc}
                                        <h5 className="heading">
                                            {item.project_name}
                                        </h5>
                                    </Slide>
                                </div>
                            </div>
                        )
                    })} 
                </div>
            </div>
            <Project />
        </>
    )
}
export default Skill;