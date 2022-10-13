import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TaskCard from './components/Taskcard';
import TaskModal from './components/TaskModal';
import { useDbData } from "./utilities/firebase";

const App = () => {
  const [data, error] = useDbData('/');
  console.log(data);
  if (data === undefined) return <h1>Loading data...</h1>;
  //if (error) return <h1>{error}</h1>;
  //const [tasks, setTasks] = useState([]);
  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="App-content">
        {data.tasks.map((task,id) => (
          <TaskCard id={id} key={id} task={task}/>
        ))
        }
        {/*<TaskModal tasks={data.tasks} setTasks={data.tasks} />*/}
      </div>
    </div> 
  );
};
export default App;
