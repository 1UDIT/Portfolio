import { HashLink } from 'react-router-hash-link';
import { AiTwotonePhone, AiOutlineMail } from "react-icons/ai";
import { BsPinMap } from "react-icons/bs";

const ContactUs = () => {
    return (
        <>
            <div className="container-fluid text-center ContactUs_page p-4" id="Contact">
                <h1 style={{ paddingTop: "40px", textAlign: "center" }}></h1>
                <div className="row">
                    <div className="col-sm-4 text_style">
                        <h4 style={{ textAlign: "left" }}>Portfolio</h4>
                        <p>Thank you for visiting my personal portfolio website. Connect with me over socials.

                            Keep Rising 🚀. Connect with me over live chat!</p>
                    </div>
                    <div className="col-sm">
                        <ul className="navbar-nav" style={{
                            paddingLeft: "15px", margin: "0px",
                            listStyleType: "circle", textAlign: "left"
                        }}>
                            <h4>Quick Links</h4>
                            <li className="nav-item"  >
                                <HashLink className="nav-link "
                                    style={{ padding: "0px", margin: "0px" }}
                                    to="#Home">Home</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link"
                                    style={{ padding: "0px", margin: "0px" }}
                                    to="#About">About</HashLink>
                            </li>
                            <li className="nav-item" >
                                <HashLink className="nav-link"
                                    style={{ padding: "0px", margin: "0px" }}
                                    to="#SkillDiv">Skill</HashLink>
                            </li>
                            <li className="nav-item" >
                                <HashLink className="nav-link" to="#Project" style={{ padding: "0px", margin: "0px" }}>Project</HashLink>
                            </li>
                            <li className="nav-item" >
                                <HashLink className="nav-link" to="#Contact" style={{ padding: "0px", margin: "0px" }}>Contact</HashLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm" style={{ textAlign: "left" }}>
                        <h4 >Contact Info</h4>
                        <div className="row">
                            <div className="col-2" style={{ textAlign: "left",color: "red" }}>
                                <AiTwotonePhone style={{ fontSize: "25px" }} />
                            </div>

                            <div className="col" style={{ textAlign: "left" }}>
                                <h6 className="heading">
                                    <span style={{ color: "white" }}>+91 XXX-XXX-XXXX</span>
                                </h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2" style={{ textAlign: "left",color: "red" }}>
                                <AiOutlineMail style={{ fontSize: "25px" }} />
                            </div>
                            <div className="col" style={{ textAlign: "left"  }}>
                                <h6 className="heading">
                                    <span style={{ color: "white" }}>uditsharma7195@gmail.com</span>
                                </h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2" style={{ textAlign: "left",color: "red" }}>
                                <BsPinMap style={{ fontSize: "25px" }} />
                            </div>
                            <div className="col" style={{ textAlign: "left" }}>
                                <h6 className="heading">
                                    <span style={{ color: "white" }}>New Delhi, India-110075</span>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactUs;