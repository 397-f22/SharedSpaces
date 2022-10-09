import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TaskCard from './components/Taskcard';
import TaskModal from './components/TaskModal';

const App = () => {

  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="App-content">
        {tasks.map((task,id) => (
          <TaskCard key={id} id={id} task={task} tasks={tasks} setTasks={setTasks}/>
        ))
        }
        <TaskModal tasks={tasks} setTasks={setTasks}/>
      </div>
    </div> 
  );
};
export default App;
