import { Col, Container, Row } from 'react-bootstrap';
import '../resources/styles/setpost.css';
import SetUpPostElements from './SetUpPostElements';
import DashboardHeader from './ui/DashboardHeader';



const SetUpPost = () => {

    return (
        <Container>
            <div className='dashboard'>
                <DashboardHeader text="Eintrag erstellen" />
                <SetUpPostElements></SetUpPostElements>
            </div>

        </Container>


    );
};

export default SetUpPost;




