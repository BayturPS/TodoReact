import React, { useState } from "react";
import styled from "styled-components";
const TodoForm = ({ onAddTodo }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // что бы форма не обновлялась
    if (enteredValue.trim() === "") {
      setError("Поле не должно быть пустым!");
      // Валидация на инпут
    } else {
      onAddTodo(enteredValue);
      setEnteredValue("");
      setError()
      // для очиски инпута
    }
  };
  return (
    <TodoFormModule onSubmit={submitHandler}>
      <input
        type="text"
        value={enteredValue}
        onChange={(e) => setEnteredValue(e.target.value)}
        placeholder="Enter new todo"
      />
      <button type="submit">Submit</button>
      {error && <ErrorText>{error}</ErrorText>}
    </TodoFormModule>
  );
};
export default TodoForm;

const ErrorText = styled.p`
  color: red;
`;
const TodoFormModule = styled.form`
  & {
    margin-bottom: 30px;
  }
  & form {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }
  & input {
    width: 45%;
    height: 30px;
    font-size: 1.3rem;
  }
  & button {
    margin-left: 20px;
    height: 50px;
    cursor: pointer;
    background-color: beige;
    font-size: 1.5rem;
  }
  & button:hover {
    background-color: rgb(240, 240, 155);
  }
  & input {
    padding: 25px 15px;
    border: none;
    border-radius: 5px;
    outline: none;
    display: inline-block;
  }
  & button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
  }
`;
