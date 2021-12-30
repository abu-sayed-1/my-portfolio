import React from 'react';
import "./NavBar.css";
import { Navbar,Container, Nav } from 'react-bootstrap';
import logo from "../../images/Logo.gif"

const NavBar = () => {
    return (
        <div className="navbar_container">
            <Navbar className="px-lg-5 fixed-top" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container fluid className="fluid px-lg-5 ">
                    <Navbar.Brand href="/#headerMain"><img src={logo} alt="" className="img-fluid" width="60"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="mr-5" href="/#aboutMe">About Me</Nav.Link>
                            <Nav.Link className="mr-5" href="/#work">Work</Nav.Link>
                            <Nav.Link className="mr-5" href="/#skills">Skills</Nav.Link>
                            <Nav.Link className="mr-5" href="/#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;