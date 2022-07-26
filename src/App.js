import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import './index.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

const App = () => {

  const [result, setResult] = useState([]);

  useEffect(() => { 

    const clientId = "srjIZhO3VeCkUr-iRL13t3hDEwTw13fpnq4RXTRAJiA"
    const APIurl = 'https://api.unsplash.com/photos/random' + "?client_id=" + clientId;
    
    let config = {
      params: {
        orientation: 'squarish',
        query: 'travel'
      },
    }

    axios.get(APIurl, config).then((response) => {
      console.log(response);
      const urlForBg = response.data.urls.full
      const data = [response.data.urls.full, response.data.location.title]
      setResult(data);
    });

  }, [])


  return (
    
    <div className="min-h-screen" style={{ backgroundImage: `url(${result[0]})`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', Position: 'relative' }}>
      <Navbar />
      <MainContent location={result[1]} />
    </div>

  );
}

export default App;
