import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TaskCard from './components/Taskcard';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />

      </header>
      <TaskCard/>
   
    </div>
  );
};

export default App;
