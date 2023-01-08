import logo from './logo.svg';
import './App.css';
import { React, useEffect, useState } from 'react'


function App() {

const handleSubmit = event => {
      event.preventDefault();
      alert('You have submitted the form.')
    }



  return (
    
   
 
    <div className="App container m-4">
      <div className='navigator'></div>
      <div className="row">
        <div className="text-center">
          <label className='spendendetails'>SPENDENDETAILS</label>
        </div>
      </div>
      <p className='paragraph'>Wir möchten deine Spende bestmöglich erfassen. Bitte gib hier die Details deiner Spende ein.</p> 
      <p className='meine-spende'>MEINE SPENDE</p>
     
     
     
     
     <div className='wrapper'>
      <form class='form-container' onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <p>Anzahl</p>
           <input name="anzahl" />
         </label>
      </fieldset>
       <button type="submit">ZURÜCK</button>
       <button type='submit'>DATEN PRÜFEN</button>
      </form>
   </div></div>
  );
}

export default App;

