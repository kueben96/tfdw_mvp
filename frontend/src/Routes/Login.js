import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  function hideIcon(self) {
    self.style.backgroundImage = 'none';
}

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
      <div className="login-form">
   <div class="logincontainer">
   
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label></Form.Label>
          <Form.Control
          className="login-email"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='E-Mail Addresse'
            onchange="hideIcon(this);"
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label></Form.Label>
          <Form.Control
          className="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Passwort'
            onchange="hideIcon(this);"
          />
          <a className="login-text1" href="#">Ich habe mein Passwort vergessen.  </a>
        </Form.Group>
        <Button className='loginbutton' block="true"  type="submit" onSubmit={validateForm}>
          Anmelden
        </Button>
        <p className="login-text2" >Ich möchte ein Benutzerkonto erstellen.</p>
        <Button className='loginbutton' block="true"  type="submit" disabled={!validateForm()}>
          Registrieren
        </Button>
      </Form>
    </div>
    </div>
    </div> 
  );
}
