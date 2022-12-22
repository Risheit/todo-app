import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { toggleTaskStatus } from '../models/Task';
// import './scss/TodoList.scss';

const TodoList = (props) => {
  const complete = 'complete';
  const incomplete = 'incomplete';

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
      className={task.isComplete() ? complete : incomplete}
    >
      {task.isComplete() ? <del>{task.text()}</del> : task.text()}
    </ListGroup.Item>
  ));

  const unfinishedTasks = taskViews.filter(task => task.props.className === incomplete);
  const finishedTasks = taskViews.filter(task => task.props.className === complete);

  return (
    <ListGroup as='ul'>
      {unfinishedTasks}
      {finishedTasks}
    </ListGroup>
  );
};

export default TodoList;