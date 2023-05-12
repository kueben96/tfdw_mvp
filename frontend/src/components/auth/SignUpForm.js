import '../../resources/styles/register.css';
import { React, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import AccountCircle from '../../assets/images/AccountCircle.png'
import MenuIcon from '../../assets/images/MenuIcon.png'
import { useSignupMutation } from '../../store/reducers/authApiSlice';

function Registerform() {

	const [user, setUser] = useState({ firstName: "", lastName: "", email: "", phoneNumber: "", clubName: "", address: "", zipCode: "", city: "", federalState: "", password: "", password: "", repeatPassword: "", role: "" });

	const [error, setError] = useState({})

	const [isDonor, setIsDonor] = useState(true);
	const [isRecipient, setIsRecipient] = useState(false)

	const handleOnChangeIsDonor = (e) => {
		setIsDonor(!isDonor)
		setIsRecipient(isDonor)
		setUser({ ...user, role: getRole() })
	}

	const getRole = () => {
		let role = ""
		if (isDonor === true) {
			role = "donor"
		}
		else role = "recipient"
		return role
	}

	// use mutation to post request on API
	const [addUser, { isLoading: updating, isSuccess: saved }] = useSignupMutation();


	const inputHandler = (e) => {
		const { name, value } = e.target;
		if (!isCheckox(name)) {
			setUser({ ...user, [name]: value });
		}
	};

	const isEmail = (email) =>
		/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);


	const isValid = () => {
		const errors = { ...error }
		if (!isEmail(user.email)) {
			errors.email = "Invalid email";
			console.log("why invalid")
			console.log(user.email)
		}
		if (!user.email) {
			errors.email = "Enter Email";
			console.log("why invalid")
			console.log(user.email)
		}
		if (!user.firstName) {
			errors.firstName = "Enter FirstName";
		}
		if (!user.lastName) {
			errors.lastName = "Enter LastName";
		}
		if (!user.address) {
			errors.lastName = "Enter Street";
		}
		if (!user.clubName) {
			errors.clubName = "Enter Club Name";
		}
		if (!user.zipCode) {
			errors.zipCode = "Enter ZipCode";
		}
		if (!user.city) {
			errors.zipCode = "Enter City";
		}
		if (!user.federalState) {
			errors.federalState = "Enter Region";
		}
		setError(errors)

		if (!Object.keys(error).length) {
			console.log("error obj", Object.keys(error))
			return true
		} else {
			return false
		}


	}

	const validatePasswordOnRepeat = e => {
		let { name, value } = e.target;

		const passwordErrors = { ...error };
		switch (name) {
			case "password":
				if (!value) {
					passwordErrors.password = "Please enter Password.";
				} else if (user.repeatPassword && value !== user.repeatPassword) {
					passwordErrors.repeatPassword = "Password and Confirm Password does not match.";
				} else {
					passwordErrors.repeatPassword = user.repeatPassword ? "" : error.repeatPassword;
				}
				break;

			case "repeatPassword":
				if (!value) {
					passwordErrors.repeatPassword = "Please enter Confirm Password.";
				} else if (user.repeatPassword && value !== user.password) {
					passwordErrors.repeatPassword = "Password and Confirm Password does not match.";
				}
				break;

			default:
				break;
		}
		setError(passwordErrors)

	}

	const isCheckox = (name) => {
		if (name === "user-type-donor" || name === "user-type-recipient") return true
		return false
	}

	const saveUser = (e) => {

		e.preventDefault();
		const isValid = isValid()
		setUser({ ...user, role: getRole() })

		if (isValid) {
			try {
				const response = addUser({ first_name: user.firstName, last_name: user.lastName, email: user.email, phone: user.phoneNumber, street: user.address, zip_code: user.zipCode, city: user.city, region: user.federalState, password: user.password, role: getRole(), club_name: user.clubName }).unwrap()

				console.log("response", response)
			} catch (err) {
				console.log("failed to post user", err)
			}
		} else {
			console.log("gib notification, is nicht valid")
		}
	}

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
									<Form onSubmit={saveUser}>
										<Form.Check
											type="checkbox"
											id="user-type-donor"
											name="user-type-donor"
											label="Ich möchte spenden"
											checked={isDonor}
											onChange={handleOnChangeIsDonor}
										/>
										<Form.Check
											type="checkbox"
											id="user-type-recipient"
											name="user-type-recipient"
											label="Ich suche Spenden"
											checked={isRecipient}
											onChange={handleOnChangeIsDonor}
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
													{error.firstName && <span className='err'>{error.firstName}</span>}
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
													{error.lastName && <span className='err'>{error.lastName}</span>}
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
											{error.email && <span className='err'>{error.email}</span>}
										</Form.Group>

										<Form.Group className="mb-1 flex-col" controlId="phone">
											<label>Telefonnummer</label>
											<input className="form-input-grey"
												type="tel"
												id='phoneNumber'
												name='phoneNumber'
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
											{error.clubName && <span className='err'>{error.clubName}</span>}
										</Form.Group>
										<Form.Group className="mb-1 flex-col" controlId="address">
											<label>Straße und Hausnummer *</label>
											<input className="form-input-grey"
												type="text"
												id='address'
												name='address'
												onChange={inputHandler}
											></input>
											{error.address && <span className='err'>{error.address}</span>}
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
													{error.zipCode && <span className='err'>{error.zipCode}</span>}
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
													{error.city && <span className='err'>{error.city}</span>}
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
												{error.federalState && <span className='err'>{error.federalState}</span>}
											</Form.Group>
										</Col>
										<Form.Group className="mb-1 flex-col" controlId="password">
											<label>Password *</label>
											<input className="form-input-grey"
												type="password"
												id='password'
												name='password'
												onChange={inputHandler}
												onBlur={validatePasswordOnRepeat}
											></input>
											{error.password && <span className='err'>{error.password}</span>}
										</Form.Group>
										<Form.Group className="mb-1 flex-col" controlId="password">
											<label>Password wiederholen *</label>
											<input className="form-input-grey"
												type="password"
												id='repeatPassword'
												name='repeatPassword'
												onChange={inputHandler}
												onBlur={validatePasswordOnRepeat}
											></input>
											{error.repeatPassword && <span className='err'>{error.repeatPassword}</span>}
										</Form.Group>
										<Button type="submit" bsPrefix='button-pink align-self-right' className='button-pink'> {updating ? "Konto wird erstellt ..." : "Konto erstellen"}</Button>
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
