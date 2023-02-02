import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from 'react-bootstrap'

const Header = () => {
    //TODO: fetch with GraphQl
    const names = ["Spenden", "Trikot-Wichteln", "Spendenprojekte", "Über uns", "Blog", "Kontakt"]

    return (
        <Navbar collapseOnSelect className="nav-fixed nav" expand="lg" >
            <Container>
                <Navbar.Brand className="ml-auto" href="#">
                    <img
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-space-between" id="responsive-navbar-nav">
                    <Nav className="mr-auto nav-components">
                        {names.map(item => (<Nav.Link activeClass='active' spy={true} smooth={true} offset={300} duration={500} className="nav-element" href={`#${item.toLowerCase()}`}>{item}</Nav.Link>))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Header;