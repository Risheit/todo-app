import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { toggleTaskStatus } from '../models/Task';

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
      {task.text()}
    </ListGroup.Item>
  ));

  const unfinishedTasks = taskViews.filter(task => task.props.className === complete);
  const finishedTasks = taskViews.filter(task => task.props.className === incomplete);

  return (
    <ListGroup as='ul'>
      {unfinishedTasks}
      {finishedTasks}
    </ListGroup>
  );
};

export default TodoList;