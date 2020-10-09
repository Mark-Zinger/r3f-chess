import React from 'react';
import './scss/App.scss';
import R3FScene from'./modules/R3FScene';
import Interface from './modules/Interface';

function App() {
  return (
    <div className="App">
      <R3FScene/>
      <Interface/>
    </div>
  );
}

export default App;
