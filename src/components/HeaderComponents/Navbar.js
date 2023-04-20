import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Resume from '../../assets/jlayog_resume23.pdf';

// !!! React-bootstrap has a bug where 'sticky="top"' will not function when enclosed in a div !!!
// fixed: top may be better solution and has better browser support
// TODO
// FIX BLOG LINK
const MainNavbar = () => {
    return(
        <Navbar expand="lg" variant="dark" bg="dark" sticky="top">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="me-auto" activeKey="/home">
                            <Nav.Item>
                                <Nav.Link href="/">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={Resume} target="_blank">Resume</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://www.github.com/jlayog">Github</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    ) 
}

export default MainNavbar;