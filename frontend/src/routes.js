import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DonationDetails from './components/DonationDetails';
import Layout from './components/Layout';
import Home from './components/home';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import RecipientDashboard from './components/donations_recipient/RecipientsDashboard';

import DonationsDashboardPage from './components/donations_donor/DonationsDashboardPage';
import Selection from './components/Selection';
import AdminRequests from './components/admin/AdminRequests';
import DonationDetail from './donations_detail/DonationDetail';


function App() {
    return (

        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={< Home />} />
                <Route path='/login' element={<LoginForm />}></Route>
                <Route path='/signup' element={<SignUpForm />}></Route>
                <Route path='/dashboard' element={<DonationsDashboardPage />}></Route>
                <Route path='/selection' element={<Selection />}></Route>
                <Route path='/recipientdash' element={<RecipientDashboard />}></Route>
                <Route path='/adminrequests' element={<AdminRequests />}></Route>
                <Route path='/donation' element={<DonationDetail />}></Route>
            </Route>
        </Routes>

    );
}

export default App;