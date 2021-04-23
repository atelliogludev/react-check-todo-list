import React, { useState } from "react";
import { Button, Col, FormControl, InputGroup } from "react-bootstrap";
import styles from './login.module.css';

export const Login = ({ addUserInfo }) => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");

  return (
    <div className={styles.loginWrapper} >
      <Col lg={{span:6,offset:3}} xs={12} className={styles.maincolumn}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>İsim ve Soyisim</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={name}
            placeholder="Name"
          ></FormControl>
          <FormControl
            type="text"
            onChange={(event) => setLastName(event.target.value)}
            value={lastname}
            placeholder="Last Name"
          ></FormControl>
        </InputGroup>
        <Button  variant="primary" onClick={() => addUserInfo({ name, lastname })}>Kaydet</Button>
      </Col>

      
    </div>
  );
};
