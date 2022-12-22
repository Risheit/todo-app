import React from 'react';
import { Accordion, Badge, ListGroup } from 'react-bootstrap';
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
    <Accordion defaultActiveKey={[incomplete]} alwaysOpen>
      <Accordion.Item eventKey={incomplete}>
        <Accordion.Header>
          <p>Unfinished Tasks <Badge pill bg='info'>{unfinishedTasks.length}</Badge></p>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as='ul'>
            {unfinishedTasks}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey={complete}>
        <Accordion.Header>
          <p>Finished Tasks <Badge pill bg='info'>{finishedTasks.length}</Badge></p>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as='ul'>
            {finishedTasks}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default TodoList;