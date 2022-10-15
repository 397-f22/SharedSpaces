import TaskCard from './Taskcard';
import TaskModal from './TaskModal';

const TaskList = (taskList) => {
 console.log("Test1");
  const [tasks, setTasks] = useState([]);
  {tasks.map((id,task) => (
    <TaskCard key={id} id={id} task={task} tasks={tasks} setTasks={setTasks}/>
  ))
  }
  <TaskModal tasks={tasks} setTasks={setTasks}/>
}
export default TaskList;