import '../../resources/styles/login.css';
import { React, useState, useEffect, useRef } from 'react';
import Button from "react-bootstrap/Button";
import { Container, Col, Row, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, setCredentials } from '../../store/reducers/authSlice';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../store/reducers/authApiSlice';

function LoginForm() {
    // TODO: handle reset password (backend alreaady done)
    // TODO: handle refresh token 
    const errRef = useRef()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const authUser = useSelector(selectCurrentUser)

    const [login, { isLoading }] = useLoginMutation()


    useEffect(() => {
        // redirect to home if already logged in
        if (authUser) navigate('/');

    }, []);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState('')

    // TODO: implement more advanced validation
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    const resetForm = () => {
        setEmail('')
        setPassword('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const userData = await login({ email, password }).unwrap()
            dispatch(setCredentials({ ...userData }))

            resetForm()
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

    const routeSignUp = () => {
        navigate('/signup')
    }

    return (

        <Container>

            <div className="login-form">

                <Row className="auth-section d-flex justify-content-center align-items-center">

                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <Col >
                        <h2>Schön, dass du da bist</h2>
                        <h4 className='login-paragraph'>Bitte melde dich mit deinen Benutzerdaten an, erstelle ein Konto oder fahre als Gast fort.</h4>
                        <div className="logincontainer">
                            <Form onSubmit={handleSubmit}>
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
                                    <a className="login-text1" href="/">Ich habe mein Passwort vergessen.  </a>
                                </Form.Group>

                                <Button bsPrefix='button-pink' type="submit" onSubmit={validateForm} >
                                    Anmelden
                                </Button>

                            </Form></div>
                        <Row>
                            <Col>
                                <div>Ich möchte ein Benutzerkonto erstellen.</div>
                                <Button onClick={routeSignUp} bsPrefix='button-pink-outlined'>
                                    Registrieren
                                </Button>
                            </Col>
                        </Row>

                    </Col>
                </Row>

            </div>
        </Container>




    );



}

export default LoginForm;