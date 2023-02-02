import './App.css';
import { React } from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './Routes/Login';
import DonationDetails from './Routes/DonationDetails';
import Register from './Routes/Register';

function App() {

  return (

    <div className='App'>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/donation' element={<DonationDetails />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>


    </div>
  );


}


export default App;


