import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import './index.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import getBg from './functions/LockFunctions';

const App = () => {
  const [result, setResult] = useState([]);
  
  useEffect(() => { 

    const isLocked = localStorage.getItem('locked') === 'true';
    if (isLocked) {
      // get from cache 
      const url = localStorage.getItem('bg')
      const title = JSON.parse(localStorage.getItem('imageName'));
      const data = [url, title]
      setResult(data);
    } else {
      // get new image and set to cache
      getBg().then((response) => {
        const urlForBg = response.data.urls.full
        const title = response.data.location.title
        const data = [urlForBg, title]
        localStorage.setItem("bg", JSON.stringify(urlForBg));
        localStorage.setItem("imageName", JSON.stringify(title));
        setResult(data);
      });
    }

  }, [])


  return (
    
    <div className="min-h-screen" style={{ backgroundImage: `url(${result[0]})`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', Position: 'relative' }}>
      <Navbar />
      <MainContent location={result[1]} />
    </div>

  );
}

export default App;
