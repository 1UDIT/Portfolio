import { Slide } from "react-awesome-reveal";
import {
    FaHtml5,
    FaReact,
    FaJs,
    FaNodeJs,
    FaCss3,
} from 'react-icons/fa';
import { SiRedux  } from 'react-icons/si';
import "./Skill.css"

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
        <section   id="SkillDiv">
            <div className="container-fluid text-center">
                <h1 style={{ paddingTop: "10px",textAlign:"center" }}>TECHNOLOGY</h1>
                <div className="row colorTechnologies">
                    {projects.map((item,index) => (
                        <div className="col-3" style={{ marginTop: "130px", paddingLeft: "150px" }} key={index}>
                            <div className="colorTechnologies">
                                <Slide direction={'up'}>
                                    {item.project_desc}
                                    <h5 className="heading">
                                        {item.project_name}
                                    </h5>
                                </Slide>
                            </div>
                        </div>
                    ))}

                    {/* <div className="col" style={{ position: "relative", marginTop: "130px" }}>
                        <Slide direction={'up'}>
                            <h1 className="heading-name">

                            </h1>
                        </Slide>

                    </div> */}
                </div>
            </div>
        </section>
    )
}
export default Skill;