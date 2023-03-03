import React from 'react'

const DonationCardDemo = ({ donation }) => {
    return (
        <article>
            <h2>{donation.category}</h2>
            <p>{donation.description}</p>
        </article>
    )
}

export default DonationCardDemo