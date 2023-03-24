import React from 'react'
import { Container } from 'react-bootstrap';
import '../resources/styles/selection.css';


const Selection = () => {    

    return (
        <div>
            <Container>
                <form className='selection'>
                    <div className="text-center">
                    <h4>Spendenplatform</h4>
                    </div>
                    <div className='buttons'>
                    <form action="/dashboard">
                    <button className='button-pink' type='submit'>Ich möchte spenden</button></form>
                    <form action=''>
                    <button className='button-pink'>Ich suche Spenden</button></form>
                   
                   </div>
          
                </form>


            </Container>
        </div>
    )
}

export default Selection