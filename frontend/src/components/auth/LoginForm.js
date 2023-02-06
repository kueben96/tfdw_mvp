import '../../resources/styles/login.css';
import { React, useState, useEffect, useRef } from 'react';
import Button from "react-bootstrap/Button";
import { Container, Col, Row, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectCurrentUser, setCredentials } from '../../store/reducers/authSlice';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const errRef = useRef()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const authUser = useSelector(selectCurrentUser)


    useEffect(() => {
        // redirect to home if already logged in
        if (authUser) navigate('/');

    }, []);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState('')

    // TODO: implement more advanced navigation
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const userData = dispatch(login({ email, password }))

            // TODO: hier ist komisch
            console.log({ ...userData })
            setCredentials({ ...userData, email })
            // TODO: set user email into the state
            console.log('userData')
            console.log(userData)

            setEmail('')
            setPassword('')
            navigate('/')
        } catch (err) {
            // TODO: handle errors from reducer 
            if (!err?.originalStatus) {
                // isLoading: true until timeout occurs
                setErrMsg('No Server Response');
            } else if (err.originalStatus === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.originalStatus === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }

            errRef.current.focus();
        }

    }
    const handleEmailInput = (e) => setEmail(e.target.value)

    const handlePasswordInput = (e) => setPassword(e.target.value)

    return (

        <div>
            <Container>
                <Row className="auth-section d-flex justify-content-center align-items-center">

                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
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