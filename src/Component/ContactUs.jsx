import { HashLink } from 'react-router-hash-link';

const ContactUs = () => {
    return (
        <>
            <div className="container-fluid text-center ContactUs_page p-4 mt-4" id="Contact">
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
                        <div>+91 XXX-XXX-XXXX</div>

                        <div>uditsharma7195@gmail.com</div>

                        <div>New Delhi, India-110075</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactUs;