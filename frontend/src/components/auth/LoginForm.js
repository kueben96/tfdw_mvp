import '../../resources/styles/login.css';
import { React, useState, useReducer } from 'react';
import Button from "react-bootstrap/Button";
import { Container, Col, Row, Form, Card } from 'react-bootstrap';

function LoginForm() {
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

        <div>
            <Container>
                <Row className="auth-section d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <h2>Schön, dass du da bist</h2>

                        <Form id="login-form" onSubmit={handleSubmit}>
                            <span>Ich habe ein Benutzer:innenkonto.</span>
                            <Form.Group ze="lg" controlId="email">
                                <input className="form-input-white"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='E-Mail Addresse'
                                ></input>

                            </Form.Group>
                            <Form.Group size="lg" controlId="password">
                                <input className="form-input-white"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Passwort'
                                ></input>

                            </Form.Group>

                            <Button bsPrefix='button-pink' type="submit" onSubmit={validateForm} >
                                Anmelden
                            </Button>

                        </Form>
                        <Row>
                            <Col>
                                <div>Ich möchte ein Benutzerkonto erstellen.</div>
                                <Button bsPrefix='button-pink-outlined' type="submit" onSubmit={validateForm} >
                                    Registrieren
                                </Button>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>



    );



}

export default LoginForm;