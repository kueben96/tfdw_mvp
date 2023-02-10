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
		
		
        //email id expression code
		var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	// 	if(name==='')
	// 	{
	// 		alert('Please enter your name');
	// 	}
	// 	else if(!letters.test(name))
	// 	{
	// 		alert('Name field required only alphabet characters');
	// 	}
    // if(lastname==='')
	// 	{
	// 		alert('Please enter your lastname');
	// 	}
	// 	else if(!letters.test(name))
	// 	{
	// 		alert('Lastname field required only alphabet characters');
	// 	}
    // if(address==='')
	// 	{
	// 		alert('Please enter address');
	// 	}
    // if(land==='')
	// 	{
	// 		alert('Please enter land');
	// 	}
	// 	else if(!letters.test(name))
	// 	{
	// 		alert('Name land required only alphabet characters');
	// 	}
	// 	else if(email==='')
	// 	{
	// 		alert('Please enter your user email id');
	// 	}
	// 	else if (!filter.test(email))
	// 	{
	// 		alert('Invalid email');
	// 	}
	// 	else if(zip==='')
	// 	{
	// 		alert('Please enter the ZIP Code.');
	// 	}
	// 	else if(!filter.test(zip))
	// 	{
	// 		alert('ZIP Code field required only numerical characters');
	// 	}
	// 	else if(pswd==='')
	// 	{
	// 		alert('Please enter Password');
	// 	}
	// 	else if(rpswd==='')
	// 	{
	// 		alert('Enter Confirm Password');
	// 	}
	// 	else if(!pwd_expression.test(pswd))
	// 	{
	// 		alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
	// 	}
	// 	else if(pswd != rpswd)
	// 	{
	// 		alert ('Password not Matched');
	// 	}
	// 	else if(document.getElementById("t5").value.length < 6)
	// 	{
	// 		alert ('Password minimum length is 6');
	// 	}
	// 	else if(document.getElementById("t5").value.length > 12)
	// 	{
	// 		alert ('Password max length is 12');
	// 	}




	// 	else
	// 	{				                            
    //            alert('Thank You for Login & You are Redirecting to TFDW Website');
			 
	// 	}
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