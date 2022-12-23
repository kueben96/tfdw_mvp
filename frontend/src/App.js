import logo from './logo.svg';
import './App.css';
import { React, useEffect, useState } from 'react'

function App() {

  const [donorData, setDonorData] = useState('');
  useEffect(() => {
    const headers = { 'Content-Type': 'application/json' }
    // fetch('http://api:5000', { headers })
    fetch('/api', { headers })
      .then(response => response.json())
      .then(data => setDonorData(data));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  console.log("donor data");
  console.log(donorData);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> TRIKOT FssssÜR DIE WELTkljdfskjfdslkjklds
        </p>
        <span>{donorData[0].location}</span>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
