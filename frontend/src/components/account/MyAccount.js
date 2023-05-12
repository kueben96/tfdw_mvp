import React from 'react';
import { Col, Container, Nav, NavItem, Row } from 'react-bootstrap';
import DashboardHeader from '../ui_component/DashboardHeader';
import { Outlet, useParams, useNavigate } from 'react-router-dom';

// TODO: Implement page according to figma file
const MyAccount = () => {
    const { activeTab } = useParams();
    const navigate = useNavigate();

    const handleTabClick = (tab) => {
        navigate(`/account/${tab}`);
    };

    return (
        <Container>
            <div className='dashboard'>
                <div className="text-center">
                    <DashboardHeader text="Mein Konto" />
                </div>
                <Row>
                    <Col>
                        <Nav variant="tabs">
                            <NavItem>
                                <Nav.Link onClick={() => handleTabClick('entries')} active={activeTab === 'entries'}>Einträge</Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link onClick={() => handleTabClick('details')} active={activeTab === 'details'}>Kontodetails</Nav.Link>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
                <div className='articles'>
                    <Outlet />
                </div>
            </div>
        </Container>
    );
};


export default MyAccount;



