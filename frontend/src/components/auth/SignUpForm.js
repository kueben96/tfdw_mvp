import '../../resources/styles/register.css';
import { React, useState, useReducer } from 'react';

import { Form } from 'react-router-dom';



const formReducer = (state, event) => {
    if (event.reset) {
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
  
function Registerform(){


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


		var name= document.getElementById("name").value;
		var lastname= document.getElementById("lastname").value;
		var email= document.getElementById("email1").value;
		var address= document.getElementById("address").value;			
		var verein= document.getElementById("verein").value;
    var zip= document.getElementById("zip").value;
		var land= document.getElementById("land").value;
		var pswd= document.getElementById("pswd").value;
		var rpswd= document.getElementById("rpswd").value;			
		var ch1= document.getElementById("ch1").value;
    var ch2= document.getElementById("ch2").value;
		
	

	

	 }

return(


    <div  >
<form className='registerform' onSubmit={handleSubmit}>
<div className="register-text-center">
          <label className='register-titel'>DEIN KONTO</label>
        </div>
        <div className='registerpara'>
          <p className='register-paragraph'>Um deine Angaben für die nächsten Spenden zu speichern, erstelle gerne ein Benutzerkonto.   </p>
        </div>
<ul className='register-list'>
<div className='pick-country'>
<li><label for="zip">Vorname</label>
<input className="zip" id='name'></input></li> 

<li><label for="country">Nachname</label> 
<input type="text" className="city" id='lastname' /></li>
   </div>
   

<li><label for="email">Email</label></li>
<li><input type="email" className="email" id='email1' /></li>


<li><label for="username">ggf. Vereinsname</label></li>
<li><input type="text" clasName="verein-name" size="50"  id='verein'/></li>
<li><label for="address">Straße und Hausnummer</label></li>
<li><input type="text" className="address" size="50" id='address' /></li>


<div className='pick-country'>
<li><label for="zip">ZIP code</label>
<input className="zip" id='zip'></input></li> 

<li><label for="country">Stadt</label> 
<input type="text" className="city" id='city'/></li>
   </div>


<li><label for="bundesland">Bundesland</label>
<li><input type="text" className="bundesland" size="12"  id='land'/></li>
</li>
<li><label for="passid">Passwort</label></li>
<li><input type="password" className="passid" size="12"  id='pswd'/></li>
<li><label for="passid">Passwort wiederholen</label></li>
<li><input type="password" className="repeat-pass" size="12" id='rpswd'/></li>

<label class="register-check">Ich möchte spenden
  <input type="checkbox" id='ch1'/>
  <span class="checkmark"></span>
</label>

<label class="register-check">Ich suche Spenden
  <input type="checkbox" id='ch2'/>
  <span class="checkmark"></span>
</label>

<li><button type="submit" className="registerbutton" value="Submit">Konto erstellen </button>
</li>
</ul>

</form>





</div>
);





}
export default Registerform;