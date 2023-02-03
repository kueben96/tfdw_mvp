import React, { useState } from "react";
import '../resources/styles/login.css';
import LoginForm from './auth/LoginForm';

export default function Login() {
  
return (
    <div className="App ">
 
      <div className="loginwrap">
        <div className="login-text-center">
          <label className='login-titel'>SCHÖN, DASS DU DA BIST!</label>
        </div>
        <div className='loginpara'>
          <p className='login-paragraph'>Bitte melde dich mit deinen Benutzerdaten an, erstelle ein Konto oder fahre als Gast fort.  </p>
        </div>
        <p className="login-text" >Ich habe ein Benutzerkonto. </p>

      </div>
     <LoginForm></LoginForm>
    </div>
  );
}
