import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SpendenTestRequest from './components/home/SpendenTestRequest';
import Login from './components/Login';
import DonationDetails from './components/DonationDetails';
import Layout from './components/Layout';
import Home from './components/home';
import LoginForm from './components/auth/LoginForm';
import RequireAuth from './components/utils/RequireAuth';
import SignUpForm from './components/auth/SignUpForm';
import Register from './components/Register';

function App() {
    return (

        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={< Home />} />
                <Route path='/login' element={<LoginForm/>}></Route>
                <Route path='/signup' element={<Register/>}></Route>
                <Route path='/donation' element={<DonationDetails />}></Route>
                <Route path='/spenden' element={<SpendenTestRequest />}></Route>

            </Route>
        </Routes>

    );
}

export default App;