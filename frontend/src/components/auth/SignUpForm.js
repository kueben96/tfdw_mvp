import '../../resources/styles/donationdetails.css';
import { React, useState, useReducer } from 'react';


function SignUpForm() {
   
    return(

 <div className='formdiv'>
 <form className='form-container'  >
   <fieldset >
     <label>
       <p>Was möchtest du spenden?</p>
       <select name='DonationProduct' className="donationproduct" required>
         <option value="" selected disabled hidden>Wähle Art</option>
         <option value="Kindergröße">Trikot in Kindergröße</option>
         <option value="Erwachsenengröße">Trikot in Erwachsenengröße</option>
         <option value="Trikotsatz">Trikotsatz (Trikot + Hose)</option>
         <option value="Leibchen">Leibchen</option>
         <option value="Fußballschuhe">Fußballschuhe (Paar)</option>
         <option value="Torwarthandschuhe">Torwarthandschuhe (Paar)</option>
         <option value="Bälle">Bälle</option>
       </select>
     </label>

     <label>
       <p>Anzahl</p>
       <input className='anzahl' type="number" name="Count" min='0' placeholder='Nr.'  step="1" required />
     </label>


     <p>Farbe</p>
     <div name='ColorChoice' className='colorchoice' >
       <label><input type="radio" id='radio1' name="testRadioSet" value="Green" /></label>
       <label><input type="radio" id='radio2' name="testRadioSet" value="Yellow" /> </label>
       <label><input type="radio" id='radio3' name="testRadioSet" value="Black" /></label>
       <label><input type="radio" id='radio4' name="testRadioSet" value="White" /> </label>
       <label><input type="radio" id='radio5' name="testRadioSet" value="Red" /></label>
       <label><input type="radio" id='radio6' name="testRadioSet" value="Gray" /> </label>
       <label><input type="radio" id='radio7' name="testRadioSet" value="Blue" /></label>
       <label><input type="radio" id='radio8' name="testRadioSet" value="Orange" /> </label>

     </div>

     <label>
       <p>Schnitt</p>
       <select name='Gender' className='prodgender'  required>
         <option value="" selected disabled hidden>Wähle Schnit</option>
         <option value="unisex">unisex</option>
         <option value="male">male</option>
         <option value="female">female</option>


       </select>
     </label>
     <label>
       <p>Möchtest du uns noch weitere Infos mitteilen?</p>

       <textarea name='Comment' className='commentbox' type="text" id="comment-box" placeholder="Schreibe eine Nachricht" ></textarea>

     </label>
     <label>
       <p>Falls du ein Foto hast, füge es gerne hinzu. </p>
       <input name='AttachFile' type="file" className='choosefile' id="file[]" multiple />

     </label>


   </fieldset>
   <button className='donationbutton' type="submit" >ZURÜCK</button>
   <button className='donationbutton' type='submit' >DATEN PRÜFEN</button>
 </form>
 </div>


    );
}

export default SignUpForm;