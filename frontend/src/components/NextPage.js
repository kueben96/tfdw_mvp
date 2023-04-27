import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const NextPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const commentText = searchParams.get('comment');


  const category = searchParams.get('category');
  const size = searchParams.get('size');
  const color = searchParams.get('color');
  const amount = searchParams.get('amount');
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
        <div className='donation-articles'>
              <div id='post-width'>
              <h6>Spendendetails</h6>
                <Row>
                <Col>
                <select className='filters'>
                <option value='' disabled selected>{category}</option>

                </select></Col>
                <Col><select className='filters'>
                <option value='' disabled selected>{size}</option>

                </select> </Col>
                <Col><select className='filters'>
                <option value='' disabled selected>{color}</option>

                </select></Col>
                <Col><select className='filters'>
                <option value='' disabled selected>{amount}</option>

                </select></Col>
                </Row>
           <div className='text-areas'>
           <p className='commentbox'>{commentText}</p></div>
     
            <div className='setpost-buttons'>
            <button className='button-pink' >Bearbeiten</button>  
            <button className='button-pink' >Züruck</button>
            <button className='button-pink' >Bestätigen</button>  
    </div>
    </div>     
    </div>
        </div>
     
</Container>
    
  );
};
export default NextPage