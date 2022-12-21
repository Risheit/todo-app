import { React, useState } from 'react';
import './TodoList.css'
import { toggleTaskStatus } from '../../models/Task'


export const TodoList = (props) => {

  const [tasks, setTasks] = useState(props.tasks);

  const handleClick = (task) => {
    const tasksCopy = [...tasks]
      .filter(state => state !== task)
      .concat([toggleTaskStatus(task)]);

    setTasks(tasksCopy);    
    console.log(task.text() + ' was clicked!');
  };

  const taskViews = tasks.map((task, index) => (
    <li key={index} className={task.isComplete() ? 'complete' : 'incomplete'}
      onClick={_event => handleClick(task)}
    >
      {task.text()}
    </li>
  ));

  const unfinishedTasks = taskViews.filter(task => task.props.className === 'incomplete');
  const finishedTasks = taskViews.filter(task => task.props.className === 'complete');
  
  return (
    <ul className='todo-list'>
      {unfinishedTasks}
      {finishedTasks}
    </ul>
  );
};
