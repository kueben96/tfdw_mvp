import React from 'react';
import logo from '../../images/Jersey_Icon.svg'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Logo } from '../../resources/Logo';
import Blog from '../../images/Blog.png'
import Globe from '../../images/Globe.png'
import Heart from '../../images/Heart.png'
import Pray from '../../images/Pray.svg'
import Santa from '../../images/Santa.png'
import TShirt from '../../images/T-Shirt.png'


const Header = () => {
    //TODO: fetch with GraphQl
    const navElements = [
        {
            name: "Spenden",
            logo: Pray
        },
        {
            name: "Trikot-Wichteln",
            logo: Santa
        },
        {
            name: "Spendenprojekte",
            logo: Globe
        },
        {
            name: "Über uns",
            logo: TShirt
        },
        {
            name: "Blog",
            logo: Blog
        },
        {
            name: "Kontakt",
            logo: Heart
        },
    ]


    return (
        <Navbar collapseOnSelect className="nav-fixed nav" expand="lg" >
            <Container>
                <Navbar.Brand className="ml-auto" href="#">
                    <Logo></Logo>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className=" justify-content-end" id="responsive-navbar-nav">
                    <Nav className="mr-auto nav-components">
                        {navElements.map(element => (<Nav.Link key={element.name} className="nav-element" offset={300} duration={500} href={`#${element.name.toLowerCase()}`}>{<NavElement item={element}></NavElement>}</Nav.Link>))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Header;


const NavElement = ({ item }) => {
    return (
        <div className='nav-element'>
            <span>{item.name}</span>
            <img
                className="d-inline-block align-top"
                alt={item.name}
                src={item.logo}
            />
        </div>
    )
}