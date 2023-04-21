import { Col, Container, Row } from 'react-bootstrap';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useGetDonationDetailsByIdWithUserInfoQuery } from '../../store/reducers/donationsSlice'
import { useGetDonationRequestDetailsByIdWithUserInfoQuery } from '../../store/reducers/donationsRequestSlice'
import '../../resources/styles/donationdetail.css';
import DashboardHeader from '../ui/DashboardHeader';

const getUseGetDonationQuery = (path) => {
    if (path.includes("/donation_request/")) {
        return useGetDonationRequestDetailsByIdWithUserInfoQuery;
    } else if (path.includes("/donation/")) {
        return useGetDonationDetailsByIdWithUserInfoQuery;
    } else {
        console.error("Invalid route path");
        return null;
    }
};

const DonationDetail = () => {

    const token = localStorage.getItem('token')

    const location = useLocation();
    const { id } = useParams()
    const navigate = useNavigate();
    const donationId = location?.state?.id || id;


    const useGetDonationQuery = getUseGetDonationQuery(location.pathname);
    const { data, isLoading, isError } = useGetDonationQuery(donationId);
    const donation = data?.[0] ?? null;

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error fetching donation details</div>
    console.log(donation)

    const handleGoBack = () => {
        navigate(-1);
    };

    // TODO: kontaktieren mit mail link nicht genug
    const handleContactClick = () => {
        if (token) {
            const mailtoLink = `mailto:${donation.email}`;
            console.log(mailtoLink)
            window.location.href = mailtoLink;
        } else {
            navigate("/login");
        }
    };

    return (
        <Container>
            <div className='dashboard'>
                <div className="text-center">
                    <DashboardHeader />
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

                        {token && (
                            <div className='kontaktdetails'>
                                <h6>kontaktdetails</h6>
                                <p>Name: {donation.first_name} {donation.last_name}</p>
                                <p>Verein: {donation.club_name}</p>
                                <p>E-mail:   <a href={`mailto:${donation.email}`}>{donation.email}</a></p>
                                <p>Telefon: {donation.phone}</p>
                            </div>
                        )}
                        <button className='button-pink' onClick={handleContactClick}>Kontaktieren</button>
                        <button className='button-pink' onClick={handleGoBack}>Zurück</button>
                    </div>
                </div>

            </div>
        </Container>



    );
};

export default DonationDetail;






