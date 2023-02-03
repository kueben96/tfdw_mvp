import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Home = () => {
    return (
        <section>
            <Container>
                <div className='homePage'>
                    <h3>TRIKOTS FÜR DIE WELT</h3>
                    <h1 className='font-64'>SPENDEN</h1>
                    <Button bsPrefix='button-pink' className='font-24'>Spendenplattform</Button>
                </div>
            </Container>
        </section>

    )
}

export default Home