import { useState } from 'react';
import { Col, Container, Placeholder, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import '../resources/styles/setpost.css';
   
const SetUpPost = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('/dashboard');
      };
  const [state1, setState1] = useState(0);
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
            <div id='post-width'>
          <h6>Spendendetails</h6>
          <p>Falls du einen Trikotsatz spendest, kannst du eine Durchschnittsgröße angeben. </p>
      
          <div className='set-filters'>
          <Row>
          <Col >

<select name="category"  className='filters'>
    <option value="" disabled selected>Kategorie</option>
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
<select name="size_1"  className='filters'>
    <option value='' disabled selected>Größe</option>
    <option value="adult">Adult</option>
    <option value="children">Kids</option>
</select>
</Col>



<Col >
<select name="color" className='filters'  >
    <option value='' disabled selected>Farbe</option>
    <option value="red">Rot</option>
    <option value="yellow">Gelb</option>
    <option value="green">Grün</option>
    <option value="blue">Blau</option>
    <option value="white">Weiß</option>
    <option value="black">Schwarz</option>
    <option value="orange">Orange</option>
</select>
</Col>
<Col >

<input className='filters'
        id='amount'
        type="number"
        value={state1}
        onChange={e => {setState1("" + Number(e.target.value));
      
        }}
      />
      
</Col>
</Row></div>
<div className='text-areas'></div>
<Row>
<p>Beschreibe deine Spende</p>
<div className='gray-describe'>
<textarea type='text' className='commentbox' 
placeholder='Bspw verschiedene Trikotgrößen eines Trikotsatz, Zustand der Spende, etc. '></textarea>
</div>


</Row>
<div className='setpost-buttons'>
      <button className='button-pink'>Überprüfen</button>
            <button className='button-pink' onClick={handleGoBack}>Züruck</button>
          <button className='button-pink'>Weitere Spende</button></div>
            </div>
    
            
          </div>
      
        
         
         
         
      </div>
  </Container>
      
      
     
    );
  };
  
  export default SetUpPost;






