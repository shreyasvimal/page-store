import React from 'react';
import './style.scss';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => (
    <div className="ps-header">
        <Navbar sticky="top" bg="dark" variant="dark">
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/work">Look at our work</Nav.Link>
                <Nav.Link href="/order">Order Online</Nav.Link>
                <Nav.Link href="/contact-us">Contact Us</Nav.Link>
            </Nav>
        </Navbar>
    </div>
);

export default Header;