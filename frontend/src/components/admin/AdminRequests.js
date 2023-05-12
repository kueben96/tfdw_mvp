import React from 'react'
import { Container } from 'react-bootstrap';
import '../../resources/styles/dashboard.css';
import DashboardHeader from '../ui/DashboardHeader';

const AdminRequests = () => {

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

export default AdminRequests