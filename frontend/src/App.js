import logo from './logo.svg';
import './App.css';
import { React, useEffect, useState , useReducer} from 'react'

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
 }

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
   setSubmitting(true);

   setTimeout(() => {
     setSubmitting(false);
   }, 3000)
 }
 const handleChange = event => {
  setFormData({
    name: event.target.name,
    value: event.target.value,
  });
}
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

  return (
    
    
 
    <div className="App container m-4">
 <nav class="nav">
        <a href="/" class="logo">logo</a>

        <div class="hamburger">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>

        <div class="nav__link hide">
          <a href="#">Spenden</a>
          <a href="#">Trikot-Wichteln</a>
          <a href="#">Spendenprojekte</a>
          <a href="#">Über uns</a>
          <a href="#">Blog</a>
          <a href="#">Kontakt</a>
        </div>
      </nav>
    
<section class="home"></section>




      <div className='navigator'></div>
      <div className="row">
        <div className="text-center">
          <label className='spendendetails'>SPENDENDETAILS</label>
        </div>
      </div>
      <p className='paragraph'>Wir möchten deine Spende bestmöglich erfassen. Bitte gib hier die Details deiner Spende ein.</p> 
      <p className='meine-spende'>MEINE SPENDE</p>
     
     
     
     <div className='wrapper'>
     {submitting &&
       <div>Wird bearbeitet...</div>
     }
      <form class='form-container' onSubmit={handleSubmit} enctype="multipart/form-data">
      <fieldset>
      <label>
           <p>Was möchtest du spenden?</p>
           <select className="donationproduct" onChange={handleChange} required>
               <option value="" selected disabled hidden>Wähle Art</option>
               <option value="d1">Trikot in Kindergröße</option>
               <option value="d2">Trikot in Erwachsenengröße</option>
               <option value="d3">Trikotsatz (Trikot + Hose)</option>
               <option value="d4">Leibchen</option>
               <option value="d5">Fußballschuhe (Paar)</option>
               <option value="d6">Torwarthandschuhe (Paar)</option>
               <option value="d7">Bälle</option>
             
           </select>
         </label>

         <label>
           <p>Anzahl</p>
           <input className='anzahl' type="number" name="count" min='0' placeholder='Nr.' onChange={handleChange} step="1" required/></label>

         
           <p>Farbe</p>
          <div className='colorchoice' onChange={handleChange}>
          <label><input type="radio" id='radio1' name="testRadioSet" value="1"/></label>
          <label><input type="radio" id='radio2' name="testRadioSet" value="2"/> </label>
          <label><input type="radio" id='radio3' name="testRadioSet" value="3"/></label>
          <label><input type="radio" id='radio4' name="testRadioSet" value="4"/> </label>
          <label><input type="radio" id='radio5' name="testRadioSet" value="5"/></label>
          <label><input type="radio" id='radio6' name="testRadioSet" value="6"/> </label>
          <label><input type="radio" id='radio7' name="testRadioSet" value="7"/></label>
          <label><input type="radio" id='radio8' name="testRadioSet" value="8"/> </label>
                
            </div>  
           
            <label>
           <p>Schnitt</p>
           <select className='prodgender' onChange={handleChange} required>
               <option value="" selected disabled hidden>Wähle Schnit</option>
               <option value="d1">unisex</option>
               <option value="d2">male</option>
               <option value="d3">female</option>
              
             
           </select>
         </label>  
         <label>
         <p>Möchtest du uns noch weitere Infos mitteilen?</p>
         
          <textarea className='commentbox' type="text" id="comment-box" placeholder="Schreibe eine Nachricht"></textarea>
      
          </label>  
          <label>
            <p>Falls du ein Foto hast, füge es gerne hinzu. </p>
          <input type="file" className='choosefile' id="file[]" multiple />
         
          </label>
       

      </fieldset>
       <button type="submit">ZURÜCK</button>
       <button type='submit'>DATEN PRÜFEN</button>
      </form>
   </div>


        <div className='bottom'>
          <label className='bttmtext'>Teile Freude, Hoffnung und dein Trikot</label>
          </div>       
   </div>
  );
}


export default App;


