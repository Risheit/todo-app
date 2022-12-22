import { React, useState } from 'react';
import './TodoList.css'
import { toggleTaskStatus } from '../../models/Task'


const TodoList = (props) => {
  const handleClick = (task) => {
    const tasksCopy = [...props.tasks]
      .filter(state => state !== task)
      .concat([toggleTaskStatus(task)]);

    props.setTasks(tasksCopy);    
  };

  const taskViews = props.tasks.map((task, index) => (
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

export default TodoList;