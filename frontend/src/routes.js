import React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
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


function App() {
    return (

        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={< Home />} />
                <Route path='/login' element={<LoginForm />}></Route>
                <Route path='/signup' element={<SignUpForm />}></Route>
                <Route path='/account' element={<MyAccount />} />
                <Route path='/account/edit' element={<EditEntry />} />
                <Route path='/dashboard/donations' element={<RecipientDashboard />}></Route>
                <Route path='/dashboard/requests' element={<DonorsDashboard />}></Route>
                <Route path='/dashboard' element={<DashboardSelection />}></Route>
                <Route path='/adminrequests' element={<AdminRequests />}></Route>
                <Route path='/donation/:id' element={<DonationDetail />}></Route>
                <Route path='/donation_request/:id' element={<DonationDetail />}></Route>
                <Route path='/donation_request/new' element={<DonationDetail />}></Route>
                {/* // TODO: create request  */}
                <Route path='/donation/new' element={<CreateDonation />}></Route>
            </Route>
        </Routes>

    );
}

export default App;