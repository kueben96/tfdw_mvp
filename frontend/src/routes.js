import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/Login';
import DonationDetails from './components/DonationDetails';
import Layout from './components/Layout';



function App() {
    return (

        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/login' element={<Login />}></Route>
                <Route path='/donation' element={<DonationDetails />}></Route>
            </Route>
        </Routes>

    );
}

export default App;