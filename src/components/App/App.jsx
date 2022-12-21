import Task from '../../models/Task';
import { TodoList } from '../TodoList/TodoList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <TodoList tasks={[new Task("This is a task!"), new Task("This is one too!")]} />
    </div>
  );
}

export default App;