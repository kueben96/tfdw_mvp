import '../../resources/styles/login.css';
import { React, useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import { Container, Col, Row, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectCurrentUser, setCredentials } from '../../store/reducers/authSlice';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const authUser = useSelector(selectCurrentUser)


    useEffect(() => {
        // redirect to home if already logged in
        if (authUser) navigate('/');

    }, []);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // TODO: implement more advanced navigation
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const userData = dispatch(login({ email, password }))
            console.log(userData)
            setCredentials({ ...userData, email })
            setEmail('')
            setPassword('')
        } catch (e) {
            console.log(e)
        }

    }
    const handleEmailInput = (e) => setEmail(e.target.value)

    const handlePasswordInput = (e) => setPassword(e.target.value)

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
                                    onChange={handleEmailInput}
                                    placeholder='E-Mail Addresse'
                                ></input>

                            </Form.Group>
                            <Form.Group size="lg" controlId="password">
                                <input className="form-input-white"
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordInput}
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