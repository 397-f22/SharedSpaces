import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TaskCard from './components/Taskcard';
import TaskModal from './components/TaskModal';
const TaskList = [];

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="App-content">
        <TaskCard/>
        <TaskModal/>
      </div>
    </div> 
  );
};
export default App;
