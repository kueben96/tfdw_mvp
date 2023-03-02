import React from 'react'
import { Container } from 'react-bootstrap';
import '../resources/styles/selection.css';


const Selection = () => {

    const donations = [{}]

    return (
        <div>
            <Container>
                <form className='selection'>
                    <div className="register-text-center">
                    <label className='dashboard-titel'>SPENDENPLATFORM</label>
                    </div>
                    <div className='buttons'>
                    
                    <button className='registerbutton' onclick="location.href='https://blog.hubspot.com/website/bootstrap-button'">Ich möchte spenden</button>
                    <button className='registerbutton'>Ich suche Spenden</button>
                   </div>
          
                </form>


</Container>
        </div>
    )
}

export default Selection