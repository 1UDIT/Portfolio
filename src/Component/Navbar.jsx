import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
   
    return (
        <nav className="navbar navbar-expand-lg sticky-top  navbar-inverse navbar-fixed-top bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/home">
                    <span> &lt;</span>
                    <span> Us </span>
                    <span> /&gt;</span>
                    </NavLink>
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
                        
                    </ul>

                </div>
            </div>
        </nav>
    )
}
export default Navbar;