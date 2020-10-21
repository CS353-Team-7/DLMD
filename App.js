import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlantListComponent from './plantList.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Plant Gallery
        </p>
      <PlantListComponent></PlantListComponent>
      </header>
    </div>
  );
}

export default App;
