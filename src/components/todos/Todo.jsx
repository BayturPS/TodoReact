import React, { useState } from "react";
import styled from "styled-components";
import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";
import ModalDel from "./ModalDel";
const Todo = ({ todo, onDeleteTodo, onToggle, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [changeText, setchangeText] = useState(todo.text);
  const modalHandler = () => {
    setIsOpen((prev) => !prev);
  };
  const editTodo = (todo) => {
    setEdit((prev) => !prev);
  };
  const changeTextValue = (e) => {
    setchangeText(e.target.value);
  };
  const changeTextBtn = () => {
    onUpdate(todo.id, changeText);
    setEdit((prev) => !prev);
  };
  return (
    <TodoContainer className={todo?.isCompleted ? "completedTodo" : ""}>
      <TodoIcon className="todoIcon" />
      <TodoText>{todo?.text}</TodoText>
      <Date>{todo.date}</Date>
      <DeleteIcon onClick={modalHandler} className="deleteIcon" />
      {isOpen && (
        <ModalDel onClose={modalHandler}>
          <h2>Are you sure?</h2>
          <button onClick={() => onDeleteTodo(todo.id)}>yes</button>
        </ModalDel>
      )}
      {edit && (
        <ModalDel onClose={editTodo}>
          <h3>Enter your update todo ...</h3>
          <input type="text" value={changeText} onChange={changeTextValue} />
          <button onClick={changeTextBtn}>add</button>
        </ModalDel>
      )}
      <BiEdit onClick={changeTextBtn} className="edit" />
      <CheckIcon onClick={() => onToggle(todo.id)} className="checkIcon" />
    </TodoContainer>
  );
};
export default Todo;
const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin: 15px 0;
  font-size: 1.5rem;
  border-radius: 5px;
  border: 2px solid #555;
  color: #112d49;
  background-color: #fbfef9;
  &.completedTodo {
    background-color: unset;
    border-color: gray;
    color: gray;
  }
  &.completedTodo .todoIcon,
  &.completedTodo .checkIcon,
  &.completedTodo .deleteIcon {
    color: gray;
  }
`;
const TodoText = styled.div`
  width: 100%;
  text-align: left;
`;
const TodoIcon = styled(RiTodoFill)`
  font-size: 30px;
  margin-right: 10px;
  color: teal;
`;
const DeleteIcon = styled(RiDeleteBin2Line)`
  cursor: pointer;
  color: lightgrey;
  padding: 0 7px;
  font-size: 48px;
  transition: transform 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    color: red;
  }
`;
const CheckIcon = styled(FaCheck)`
  cursor: pointer;
  color: lightgrey;
  padding: 0 7px;
  font-size: 43px;
  transition: transform 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    color: green;
  }
`;
const BiEdit = styled(BiSolidEdit)`
  cursor: pointer;
  color: lightgrey;
  padding: 0 7px;
  font-size: 43px;
  transition: transform 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    color: blue;
  }
`;

const Date = styled.p`
  font-size: 15px;
  color: grey;
`;
