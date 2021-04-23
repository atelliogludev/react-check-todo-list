import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { userFix, categoryFix, categoryAll, taskCategory } from './../tasklist.module.css';

export const TaskCategory = ({name, lastname, categoryFilter, categories}) => {
    return (
        <Col lg={3} xs={12}   >
          <Card >
            <Card.Body className={taskCategory}>
            <h1 className={userFix} >
                {name} {lastname}
              </h1>
              <p  >
                Günlük hayatta yapılacak işlerinizi organize etmeye hazır
                mısınız?
              </p>
              <p>
                {categories.map((item) => <span key={`categorySpan${item}`} className={categoryFix} onClick={() => categoryFilter(item)}>{item}</span>)}
                <span className={categoryAll} onClick={() => categoryFilter('All')}>All</span>
              </p>
            
            </Card.Body>
          </Card>
        </Col>
      );
}
