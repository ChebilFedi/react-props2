import React from 'react';

import './App.css';
import Profile from './profile/Profile';



const handleName = (e) => {
  e.preventDefault();
  alert(`hello Debrah Carroll`)
}

function App() {
  return (
    <div className="App">

      <Profile handleName={handleName}  />
    </div>
  );
}

export default App;
