import React from 'react'
import { Container, Row } from 'react-bootstrap'
import DashboardHeader from '../ui_component/DashboardHeader'

// TODO: implement password reset
const PasswordReset = () => {
    return (
        <Container>
            <div className='dashboard'>
                <DashboardHeader text="Mein Konto" />
                <Row>
                    <p>Bitte kontaktiere die Administrationsstelle</p>
                </Row>
            </div>

        </Container>
    )
}

export default PasswordReset