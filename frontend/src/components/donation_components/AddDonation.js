import { Col, Container, Row } from 'react-bootstrap';
import '../../resources/styles/setpost.css';
import DashboardHeader from '../ui_component/DashboardHeader';
import { useAddDonationMutation } from '../../store/reducers/donationsSlice';
import { useAddDonationRequestMutation } from '../../store/reducers/donationsRequestSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const isDonationRequestPath = (path) => {
    return path.includes("/donation_request/");
};

const isDonationPath = (path) => {
    return path.includes("/donation/");
};

const getAddDonationQuery = (path) => {
    if (isDonationRequestPath("/donation_request/")) {
        return useAddDonationRequestMutation;
    } else if (isDonationPath("/donation/")) {
        return useAddDonationMutation;
    } else {
        console.error("Invalid route path");
        return null;
    }
};
const AddDonation = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const pageType = isDonationRequestPath(location.pathname) ? "Gesuch" : "Spende";
    const useAddDonationQuery = getAddDonationQuery(location.pathname);

    const [addDonation, { isLoading, isError, isSuccess }] = useAddDonationQuery();

    const [entry, setEntry] = useState({
        category: "",
        amount: 0,
        size_1: "",
        size_2: "",
        color_1: "",
        color_2: "",
        description: '',
        status: 'offen'
    });

    const handleGoBack = () => {
        navigate(-1);
    };
    const handleCreateEntry = () => {
        addDonation(entry);
    };

    const headerText = `Eintrag für ${pageType} erstellen`;
    return (
        <Container>
            <div className='dashboard'>
                <DashboardHeader text={headerText} />
                <Container>

                    <div className='donation-articles' >
                        <div id='post-width'>
                            <h6>Spendendetails</h6>
                            <p>Falls du einen Trikotsatz spendest, kannst du eine Durchschnittsgröße angeben. </p>
                            <div className='set-filters'>
                                <Row>
                                    <Col>
                                        <select name="category" className='filters'
                                            value={entry.category}
                                            onChange={(e) => setEntry({ ...entry, category: e.target.value })} >
                                            <option value="" disabled defaultValue>Kategorie</option>
                                            <option value="jersey_kit">Trikot Set</option>
                                            <option value="jersey_top">Trikot Oberteil</option>
                                            <option value="tracksuit_top">Trainingsanzug Oberteil</option>
                                            <option value="shoes">Schuhe (Paar)</option>
                                            <option value="football_sock">Stutzen</option>
                                            <option value="bib">Leibchen</option>
                                            <option value="gloves">Handschuhe (Paar)</option>
                                        </select>
                                    </Col>
                                    <Col >
                                        <select name="size_1" className='filters'
                                            value={entry.size_1}
                                            onChange={(e) => setEntry({ ...entry, size_1: e.target.value })}>
                                            <option value='' disabled defaultValue>Größe</option>
                                            <option value="adult">Adult</option>
                                            <option value="children">Kids</option>
                                        </select>
                                    </Col>
                                    <Col>
                                        <select name="color" className='filters'
                                            value={entry.color_1}
                                            onChange={(e) => setEntry({ ...entry, color_1: e.target.value })} >
                                            <option value='' disabled defaultValue>Farbe</option>
                                            <option value="red">Rot</option>
                                            <option value="yellow">Gelb</option>
                                            <option value="green">Grün</option>
                                            <option value="blue">Blau</option>
                                            <option value="white">Weiß</option>
                                            <option value="orange">Orange</option>
                                        </select>
                                    </Col>
                                    <Col >
                                        <input className='filters' id='amount' type="number" min='0' value={entry.amount}
                                            onChange={e => setEntry({ ...entry, amount: e.target.value })} />
                                    </Col>
                                </Row>
                            </div>
                            <div className='text-areas'>
                                <Row>
                                    <p>Beschreibe deine Spende</p>
                                    <div className='gray-describe'>
                                        <textarea type='text' className='commentbox'
                                            value={entry.description}
                                            onChange={(e) => setEntry({ ...entry, description: e.target.value })}
                                            placeholder='Bspw verschiedene Trikotgrößen eines Trikotsatz, Zustand der Spende, etc. '>
                                        </textarea>
                                    </div>
                                </Row>
                            </div>
                            <div className='setpost-buttons'>
                                <button className='button-pink' onClick={handleCreateEntry}>Erstellen</button>
                                <button className='button-pink' onClick={handleGoBack} >Zurück</button>
                            </div>
                            {isLoading && <p>Loading...</p>}
                            {isError && <p>Oops, something went wrong.</p>}
                            {isSuccess && <p>{pageType} added successfully!</p>}
                        </div>
                    </div>
                </Container>
            </div>

        </Container>


    );
};

export default AddDonation;




