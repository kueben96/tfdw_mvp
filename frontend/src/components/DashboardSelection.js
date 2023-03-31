import React from 'react'
import { Container } from 'react-bootstrap';
import '../resources/styles/selection.css';
import { useNavigate } from 'react-router-dom';


const DashboardSelection = () => {

    const navigate = useNavigate();

    return (
        <Container>
            <div className='selection'>
                <div className="text-center">
                    <h4>Spendenplatform</h4>
                </div>
                <div className='buttons'>
                    <button onClick={() => navigate('/dashboard/donations_requests')} className='button-pink'>Ich möchte spenden</button>
                    <button onClick={() => navigate('/dashboard/donations')} className='button-pink'>Ich suche Spenden</button>
                </div>
            </div>
        </Container>
    )
}

export default DashboardSelection