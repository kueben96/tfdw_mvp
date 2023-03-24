import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SpendenTestRequest from './components/home/SpendenTestRequest';
import DonationDetails from './components/DonationDetails';
import Layout from './components/Layout';
import Home from './components/home';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import RecipientDashboard from './components/recipients/RecipientsDashboard';

import DonationsDashboardPage from './components/donations/DonationsDashboardPage';
import Selection from './components/Selection';

function App() {
    return (

        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={< Home />} />
                <Route path='/login' element={<LoginForm />}></Route>
                <Route path='/signup' element={<SignUpForm />}></Route>
                <Route path='/donation' element={<DonationDetails />}></Route>
                <Route path='/spenden' element={<SpendenTestRequest />}></Route>
                <Route path='/dashboard' element={<DonationsDashboardPage />}></Route>
                <Route path='/selection' element={<Selection />}></Route>
                <Route path='/recipientdash' element={<RecipientDashboard />}></Route>
            </Route>
        </Routes>

    );
}

export default App;