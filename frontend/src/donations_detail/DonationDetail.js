import { Col, Container, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import '../resources/styles/donationdetail.css';

const DonationDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { donation } = location.state;

    const handleGoBack = () => {
        navigate('/dashboard');
    };

    if (!donation) {
        return <p>No donation data available</p>;
    }

    return (
        <Container>
            <div className='dashboard'>
                <div className="text-center">
                    <Row>
                        <Col sm={2} >
                            <button className='home-image'></button></Col>
                        <Col sm={8}>
                            <h4>Spendenplatform</h4></Col>
                        <Col sm={2} >
                            <button className='konto-image'></button></Col>
                    </Row>
                </div>


                <div className='donation-articles' >

                    <div className='articles-cards' id='elements'>
                        <div className='each-article'>
                            <button className='unclickable white-button' disabled>
                                <Row>
                                    <Col className='yellow-tick'>
                                    </Col>
                                    <Col >
                                        <h6> {donation.category}</h6>
                                        <p>{donation.amount} Stück, PLZ {donation.zip_code}</p>
                                    </Col>
                                </Row>
                            </button>
                        </div>

                        <div className='details-gesuch'>
                            <h6>DETAILS GESUCH</h6>
                            <p>Kategorie: {donation.category}</p>
                            <p>Größe: {donation.size_1}, {donation.size_2}</p>
                            <p>Farbe: {donation.color_1}</p>
                            <p>Anzahl: {donation.amount}</p>
                            <p>PLZ: {donation.zip_code}</p>
                            <p>Beschreibung: {donation.description}</p>
                        </div>
                        <div className='kontaktdetails'>
                            <h6>kontaktdetails</h6>
                            <p>Name: {donation.first_name} {donation.last_name}</p>
                            <p>Verein: {donation.club_name}</p>
                            <p>E-mail: {donation.email}</p>
                            <p>Telefon: {donation.phone}</p>



                        </div>
                        <button className='button-pink'>Kontaktieren</button>
                        <button className='button-pink' onClick={handleGoBack}>Zurück</button>
                    </div>
                </div>

            </div>
        </Container>



    );
};

export default DonationDetail;






