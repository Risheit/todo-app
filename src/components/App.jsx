import Task from '../models/Task';
import TodoList from './TodoList';
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';


const AddTaskLightbox = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size='lg'
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
          <Form onSubmit={props.onSubmit}>
            <Form.Group className='taskNam' controlId='taskInput'>
              <Form.Label>Task Name</Form.Label>
              <Form.Control type='text' placeholder='New Task' autoFocus/>
            </Form.Group>
            <Button variant='primary' type='submit'>
              Add Task
            </Button>
          </Form>
      </Modal.Body>
    </Modal> 
  );
}

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskBeingAdded, setTaskBeingAdded] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const tasksCopy = [...tasks, new Task(event.target.taskInput.value)];
    setTasks(tasksCopy);    
    
    setTaskBeingAdded(false);
  };

  return (
    <div className='App'>
      <Button onClick={() => setTaskBeingAdded(true)}>
        Add Task
      </Button>
      <AddTaskLightbox
        show={taskBeingAdded}
        onHide={() => setTaskBeingAdded(false)}
        onSubmit={handleSubmit}
      />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;