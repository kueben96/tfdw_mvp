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
														onChange={() => { }}
													></input>
												</Form.Group>
											</Col>
											<Col sm={6}>
												<Form.Group className="mb-1 flex-col" controlId="lastName">
													<label>Nachname *</label>
													<input className="form-input-grey"
														type="text"
														value={lastname}
														onChange={() => { }}
													></input>
												</Form.Group>
											</Col>
										</Row>

										<Form.Group className="mb-1 flex-col" controlId="email">
											<label>E-Mail-Adresse *</label>
											<input className="form-input-grey"
												type="email"
												value={email}
												onChange={() => { }}
											></input>
										</Form.Group>

										<Form.Group className="mb-1 flex-col" controlId="phone">
											<label>Telefonnummer</label>
											<input className="form-input-grey"
												type="tel"
												value={phoneNumber}
												onChange={() => { }}
											></input>
										</Form.Group>

										<Form.Group className="mb-1 flex-col" controlId="club">
											<label>Vereinsname / Organnisationsname *</label>
											<input className="form-input-grey"
												type="text"
												value={clubName}
												onChange={() => { }}
											></input>
										</Form.Group>
										<Form.Group className="mb-1 flex-col" controlId="address">
											<label>Straße und Hausnummer *</label>
											<input className="form-input-grey"
												type="text"
												value={address}
												onChange={() => { }}
											></input>
										</Form.Group>

										<Row>
											<Col md={4}>
												<Form.Group className="mb-1 flex-col" controlId="zipCode">
													<label>PLZ *</label>
													<input className="form-input-grey"
														type="number"
														value={zipCode}
														onChange={() => { }}
													></input>
												</Form.Group>
											</Col>
											<Col md={6}>
												<Form.Group className="mb-1 flex-col" controlId="city">
													<label>Stadt *</label>
													<input className="form-input-grey"
														type="text"
														value={city}
														onChange={() => { }}
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
													onChange={() => { }}
												></input>
											</Form.Group>
										</Col>




										<Form.Group className="mb-1 flex-col" controlId="password">
											<label>Password *</label>
											<input className="form-input-grey"
												type="password"
												value={password}
												onChange={() => { }}
											></input>
										</Form.Group>
										<Form.Group className="mb-1 flex-col" controlId="password">
											<label>Password wiederholen *</label>
											<input className="form-input-grey"
												type="password"
												value={password}
												onChange={() => { }}
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


{/* <form className='registerform' onSubmit={handleSubmit}>
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
					<li><input type="text" clasName="verein-name" size="50" id='verein' /></li>
					<li><label for="address">Straße und Hausnummer</label></li>
					<li><input type="text" className="address" size="50" id='address' /></li>


					<div className='pick-country'>
						<li><label for="zip">ZIP code</label>
							<input className="zip" id='zip'></input></li>

						<li><label for="country">Stadt</label>
							<input type="text" className="city" id='city' /></li>
					</div>


					<li><label for="bundesland">Bundesland</label>
						<li><input type="text" className="bundesland" size="12" id='land' /></li>
					</li>
					<li><label for="passid">Passwort</label></li>
					<li><input type="password" className="passid" size="12" id='pswd' /></li>
					<li><label for="passid">Passwort wiederholen</label></li>
					<li><input type="password" className="repeat-pass" size="12" id='rpswd' /></li>

					<label class="register-check">Ich möchte spenden
						<input type="checkbox" id='ch1' />
						<span class="checkmark"></span>
					</label>

					<label class="register-check">Ich suche Spenden
						<input type="checkbox" id='ch2' />
						<span class="checkmark"></span>
					</label>

					<li><button type="submit" className="registerbutton" value="Submit">Konto erstellen </button>
					</li>
				</ul>

			</form>

		</div> */}
