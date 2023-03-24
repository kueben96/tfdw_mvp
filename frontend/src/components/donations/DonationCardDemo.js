import React from 'react'
import { Card } from 'react-bootstrap'

const DonationCardDemo = ({ donation }) => {
    return (
        <Card>
            <h2>{donation.category}</h2>
            <p>{donation.description}</p>
            <p>{donation.color_1}</p>
            <p>{donation.color_2}</p>
            <p>{donation.size_1}</p>
            <p>{donation.size_2}</p>
        </Card>
    )
}

export default DonationCardDemo