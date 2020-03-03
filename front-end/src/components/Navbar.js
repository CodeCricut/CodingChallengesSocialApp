import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="px-0 pb-3">
            <Navbar.Brand>
                <Link to="/">CodeChallenges</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to="/posts">
                        <Nav.Link>Challenges</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/create">
                        <Nav.Link>Create Challenge</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/user">
                        <Nav.Link>Profile</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
