import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/navLogo.svg';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {name} = loggedInUser;
    return (
        <div className='container font-weight-bold'>
            <Navbar expand="lg">
                <Navbar.Brand href="#home"> 
                    <img src={logo} alt="" width="40px"/> Event Photography
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link>
                            <Link to="/" className="nav-link mr-3">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="#projects" className="nav-link mr-3">Our Projects</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="#about-us" className="nav-link mr-3">About Us</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="#contact-us" className="nav-link mr-3">Contact Us</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/Dashboard" className="nav-link mr-3">Dashboard</Link>
                        </Nav.Link>
                        <Nav.Link>
                            {
                                name ? <Link style={{cursor:'default'}} to="#" className="nav-link mr-3 bg-warning">{name}</Link> : <Link to="/login" className="btn btn-warning mr-3">Login</Link>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;