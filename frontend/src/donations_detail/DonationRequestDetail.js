import { Col, Container, Row } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import { useFetchDonationRequestByIdQuery } from '../store/reducers/donationsRequestSlice';
import DashboardHeader from '../components/ui/DashboardHeader';

const DonationRequestDetail = () => {
    const location = useLocation();
    const donationFromState = location.state?.donation;
  
    const {id} = useParams();
   
    const { data: donationFromApi, isLoading, isError } = useFetchDonationRequestByIdQuery(id, {
      skip: !!donationFromState,
    });
    const donation = donationFromState || donationFromApi[0];
    console.log(donation)

    
    if (isLoading) {
      return <p>Loading...</p>;
    }
 
    if (isError) {
      return <p>Error...</p>;
    }
 
    return (
      <Container>
      <div className='dashboard'>
         
             <DashboardHeader/>
      
        
          <div className='articles'>
          <h1>Donation Detail</h1>
          <div>
        
            <p>Category: {donation.category}</p>
            <p>Amount: {donation.amount}</p>
            {/* add more donation data fields here */}
          </div>
          </div>
      </div>
  </Container>
      
      
     
    );
  };
  
  export default DonationRequestDetail;








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