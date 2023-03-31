import { useLocation } from 'react-router-dom';

const DonationDetail = () => {
    const location = useLocation();
    // const donation = location.state?.donation;
    console.log('location object:', location);
    // console.log('donation object:', donation);

    const donation = {
      "category": "Shoe", 
      "amount": 3, 
      "size_1": "adult",
      "size_2": "XL",
      "color_1": "red",
      // ...
      // hier noch weitere hinzügen

    }
    return (
      <div>
        {/* {donation && ( */}
          <div>
            <h1>Donation Confirmation</h1>
            <p>Category: {donation.category}</p>
            <p>Amount: {donation.amount}</p>
            {/* add more donation data fields here */}
          </div>
        {/* )} */}
      </div>
    );
  };
  
  export default DonationDetail;








// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const ConfirmationCards = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const donation = location.state?.donation;
 
//   const handleConfirm = () => {
//     // TODO: Add logic to confirm donation
//     navigate('/');
//   };

//   const handleGoBack = () => {
//     navigate('/');
//   };

//   if (!donation) {
//     return <p>No donation data available</p>;
// }

// // Render the confirmation page with the donation data
// return (
//     <div>
//         <h1>Confirm Donation</h1>
//         <p>Category: {donation.category}</p>
//         <p>Amount: {donation.amount} Stück</p>
//         <p>PLZ: {donation.zip_code}</p>
//         <button>Confirm</button>
//         <button>Go Back</button>
//     </div>
// );
// };

// export default ConfirmationCards;










// import React from 'react'
// import { useLocation } from 'react-router-dom';

// const ConfirmationCards = () => {
//     const location = useLocation();
//     const donation = location.state ? location.state.donation : null;
    
//     return (
//         <div>
//             <h1>Confirmation Cards</h1>
//             {donation && (
//                 <> <h6>h</h6>
//                     <p>{donation.category}</p>
//                     <p>{donation.amount}</p>
//                     <p>{donation.zip_code}</p>
//                 </>
//             )}
//         </div>
//     )
// }

// export default ConfirmationCards;