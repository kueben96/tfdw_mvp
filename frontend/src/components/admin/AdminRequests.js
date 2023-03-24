import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../../resources/styles/dashboard.css';

const AdminRequests = () => {

    const donations = [{}]

    return (
        <div>
            <Container>
                <form className='dashboard'>
                    
                    <div className="text-center">
                        <Row>
                            <Col sm={2} >
                            <button className='home-image'></button></Col>
                            <Col sm={8}>
                            <h4>Administration</h4></Col>
                            <Col sm={2} >
                            <button className='konto-image'></button></Col>
                        </Row>
                    </div>
                      <div className='multiple-choices'></div>
            
                </form>


</Container>
        </div>
    )
}

export default AdminRequests