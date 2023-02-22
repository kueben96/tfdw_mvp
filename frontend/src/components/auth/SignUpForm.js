import '../../resources/styles/register.css';
import { React, useState, useReducer } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import AccountCircle from '../../images/AccountCircle.png'
import MenuIcon from '../../images/MenuIcon.png'



function Registerform() {

	const [firstName, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [clubName, setClubName] = useState("");
	const [address, setAddress] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [city, setCity] = useState("");
	const [federalState, setFederalState] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");


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
											id="user-type"
											label="Ich möchte spenden"
										/>
										<Form.Check
											type="checkbox"
											id="user-type"
											label="Ich suche Spenden"
										/>
										<Row>
											<Col sm={6} md={6}>
												<Form.Group className="mb-1 flex-col" controlId="firstName">
													<label>Vorname *</label>
													<input className="form-input-grey"
														type="text"
														value={firstName}
														onChange={(e) => setFirstName(e.target.value)}
													></input>
												</Form.Group>
											</Col>
											<Col sm={6}>
												<Form.Group className="mb-1 flex-col" controlId="lastName">
													<label>Nachname *</label>
													<input className="form-input-grey"
														type="text"
														value={lastname}
														onChange={(e) => setLastName(e.target.value)}
													></input>
												</Form.Group>
											</Col>
										</Row>

										<Form.Group className="mb-1 flex-col" controlId="email">
											<label>E-Mail-Adresse *</label>
											<input className="form-input-grey"
												type="email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											></input>
										</Form.Group>

										<Form.Group className="mb-1 flex-col" controlId="phone">
											<label>Telefonnummer</label>
											<input className="form-input-grey"
												type="tel"
												value={phoneNumber}
												onChange={(e) => setPhoneNumber(e.target.value)}
											></input>
										</Form.Group>

										<Form.Group className="mb-1 flex-col" controlId="club">
											<label>Vereinsname / Organnisationsname *</label>
											<input className="form-input-grey"
												type="text"
												value={clubName}
												onChange={(e) => setClubName(e.target.value)}
											></input>
										</Form.Group>
										<Form.Group className="mb-1 flex-col" controlId="address">
											<label>Straße und Hausnummer *</label>
											<input className="form-input-grey"
												type="text"
												value={address}
												onChange={(e) => setAddress(e.target.value)}
											></input>
										</Form.Group>

										<Row>
											<Col md={4}>
												<Form.Group className="mb-1 flex-col" controlId="zipCode">
													<label>PLZ *</label>
													<input className="form-input-grey"
														type="number"
														value={zipCode}
														onChange={(e) => setZipCode(e.target.value)}
													></input>
												</Form.Group>
											</Col>
											<Col md={6}>
												<Form.Group className="mb-1 flex-col" controlId="city">
													<label>Stadt *</label>
													<input className="form-input-grey"
														type="text"
														value={city}
														onChange={(e) => setCity(e.target.value)}
													></input>
												</Form.Group>
											</Col>
										</Row>
										<Col >
											<Form.Group className="mb-1 flex-col" controlId="federalState">
												<label>Bundesland *</label>
												<input className="form-input-grey"
													type="text"
													value={federalState}
													onChange={(e) => setFederalState(e.target.value)}
												></input>
											</Form.Group>
										</Col>




										<Form.Group className="mb-1 flex-col" controlId="password">
											<label>Password *</label>
											<input className="form-input-grey"
												type="password"
												value={password}
												onChange={(e) => setPassword(e.target.value)}
											></input>
										</Form.Group>
										<Form.Group className="mb-1 flex-col" controlId="password">
											<label>Password wiederholen *</label>
											<input className="form-input-grey"
												type="password"
												value={password}
												onChange={(e) => setRepeatPassword(e.target.value)}
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
