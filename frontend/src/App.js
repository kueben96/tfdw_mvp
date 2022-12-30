import logo from './logo.svg';
import './App.css';
import { React, useEffect, useState } from 'react'
import DonorList from './components/DonorList';

function App() {

  const [donorData, setDonorData] = useState([]);
  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    fetch('/api/donors', { headers })
      .then(response => response.json())
      .then(data => setDonorData(data))
      .catch(error => console.log(error));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  console.log("donor data");
  console.log(donorData);


  return (
    <div className="App container m-4">
      <div className="row">
        <div className="text-center">
          <h1>Connecting a React Frontend to a Flask Backend.</h1>
        </div>
      </div>
      <DonorList
        donors={donorData}
      />

    </div>
  );
}

export default App;
