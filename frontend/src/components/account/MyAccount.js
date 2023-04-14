import React, { useState } from 'react';
import { Col, Container, Nav, NavItem, Row } from 'react-bootstrap';
import AccountEntries from './AccountEntries';
import AccountDetail from './AccountDetail';


const MyAccount = () => {
    const [activeTab, setActiveTab] = useState('entries');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <Container>
            <div className='dashboard'>
                <div className="text-center">
                    <Row>
                        <Col sm={2}>
                            <button className='home-image'></button>
                        </Col>
                        <Col sm={8}>
                            <h4>Spendenplatform</h4>
                        </Col>
                        <Col sm={2}>
                            <button className='konto-image'></button>
                        </Col>
                    </Row>
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



