import React from 'react'
import { Card } from 'react-bootstrap'

const DonationCardDemo = ({ donation }) => {
    return (
        <Card>
            <h2>{donation.category}</h2>
            <p>{donation.description}</p>
        </Card>
    )
}

export default DonationCardDemo