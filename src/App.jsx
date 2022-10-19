import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TaskCard from './components/Taskcard';
import TaskModal from './components/TaskModal';
import { useDbData } from "./utilities/firebase";
import { useDbUpdate } from './utilities/firebase';
const App = () => {
  const [data, error] = useDbData('/');

  console.log(data);
  if (data === undefined) return <h1>Loading data...</h1>;

  if (!data || !data.tasks) {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        </header>
        <div className="App-content">
        <TaskModal />
        </div>
    </div> 
  );
  } else {
  //if (error) return <h1>{error}</h1>;
  //const [tasks, setTasks] = useState([]);
  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="App-content">
        {Object.values(data.tasks).map((task, i) => (
          <TaskCard due={task.due} key={task.id} id={task.id} title={task.title} assignedTo={task.assigned_to} checked={task.checked} />
        ))
        }
        <TaskModal />
      </div>
    </div> 
  );
};
};
export default App;
