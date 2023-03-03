import React from 'react'
import { Container } from 'react-bootstrap';
import '../resources/styles/selection.css';


const Selection = () => {    

    return (
        <div>
            <Container>
                <form className='selection'>
                    <div className="register-text-center">
                    <label className='dashboard-titel'>SPENDENPLATFORM</label>
                    </div>
                    <div className='buttons'>
                    <form action="/dashboard">
                    <button className='registerbutton' type='submit'>Ich möchte spenden</button></form>
                    <form action=''>
                    <button className='registerbutton'>Ich suche Spenden</button></form>
                   
                   </div>
          
                </form>


</Container>
        </div>
    )
}

export default Selection