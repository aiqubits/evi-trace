import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateEvidence from './CreateEvidence';
import WriteStore from './WriteStore';
import GetEvidence from './GetEvidence';
import DestroyEvidence from './DestroyEvidence';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Evi-Trace Frontend Evidence Management</h1>
            <CreateEvidence />
            <WriteStore />
            <GetEvidence />
            <DestroyEvidence />
      <br />
      <br />
      <br />
      </header>
    </div>
  );
}

export default App;
