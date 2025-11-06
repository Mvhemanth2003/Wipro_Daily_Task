import React from 'react';
import './App.css';
import Welcome from './components/welcome.js';

function App() {
  return (
    <div id="data">
      <h1>Functional component demo</h1>
      <Welcome name="Captain america"/>
      <Welcome name="Spider man"/>
      <Welcome name="Cbat man"/>
    </div>
  );
}

export default App;
