import { useState } from "react";
import {
  Button,
  Card,
  Col,
  FormControl,
  InputGroup,
} from "react-bootstrap";

import styles from '../tasklist.module.css'

export const AddCard = ({ addNewTask }) => {
  const [taskname, setTaskname] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  const [currentItem, setCurrentItem] = useState("");
  const [cardCategory, setCardCategory] = useState("");

  const addTaskItem = (itemText,itemCategory) => {
    setCurrentItem("");
    setTaskItems([...taskItems, itemText]);
  };

  const deleteTaskItem = (index) => {
    let tempTaskItems = taskItems;
    delete tempTaskItems[index];
    tempTaskItems = tempTaskItems.filter((item) => item !== undefined);
    setTaskItems(tempTaskItems);
  };

  return (
    <Col lg={4} xs={12} className={styles.columnFix}>
      <Card>
        <InputGroup className="mb-3">
          
          <FormControl
            type="text"
            onChange={(event) => setTaskname(event.target.value)}
            value={taskname}
            placeholder={"Enter a title"}
          />
          <FormControl
            type="text"
            onChange={(event) => setCardCategory(event.target.value)}
            value={cardCategory}
            placeholder={"Kategori Girin"}
          />
          
        </InputGroup>

        {taskItems.map((item, index) => {
          return (
            <div className={styles.enteredTask}>
              <span className={styles.deleteSpan}>{item}</span>
              <div className={styles.deleteButtonWrapper}>
                <Button className={styles.deleteButton} onClick={() => deleteTaskItem(index)} variant="danger">
                    Sil
                </Button>
              </div>
            </div>
          );
        })}
        <InputGroup>
          <FormControl
            placeholder="Task Girin"
            aria-label="Task Girin"
            aria-describedby="basic-addon2"
            onChange={(event) => setCurrentItem(event.target.value)}
            value={currentItem}
          />
           
          <InputGroup.Append>
            <Button
              onClick={() => addTaskItem(currentItem)}
              variant="outline-secondary"
            >
              Ekle
            </Button>
          </InputGroup.Append>
        </InputGroup>

        <Button
          variant="primary"
          onClick={() => addNewTask(taskname, taskItems, cardCategory)}
        >
          Save Card
        </Button>
      </Card>
    </Col>
  );
};
