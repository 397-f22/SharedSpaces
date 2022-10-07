import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TaskCard from './components/Taskcard';
import TaskModal from './components/TaskModal';
import {ThemeProvider } from '@mui/material/styles';
import {headerTheme} from './styles/Themes';
const TaskList = [];

const App = () => {
  return (
    <ThemeProvider theme={headerTheme}>
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      {/* <Button size="small" variant='contained'>Add Task</Button> */}
      <div className="App-content">
        <TaskCard/>
        <TaskModal/>
      </div>
    </div>
    </ThemeProvider>
  );
};

export default App;
