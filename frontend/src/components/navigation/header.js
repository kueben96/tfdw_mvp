import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Logo } from '../ui_component/Logo';
import Blog from '../../images/Blog.png'
import Globe from '../../images/Globe.png'
import { Heart } from '../../images'
import Pray from '../../images/Pray.svg'
import Santa from '../../images/Santa.png'
import TShirt from '../../images/T-Shirt.png'
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentToken } from '../../store/reducers/authSlice';
import { useNavigate } from 'react-router-dom'


const Header = () => {

    const dispatch = useDispatch();

    const token = useSelector(selectCurrentToken)
    const navigate = useNavigate()

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

    if (token) {
        navElements.push({ name: "Logout" })
    } else {
        navElements.push({ name: "Login" })
    }

    const onClickAuth = (element) => {

        if (element.name === "Login") {
            navigate('/login')
        } else if (element.name === "Logout") {
            dispatch(logOut())
        }
    }


    return (
        <Navbar collapseOnSelect className="nav-fixed nav" expand="lg" >
            <Container>
                <Navbar.Brand className="ml-auto" href="/">
                    <Logo></Logo>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className=" justify-content-end" id="responsive-navbar-nav">
                    <Nav className="mr-auto nav-components">
                        {navElements.map(element => (<Nav.Link onClick={(e) => { e.preventDefault(); onClickAuth(element) }} key={element.name} className="nav-element" offset={300} duration={500} href={`${element.name.toLowerCase()}`}>{<NavElement item={element}></NavElement>}</Nav.Link>))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Header;


const NavElement = ({ item }) => {

    const renderNavIcon = () => {
        if (item.logo) {
            return <img
                className="d-inline-block align-top"
                alt={item.name}
                src={item.logo}
            />
        } else {
            return <></>
        }
    }
    return (
        <div className='nav-element'>
            <span>{item.name}</span>

            {renderNavIcon()}
        </div>
    )
}