import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badlands from './images/Badlands.JPG';
import GrandTeton from './images/GrandTeton.JPG';

function App() {

  return (    
    <div className="bg">
      <NavBar></NavBar>
      {/* <img class="background" src={ GrandTeton }/> */}
    </div>
  );
}

export default App;
