import logo from './logo.svg';
import './App.css';
import { React, useEffect, useState , useReducer} from 'react'

const formReducer = (state, event) => {
  if(event.reset) {
    return {
      DonationProduct: 'Empty',
      Count: 0,
      ColorChoice: 'Empty',
      Gender: 'Empty',
      Comment: 'Empty ',
    }
  }
  return {
    ...state,
    [event.name]: event.value
  }
 };
window.onload = function(){
    var mainListDiv = document.getElementById("hamburger"),
    mediaButton = document.getElementById("nav__link");
   
   mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
   };
    }


function App() {
  const [selected, setSelected] = useState('');

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
   setSubmitting(true);

   setTimeout(() => {
     setSubmitting(false);
     setFormData({
      reset: true
    })
   }, 3000)
 }
 const handleChange = event => {
  const isRadio = event.target.type === 'radio';
   
     
  setFormData({
    name: event.target.name,
    value: event.target.value,
    value: isRadio ? event.target.value : event.target.value,

  });
}

  return (
    
    
 
    <div className="App container m-4">
 <nav className="nav" onChange={handleChange}>
        <a href="/" className="logo">logo</a>

        <div className="hamburger" id='hamburger'>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <div className="nav__link hide" id='nav__link'>
          <a href="#">Spenden</a>
          <a href="#">Trikot-Wichteln</a>
          <a href="#">Spendenprojekte</a>
          <a href="#">Über uns</a>
          <a href="#">Blog</a>
          <a href="#">Kontakt</a>
        </div>
      </nav>
    
<section className="home"></section>


 <div className='wrapper'>
     {submitting &&
       <div>Wird bearbeitet...</div>
     }

<div className='navigator'>
      <div className="row">
        <div className="text-center">
          <label className='spendendetails'>SPENDENDETAILS</label>
        </div>
        <div className='para'>
           <p className='paragraph'>Wir möchten deine Spende bestmöglich erfassen. Bitte gib hier die Details deiner Spende ein.</p> 
        </div> 
        {submitting &&
        <div className='valuessubmitted'>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>: {value.toString()}</li>
            ))}
          </ul>
        </div>
      }
           <p className='meine-spende'>MEINE SPENDE</p>
      </div>


      {/* enctype="multipart/form-data" */}
      <div className='formdiv'>
         <form  className='form-container' onSubmit={handleSubmit} >
         <fieldset disabled={submitting}>
         <label>
           <p>Was möchtest du spenden?</p>
           <select name='DonationProduct' className="donationproduct" onChange={handleChange} required>
               <option value="" selected disabled hidden>Wähle Art</option>
               <option value="Kindergröße">Trikot in Kindergröße</option>
               <option value="Erwachsenengröß">Trikot in Erwachsenengröße</option>
               <option value="Trikotsatz">Trikotsatz (Trikot + Hose)</option>
               <option value="Leibchen">Leibchen</option>
               <option value="Fußballschuhe">Fußballschuhe (Paar)</option>
               <option value="Torwarthandschuhe">Torwarthandschuhe (Paar)</option>
               <option value="Bälle">Bälle</option>
             </select>
          </label>

         <label>
           <p>Anzahl</p>
           <input className='anzahl' type="number" name="Count" min='0' placeholder='Nr.' onChange={handleChange} step="1" required/>
         </label>

         
           <p>Farbe</p>
          <div name='ColorChoice' className='colorchoice' onChange={handleChange}>
          <label><input type="radio" id='radio1' name="testRadioSet" value="Green"/></label>
          <label><input type="radio" id='radio2' name="testRadioSet" value="Yellow"/> </label>
          <label><input type="radio" id='radio3' name="testRadioSet" value="Black"/></label>
          <label><input type="radio" id='radio4' name="testRadioSet" value="White"/> </label>
          <label><input type="radio" id='radio5' name="testRadioSet" value="Red"/></label>
          <label><input type="radio" id='radio6' name="testRadioSet" value="Gray"/> </label>
          <label><input type="radio" id='radio7' name="testRadioSet" value="Blue"/></label>
          <label><input type="radio" id='radio8' name="testRadioSet" value="Orange"/> </label>
                
            </div>  
           
            <label>
           <p>Schnitt</p>
           <select  name='Gender' className='prodgender' onChange={handleChange} required>
               <option value="" selected disabled hidden>Wähle Schnit</option>
               <option value="unisex">unisex</option>
               <option value="male">male</option>
               <option value="female">female</option>
              
             
           </select>
         </label>  
         <label>
         <p>Möchtest du uns noch weitere Infos mitteilen?</p>
         
          <textarea name='Comment' className='commentbox' type="text" id="comment-box" placeholder="Schreibe eine Nachricht" onChange={handleChange}></textarea>
         
          </label>  
          <label>
            <p>Falls du ein Foto hast, füge es gerne hinzu. </p>
          <input name='AttachFile' type="file" className='choosefile' id="file[]" multiple onChange={handleChange}/>
         
          </label>
       

      </fieldset>
       <button type="submit" disabled={submitting}>ZURÜCK</button>
       <button type='submit' disabled={submitting}>DATEN PRÜFEN</button>
      </form>
   </div></div>


        <div className='bottom'>
          <label className='bttmtext'>TEILE FREUDE, HOFFNUNG UND DEIN TRIKOT</label>
          </div>       
   </div></div>
  );


}


export default App;


