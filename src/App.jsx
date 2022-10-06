import { useState } from 'react';
import logo from './logo.svg';
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
      {/* <Button size="small" variant='contained'>Add Task</Button> */}
      <TaskCard/>
      <TaskModal/>
      
    </div>
  );
};

export default App;
