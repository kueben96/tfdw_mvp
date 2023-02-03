
import '../resources/styles/donationdetails.css';
import { React, useState, useReducer } from 'react';
import SignUpForm from './auth/SignUpForm';
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

/* window.onload ist necessary because .getElement... wasnt recognized as the function 
is happening before the elements inside function App are running */
window.onload = function () {
  var mainListDiv = document.getElementById("hamburger"),
    mediaButton = document.getElementById("nav__link");

  mediaButton.onclick = function () {

    "use strict";

    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");

  };
}

function DonationDetails() {


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


    <div className="App ">

      {/* <nav className="nav" onChange={handleChange}>
        <a href="/" className="logo">logo</a>

        <div className="hamburger" id='hamburger'>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <div className="nav__link hide" id='nav__link'>
          <a href="/">Spenden</a>
          <a href="/">Trikot-Wichteln</a>
          <a href="/">Spendenprojekte</a>
          <a href="/">Über uns</a>
          <a href="/">Blog</a>
          <a href="/">Kontakt</a>
        </div>
      </nav> */}

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

<SignUpForm></SignUpForm>
         
          </div></div>
      </div>

    


  );



}

export default DonationDetails;