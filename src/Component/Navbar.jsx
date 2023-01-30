import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    let activeStyle = {
        textDecoration: "underline",
    };
    return (
        <nav className="navbar navbar-expand-lg  navbar-inverse navbar-fixed-top bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Port</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link "
                                style={({ isActive }) =>
                                    isActive ? { textDecoration: "underline" } : {}
                                }
                                to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"
                                style={({ isActive }) =>
                                    isActive ? { textDecoration: "underline" } : {}
                                }
                                to="Project">About</NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink className="nav-link"
                                style={({ isActive }) =>
                                    isActive ? { textDecoration: "underline" } : {}
                                } to="/Skill">Skill</NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink className="nav-link"
                                style={({ isActive }) =>
                                    isActive ? { textDecoration: "underline" } : {}
                                } to="/Project">Project</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"
                                style={({ isActive }) =>
                                    isActive ? { textDecoration: "underline" } : {}
                                } to="/Project">Contact</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
export default Navbar;