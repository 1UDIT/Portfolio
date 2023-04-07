import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
   
    return (
        <nav className="navbar navbar-expand-lg sticky-top  navbar-inverse navbar-fixed-top navbar-dark bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <HashLink className="navbar-brand" to="#Home">
                    <span> &lt;</span>
                    <span> Us </span>
                    <span> /&gt;</span>
                    </HashLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <HashLink className="nav-link "
                                 
                                to="#Home">Home</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link"
                                 
                                to="#About">About</HashLink>
                        </li>
                        <li className="nav-item" >
                            <HashLink className="nav-link"                         
                                                          
                                to="#SkillDiv">Skill</HashLink>
                        </li>
                        <li className="nav-item" >
                            <HashLink className="nav-link" to="#Project">Project</HashLink>
                        </li>
                        <li className="nav-item" >
                            <HashLink className="nav-link" to="#Contact">Contact</HashLink>
                        </li>
                        
                    </ul>

                </div>
            </div>
        </nav>
    )
}
export default Navbar;