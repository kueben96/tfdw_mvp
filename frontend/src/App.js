import logo from './logo.svg';
import './App.css';
import { React, useEffect, useState , useReducer} from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import DonationDetails from './DonationDetails';


function App() {


  return (
    
 <div className="App container m-4">  
     <Routes>
<Route path='/login' element={<Login/>}></Route>
<Route path='/donation' element={<DonationDetails/>}></Route>

   </Routes> 
 
   
   </div>
  );


}


export default App;


