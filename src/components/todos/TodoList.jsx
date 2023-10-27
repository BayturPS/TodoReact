import React from "react";
import styled from "styled-components";
import Todo from "./Todo";

const TodoList = ({ todos, onDeleteTodo, onToggle, onUpdate }) => {
  return (
    <TodoListModule>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          onDeleteTodo={onDeleteTodo}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      ))}
    </TodoListModule>
  );
};
export default TodoList;

const TodoListModule = styled.div`
  & {
    padding: 10px;
  }
`;
