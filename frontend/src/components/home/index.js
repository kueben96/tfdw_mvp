import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectCurrentToken, selectCurrentUser, userFromLocalStorage } from '../../store/reducers/authSlice'

const Home = () => {

    const navigate = useNavigate()
    const token = useSelector(selectCurrentToken)

    const user = userFromLocalStorage

    const routeDashboard = () => {
        navigate('/dashboard')
    }
    const welcomeMsg = token ? <h1>Welcome, you're logged {user}</h1> : null

    return (
        <section>
            <Container>

                <div className='homePage'>
                    {welcomeMsg}
                    <h3>TRIKOTS FÜR DIE WELT</h3>
                    <h1 className='font-64'>SPENDEN</h1>
                    <Button onClick={routeDashboard} bsPrefix='button-pink' className='font-24'>Spendenplattform</Button>
                </div>
            </Container>
        </section>

    )
}

export default Home