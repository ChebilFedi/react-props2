import React from 'react';

import './App.css';
import Profile from './profile/Profile';



const handleName = (name) => {
  
  alert(`hello ${name}`);
}

function App() {
  return (
    <div className="App">

      <Profile handleName={handleName}  />
    </div>
  );
}

export default App;
