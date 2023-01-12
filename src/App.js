import React from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from "./Sidebar.js"

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />


      {/* App body */}
      <div className="app_mainbody">
        <Sidebar/>
      </div>
      {/* Sidebar */}
      {/* feed */}
      {/* widgets */}
    </div>
  );
}

export default App;
