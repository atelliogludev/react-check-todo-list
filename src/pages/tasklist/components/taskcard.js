import React from "react";
import { Card, Col } from "react-bootstrap";
import { cardSubtitle, checkboxWrapper, cardFix, columnFix } from '../tasklist.module.css';

export const TaskCard = ({ name, taskItems, taskIndex, toggleChecked }) => {
  return (
    <Col lg={4} xs={12} className={columnFix}>
      <Card className={cardFix}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          {taskItems.map((item, taskItemIndex) => (
            <div key={`${name}-${item.data}-${taskItemIndex}`} className={checkboxWrapper} >
              <input type="checkbox" onClick={() => toggleChecked(taskIndex, taskItemIndex)}
              defaultChecked={item.checked}></input>
              <Card.Subtitle className={`${cardSubtitle} text-muted`}>{item.data}</Card.Subtitle>
            
            </div>
              
            
          ))}
        </Card.Body>
      </Card>
    </Col>
  );
};
