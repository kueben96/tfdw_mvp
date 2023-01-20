import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Header from './components/navigation/header';
import Footer from './components/navigation/footer'
import Login from './Routes/Login';
import DonationDetails from './Routes/DonationDetails';



function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path='/login' element={<Login />}></Route>
                <Route path='/donation' element={<DonationDetails />}></Route>

            </Routes>
            <Footer />

        </BrowserRouter>
    );
}

export default App;