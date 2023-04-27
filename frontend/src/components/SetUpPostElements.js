import { useReducer, useState } from 'react';
import { Col, Container, Placeholder, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import '../resources/styles/setpost.css';

const SetUpPostElements = () => {
    
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoBack = () => {
        navigate('/dashboard');
      };

    const [state1, setState1] = useState(0);
    const [isSecondBoxVisible, setIsSecondBoxVisible] = useState(false);

    const [categoryValue, setCategoryValue] = useState("");
    const [sizeValue, setSizeValue] = useState("");
    const [colorValue, setColorValue] = useState("");
    const [commentText, setCommentText] = useState('');

    const handleSetSecondBoxVisible = () => {
        setIsSecondBoxVisible(true);
      }

    const handleCheck = () => {
        
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('category', categoryValue);
        searchParams.set('size', sizeValue);
        searchParams.set('color', colorValue);
        searchParams.set('amount', state1);
        searchParams.set('comment', commentText);
        navigate(`/dashboard/post?${searchParams.toString()}`);
   
      };
    
    
     
    return (
      <Container>
      
          <div className='donation-articles' >
            <div id='post-width'>
               <h6>Spendendetails</h6>
               <p>Falls du einen Trikotsatz spendest, kannst du eine Durchschnittsgröße angeben. </p>
      
            <div className='set-filters'>
             <Row>
               <Col>
                   <select name="category" className='filters'
                   value={categoryValue}  
                   onChange={(e) => setCategoryValue(e.target.value)} >
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
                <select name="size_1"  className='filters' 
                value={sizeValue}  
                onChange={(e) => setSizeValue(e.target.value)}>
                <option value='' disabled defaultValue>Größe</option>
                <option value="adult">Adult</option>
                <option value="children">Kids</option>
                </select>
               </Col>
               <Col>
               <select name="color" className='filters' 
                 value={colorValue}  
                 onChange={(e) => setColorValue(e.target.value)} >
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
              <input className='filters' id='amount' type="number" value={state1}
               onChange={e => setState1(e.target.value)}/>
              </Col>
              </Row> 
              </div>
              <div className='text-areas'>
              <Row>
              <p>Beschreibe deine Spende</p>
              <div className='gray-describe'>
              <textarea type='text' className='commentbox' 
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
               placeholder='Bspw verschiedene Trikotgrößen eines Trikotsatz, Zustand der Spende, etc. '>
                  
                  
               </textarea>
              </div>
              </Row></div> 

              {isSecondBoxVisible ? (
                <div>
                    <div className='straight-line'></div>
                  <div className='set-filters'>
                  <Row>
                  <Col>
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
                  <option value="orange">Orange</option>
                  </select>
                 </Col>
                 <Col >
                 <input className='filters' id='amount' type="number" value={state1}
                  onChange={e => {setState1("" + Number(e.target.value)); }} />
         
                 </Col>
                 </Row> 
               </div>
               <div className='text-areas'>
              <Row>
                <p>Beschreibe deine Spende</p>
                <div className='gray-describe'>
                  <textarea type='text' className='commentbox' 
                  placeholder='Bspw verschiedene Trikotgrößen eines Trikotsatz, Zustand der Spende, etc.'></textarea>
                </div>
              </Row></div></div>
               ) : null}

              <div className='setpost-buttons'>
              <button className='button-pink' 
                 onClick={() => navigate('/nextpage?comment=' 
                 
                 +  encodeURIComponent(commentText) 
                 + '&size=' + encodeURIComponent(sizeValue)
                 + '&color=' + encodeURIComponent(colorValue) 
                 + '&category=' + encodeURIComponent(categoryValue)
                 + '&amount=' + encodeURIComponent(state1)
                  )}
                 >Überprüfen</button>

                <button className='button-pink' onClick={handleGoBack} >Züruck</button>
             
                {isSecondBoxVisible ? null : (
                <button className='button-pink' onClick={handleSetSecondBoxVisible}>
                  Weitere Spenden
                </button>
              )}
              </div></div>
    
            
              </div>
             
  </Container>
      
      
     
    );
  };
  
  export default SetUpPostElements;




