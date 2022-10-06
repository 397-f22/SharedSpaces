import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TaskCard from './components/Taskcard';
import Button from '@mui/material/Button';
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Button size="small" variant='contained'>Add Task</Button>
      
      <TaskCard/>
   
    </div>
  );
};

export default App;
