import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../../resources/styles/dashboard.css';
import DashboardHeader from '../ui_component/DashboardHeader';

const AdminPage = () => {

    return (
        <div>
            <Container>
                <form className='dashboard'>

                    <DashboardHeader text="Administration" />

                    <div className='multiple-choices'></div>
                </form>


            </Container>
        </div>
    )
}

export default AdminPage