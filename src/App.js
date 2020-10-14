import React from 'react';
import { Counter } from './features/Counter';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <h1>Let's build a discord clone</h1>
      {/* Sidebar */}

      <Sidebar />
      {/* Chat */}


    </div>
  );
}

export default App;
