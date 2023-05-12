import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const DashboardHeader = ({ text = "Spendenplattform" }) => {

    const navigate = useNavigate()
    return (
        <div className="text-center">
            <Row>
                <Col sm={2} >
                    <button className='home-image' onClick={() => navigate('/')}></button></Col>
                <Col sm={8}>
                    <h4>{text}</h4></Col>
                <Col sm={2} >
                    <button className='konto-image' onClick={() => navigate('/account')}></button></Col>
            </Row>
        </div>

    )
}

export default DashboardHeader