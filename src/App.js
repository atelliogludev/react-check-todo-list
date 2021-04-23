import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { localLastnameKey, localNameKey } from "./pages/appconstants";
import { Login } from "./pages/login";
import { TaskList } from "./pages/tasklist";
import { Container } from "react-bootstrap";

export const App = () => {
  const initialLocalStorage = {
    name: localStorage.getItem(localNameKey),
    lastname: localStorage.getItem(localLastnameKey),
  };

  const [userInfo, setUserInfo] = useState(initialLocalStorage);

  const addUserInfo = (data) => {
    setUserInfo(data);
    localStorage.setItem(localNameKey, data.name);
    localStorage.setItem(localLastnameKey, data.lastname);
  };

  return (
    <div className="App">
      <Container>
        {userInfo.name && userInfo.lastname ? (
          <TaskList userInfo={userInfo} />
        ) : (
          <Login addUserInfo={addUserInfo} />
        )}
      </Container>
    </div>
  );
};
