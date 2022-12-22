import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { toggleTaskStatus } from '../models/Task';

const TodoList = (props) => {
  const handleClick = (task) => {
    const tasksCopy = [...props.tasks]
      .filter(state => state !== task)
      .concat([toggleTaskStatus(task)]);

    props.setTasks(tasksCopy);    
  };

  const taskViews = props.tasks.map((task) => (
    <ListGroup.Item
      as='li'
      action onClick={() => handleClick(task)}
      disabled={task.isComplete()}
    >
      {task.text()}
    </ListGroup.Item>
  ));

  // const taskViews = props.tasks.map((task, index) => (
  //   <li key={index} className={task.isComplete() ? 'complete' : 'incomplete'}
  //     onClick={_event => handleClick(task)}
  //   >
  //     {task.text()}
  //   </li>
  // ));

  const unfinishedTasks = taskViews.filter(task => task.props.disabled === false);
  const finishedTasks = taskViews.filter(task => task.props.disabled === true);
  console.log(taskViews);

  return (
    <ListGroup as='ul'>
      {unfinishedTasks}
      {finishedTasks}
    </ListGroup>
  );
};

export default TodoList;