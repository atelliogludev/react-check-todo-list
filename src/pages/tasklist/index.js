import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AddCard } from "./components/addcard";
import { CreateButtonCard } from "./components/createbuttoncard";
import { TaskCategory } from "./components/header";
import { TaskCard } from "./components/taskcard";



export const TaskList = ({ userInfo }) => {
  const initialLocalTaskStorage = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];


  const [tasks, setTasks] = useState(initialLocalTaskStorage);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [createStatus, setCreateStatus] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
    setFilteredTasks(tasks);
   }, []);
  const addNewTask = (name, taskItems, category) => {
    const newTaskItems = taskItems.map((item) => {
      return {
        data: item,
        checked: false,
        };
    });

    const tempTask = { name: name, taskItems: newTaskItems, category: category};
    setTasks([...tasks, tempTask]);
    setCreateStatus(false);
    console.log('tempTask',tempTask)
    localStorage.setItem("tasks", JSON.stringify([...tasks, tempTask]));
    getCategories();
  };

  const toggleChecked = (taskIndex, taskItemIndex) => {
    let tempTasks = tasks;
    tempTasks[taskIndex].taskItems[taskItemIndex].checked = !tempTasks[
      taskIndex
    ].taskItems[taskItemIndex].checked;

    setTasks([...tempTasks]);
    localStorage.setItem("tasks", JSON.stringify([...tempTasks]));
  };

  const getCategories = () => {
    let taskCategories = tasks.map((item) => item.category);
    taskCategories = taskCategories.filter((item, index) => taskCategories.indexOf(item) === index);
    setCategories(taskCategories);
  }

  const categoryFilter = (categoryName) => {
    let filteredCards;
    if(categoryName === 'All') {
      filteredCards = tasks;
    }else{
      filteredCards = tasks.filter((item) => item.category === categoryName);
    }
    setFilteredTasks(filteredCards);
  }

  return (
    <div>
      <Row>
        
        
              <TaskCategory
              name={userInfo.name}
              lastname={userInfo.lastname}
              categoryFilter={categoryFilter}
              
              categories={categories}
              />
            
           
        
        <Col lg={9} xs={12}>
          <Row>
            {filteredTasks.map((item, index) => (
              <TaskCard
                key={`${item.name}-${index}`}
                name={item.name}
                taskItems={item.taskItems}
                taskIndex={index}
                toggleChecked={toggleChecked}
              />
            ))}

            {createStatus && <AddCard addNewTask={addNewTask} />}
            {createStatus === false && (
              <CreateButtonCard setCreateStatus={setCreateStatus} />
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};
