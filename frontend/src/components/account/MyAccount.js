import React, { useState } from 'react';
import { Col, Container, Nav, NavItem, Row } from 'react-bootstrap';
import AccountEntries from './AccountEntries';
import AccountDetail from './AccountDetail';
import DashboardHeader from '../ui/DashboardHeader';


const MyAccount = () => {
    const [activeTab, setActiveTab] = useState('entries');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
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
                    {activeTab === 'entries' ? <AccountEntries /> : <AccountDetail />}
                </div>
            </div>
        </Container>
    )
}

export default MyAccount;



