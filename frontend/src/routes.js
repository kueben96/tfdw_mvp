import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import RecipientDashboard from './components/donations_recipient/RecipientsDashboard';
import DonorsDashboard from './components/donations_donor/DonorsDashboard';
import DashboardSelection from './components/DashboardSelection';
import AdminRequests from './components/admin/AdminRequests';
import DonationDetail from './components/donations_detail/DonationDetail';
import CreateDonation from './components/donations_donor/CreateDonation';
import MyAccount from './components/account/MyAccount';
import EditEntry from './components/account/EditEntry';
import AccountEntries from './components/account/AccountEntries';
import AccountDetail from './components/account/AccountDetail';


function App() {
    return (

        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/login' element={<LoginForm />} />
                <Route path='/signup' element={<SignUpForm />} />
                <Route path='/account' element={<MyAccount />}>
                    <Route index element={<Navigate to='entries' replace />} />
                    <Route path='entries' element={<AccountEntries />} />
                    <Route path='entries/edit' element={<EditEntry />} />
                    <Route path='details' element={<AccountDetail />} />
                </Route>
                <Route path='/dashboard/donations' element={<RecipientDashboard />} />
                <Route path='/dashboard/requests' element={<DonorsDashboard />} />
                <Route path='/dashboard' element={<DashboardSelection />} />
                <Route path='/adminrequests' element={<AdminRequests />} />
                <Route path='/donation/:id' element={<DonationDetail />} />
                <Route path='/donation_request/:id' element={<DonationDetail />} />
                <Route path='/donation_request/new' element={<DonationDetail />} />
                <Route path='/donation/new' element={<CreateDonation />} />
            </Route>
        </Routes>


    );
}

export default App;