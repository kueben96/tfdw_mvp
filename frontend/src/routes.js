import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/ui_component/Layout';
import Home from './components/home';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import RecipientDashboard from './components/donations_recipient/RecipientsDashboard';
import DonorsDashboard from './components/donations_donor/DonorsDashboard';
import DashboardSelection from './components/ui_component/DashboardSelection';
import AdminPage from './components/admin/AdminPage';
import DonationDetail from './components/donation_components/DonationDetail';
import AddDonation from './components/donation_components/AddDonation';
import MyAccount from './components/account/MyAccount';
import EditEntry from './components/account/EditEntry';
import AccountEntries from './components/account/AccountEntries';
import AccountDetail from './components/account/AccountDetail';
import EntryDetail from './components/account/EntryDetail';
import PasswordReset from './components/auth/PasswordReset';

function App() {
    return (

        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/login' element={<LoginForm />} />
                <Route path='/signup' element={<SignUpForm />} />
                <Route path='/password_reset' element={<PasswordReset />} />
                <Route path='account' element={<MyAccount />}>
                    <Route index element={<Navigate to='entries' replace />} />
                    <Route path='entries' element={<AccountEntries />} />
                    <Route path='entries/:id' element={<EntryDetail />} />
                    <Route path='entries/:id/edit' element={<EditEntry />} />
                    <Route path='details' element={<AccountDetail />} />
                </Route>
                <Route path='/dashboard/donations' element={<RecipientDashboard />} />
                <Route path='/dashboard/requests' element={<DonorsDashboard />} />
                <Route path='/dashboard' element={<DashboardSelection />} />
                <Route path='/adminrequests' element={<AdminPage />} />
                <Route path='/donation/:id' element={<DonationDetail />} />
                <Route path='/donation_request/:id' element={<DonationDetail />} />
                <Route path='/donation_request/new' element={<AddDonation />} />
                <Route path='/donation/new' element={<AddDonation />} />
            </Route>
        </Routes>


    );
}

export default App;