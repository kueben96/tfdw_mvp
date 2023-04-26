import { Col, Container,  Row } from 'react-bootstrap';
import '../resources/styles/setpost.css';
import SetUpPostElements from './SetUpPostElements';



const SetUpPost = () => {
   
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
              <SetUpPostElements></SetUpPostElements>
          </div>
              
  </Container>
      
      
     );
  };
  
  export default SetUpPost;




