import '../../resources/styles/register.css';
import { React, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSignupMutation } from '../../store/reducers/authApiSlice';
import DashboardHeader from '../ui_component/DashboardHeader';
import { validateForm, validatePasswordOnRepeat } from './authFunctions';
import { useNavigate } from 'react-router-dom';

function Registerform() {

	const [addUser, { isLoading: updating, isSuccess }] = useSignupMutation();
	const navigate = useNavigate();
	const [user, setUser] = useState(
		{
			first_name: "",
			last_name: "",
			email: "",
			phone: "",
			club_name: "",
			address: "",
			zip_code: "",
			city: "",
			region: "",
			password: "",
			repeatPassword: "",
			role: "",
		});


	const [error, setError] = useState({})
	const [isDonor, setIsDonor] = useState(true);
	const [isRecipient, setIsRecipient] = useState(false)

	const handleOnChangeIsDonor = (e) => {
		setIsDonor(!isDonor)
		setIsRecipient(isDonor)
		setUser({ ...user, role: getRole() })
	}

	const getRole = () => {
		return isDonor ? 'donor' : 'recipient';
	};

	const inputHandler = (e) => {
		const { name, value } = e.target;
		if (!isCheckox(name)) {
			setUser({ ...user, [name]: value });
		}
	};


	const _validatePasswordOnRepeat = e => {
		let passwordErrors = validatePasswordOnRepeat(e, user, error)
		setError(passwordErrors)
	}

	const isCheckox = (name) => {
		if (name === "user-type-donor" || name === "user-type-recipient") return true
		return false
	}

	const saveUser = (e) => {
		e.preventDefault();
		setUser({ ...user, role: getRole() });
		const errors = validateForm(user);
		if (Object.keys(errors).length === 0) {
			try {
				addUser(user)
				if (isSuccess) navigate('/login')
			} catch (err) {
				console.log("failed to post user", err);
			}
		} else {
			setError(errors);
		}
	};
	console.log(isSuccess)

	return (
		<div>
			<Container>
				<Row className="d-flex justify-content-center align-items-center">
					<Col md={8} lg={6} xs={12}>
						<div className="form-card">

							<div className="">
								<DashboardHeader text="Registrieren" />
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
												<Form.Group className="mb-1 flex-col" controlId="first_name">
													<label>Vorname *</label>
													<input className="form-input-grey"
														type="text"
														id='first_name'
														name='first_name'
														onChange={inputHandler}
													></input>
													{error.first_name && <span className='err'>{error.first_name}</span>}
												</Form.Group>
											</Col>
											<Col sm={6}>
												<Form.Group className="mb-1 flex-col" controlId="last_name">
													<label>Nachname *</label>
													<input className="form-input-grey"
														type="text"
														id='last_name'
														name='last_name'
														onChange={inputHandler}
													></input>
													{error.last_name && <span className='err'>{error.last_name}</span>}
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
												id='phone'
												name='phone'
												onChange={inputHandler}
											></input>
										</Form.Group>

										<Form.Group className="mb-1 flex-col" controlId="club">
											<label>Vereinsname / Organnisationsname *</label>
											<input className="form-input-grey"
												type="text"
												id='club_name'
												name='club_name'
												onChange={inputHandler}
											></input>
											{error.club_name && <span className='err'>{error.club_name}</span>}
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
												<Form.Group className="mb-1 flex-col" controlId="zip_code">
													<label>PLZ *</label>
													<input className="form-input-grey"
														type="number"
														id='zip_code'
														name='zip_code'
														onChange={inputHandler}
													></input>
													{error.zip_code && <span className='err'>{error.zip_code}</span>}
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
											<Form.Group className="mb-1 flex-col" controlId="region">
												<label>Bundesland *</label>
												<input className="form-input-grey"
													type="text"
													id='region'
													name='region'
													onChange={inputHandler}
												></input>
												{error.region && <span className='err'>{error.region}</span>}
											</Form.Group>
										</Col>
										<Form.Group className="mb-1 flex-col" controlId="password">
											<label>Password *</label>
											<input className="form-input-grey"
												type="password"
												id='password'
												name='password'
												onChange={inputHandler}
												onBlur={_validatePasswordOnRepeat}
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
												onBlur={_validatePasswordOnRepeat}
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
