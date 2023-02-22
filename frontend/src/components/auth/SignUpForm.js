import '../../resources/styles/register.css';
import { React, useState, useReducer } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import AccountCircle from '../../images/AccountCircle.png'
import MenuIcon from '../../images/MenuIcon.png'
import { useSignupMutation } from '../../store/reducers/authApiSlice';



function Registerform() {

	const [user, setUser] = useState({ id: "", asDonor: false, asRecipient: false, firstName: "", lastname: "", email: "", phoneNumber: "", clubName: "", address: "", zipCode: "", city: "", federalState: "", password: "", password: "", repeatPassword: "" });

	const [addUser, { isLoading: updating, isSuccess: saved }] = useSignupMutation();


	const inputHandler = (e) => {
		const { name, value, checked } = e.target;
		// TODO: check if password is same
		// code here
		let theValue = isCheckox(name) ? checked : value
		console.log(theValue)
		setUser({ ...user, [name]: theValue });
	};

	console.log(user)

	const isCheckox = (name) =>
		name === "user-type-donor" || "user-type-recipient" ? true : false


	const saveUser = (e) => {
		e.preventDefault();
		addUser(user);
		// goBack(700);
	};

	return (
		<div>
			<Container>
				<Row className="d-flex justify-content-center align-items-center">
					<Col md={8} lg={6} xs={12}>
						<div className="form-card">

							<div className="">
								<div className="form-header">
									<img src={MenuIcon} className="icon"></img>
									<h2 className="text-uppercase ">
										Dein Konto
									</h2>
									<img src={AccountCircle} className="icon"></img>
								</div>
								<div className="form-body">
									<div className="mb-10">Um deine Angaben für die nächsten Spenden zu speichern, erstelle gerne ein Benutzerkonto.   </div>
									<Form>
										<Form.Check
											type="checkbox"
											id="user-type-donor"
											name="user-type-donor"
											label="Ich möchte spenden"
											onChange={inputHandler}
										/>
										<Form.Check
											type="checkbox"
											id="user-type-recipient"
											name="user-type-recipient"
											label="Ich suche Spenden"
											onChange={inputHandler}
										/>
										<Row>
											<Col sm={6} md={6}>
												<Form.Group className="mb-1 flex-col" controlId="firstName">
													<label>Vorname *</label>
													<input className="form-input-grey"
														type="text"
														id='firstName'
														name='firstName'
														onChange={inputHandler}
													></input>
												</Form.Group>
											</Col>
											<Col sm={6}>
												<Form.Group className="mb-1 flex-col" controlId="lastName">
													<label>Nachname *</label>
													<input className="form-input-grey"
														type="text"
														id='lastName'
														name='lastName'
														onChange={inputHandler}
													></input>
												</Form.Group>
											</Col>
										</Row>

										<Form.Group className="mb-1 flex-col" controlId="email">
											<label>E-Mail-Adresse *</label>
											<input className="form-input-grey"
												type="email"
												id='email'
												name='email'
												onChange={inputHandler}
											></input>
										</Form.Group>

										<Form.Group className="mb-1 flex-col" controlId="phone">
											<label>Telefonnummer</label>
											<input className="form-input-grey"
												type="tel"
												id='phone'
												name='phone'
												onChange={inputHandler}
											></input>
										</Form.Group>

										<Form.Group className="mb-1 flex-col" controlId="club">
											<label>Vereinsname / Organnisationsname *</label>
											<input className="form-input-grey"
												type="text"
												id='clubName'
												name='clubName'
												onChange={inputHandler}
											></input>
										</Form.Group>
										<Form.Group className="mb-1 flex-col" controlId="address">
											<label>Straße und Hausnummer *</label>
											<input className="form-input-grey"
												type="text"
												id='address'
												name='address'
												onChange={inputHandler}
											></input>
										</Form.Group>

										<Row>
											<Col md={4}>
												<Form.Group className="mb-1 flex-col" controlId="zipCode">
													<label>PLZ *</label>
													<input className="form-input-grey"
														type="number"
														id='zipCode'
														name='zipCode'
														onChange={inputHandler}
													></input>
												</Form.Group>
											</Col>
											<Col md={6}>
												<Form.Group className="mb-1 flex-col" controlId="city">
													<label>Stadt *</label>
													<input className="form-input-grey"
														type="text"
														id='city'
														name='city'
														onChange={inputHandler}
													></input>
												</Form.Group>
											</Col>
										</Row>
										<Col >
											<Form.Group className="mb-1 flex-col" controlId="federalState">
												<label>Bundesland *</label>
												<input className="form-input-grey"
													type="text"
													id='federalState'
													name='federalState'
													onChange={inputHandler}
												></input>
											</Form.Group>
										</Col>
										<Form.Group className="mb-1 flex-col" controlId="password">
											<label>Password *</label>
											<input className="form-input-grey"
												type="password"
												id='password'
												name='password'
												onChange={inputHandler}
											></input>
										</Form.Group>
										<Form.Group className="mb-1 flex-col" controlId="password">
											<label>Password wiederholen *</label>
											<input className="form-input-grey"
												type="password"
												id='repeatPassword'
												name='repeatPassword'
												onChange={inputHandler}
											></input>
										</Form.Group>
										<Button bsPrefix='button-pink align-self-right' className='button-pink'>Konto erstellen</Button>
									</Form>
								</div>
							</div>

						</div>
					</Col>
				</Row>
			</Container >
		</div >
	)


}
export default Registerform;
