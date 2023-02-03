import React from 'react'

const DonationCard = ({ donation }) => {
    return (
        <article>
            <h2>{donation.donation_type}</h2>
            <p>{donation.description}</p>
        </article>
    )
}

export default DonationCard