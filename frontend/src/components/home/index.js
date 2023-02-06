import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectCurrentToken, selectCurrentUser } from '../../store/reducers/authSlice'

const Home = () => {

    const navigate = useNavigate()
    const token = useSelector(selectCurrentToken)
    console.log("authUser")
    console.log(token)



    const routeLogin = () => {
        navigate('/login')
    }
    const welcomeMsg = token ? <h1>Welcome, you're logged in</h1> : <div>Log in to proceed: press the button below </div>

    return (
        <section>
            <Container>

                <div className='homePage'>
                    {welcomeMsg}
                    <h3>TRIKOTS FÜR DIE WELT</h3>
                    <h1 className='font-64'>SPENDEN</h1>
                    <Button onClick={routeLogin} bsPrefix='button-pink' className='font-24'>Spendenplattform</Button>
                </div>
            </Container>
        </section>

    )
}

export default Home