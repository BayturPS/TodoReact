import { useState, useEffect } from "react";
import styled from "styled-components";
import TodoForm from "../../components/todos/TodoForm";
import TodoList from "../../components/todos/TodoList";
import TodoActions from "./TodoActions";

const TodoApp = () => {
  const [todos, setTodos] = useState(getLocalItems());
  function getLocalItems() {
    const list = localStorage.getItem("lists");
    if (list) {
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  }
  //   Refresh bolgondo local storage jogolup ketbesh ychyn

  //   Data kogda dobavlaem todo list

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: Math.floor(Math.random() * 10000), // Generate random id
      date: new Date().toLocaleString(),
    };
    // console.log(newTodo);
    setTodos([...todos, newTodo]);
  };
  //   console.log(todos);

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  //   Function for deleting a todo

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
            date: new Date().toLocaleString(),
          };
        }
        return todo;
      })
    );
  };
  //   Function dly galochki zavershilsya ili net
  const resetTodosHandler = () => {
    setTodos([]);
  };
  //   Chtoby polnostyu ochistit todo list

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((item) => !item.isCompleted));
  };
  //   Chtoby udalit zavershennye listy

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(todos));
  }, [todos]);
  //   Adding to local storage

  const updateTodoHandler = (id, changeText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text: changeText,
              data: new Date().toLocaleString(),
            }
          : todo
      )
    );
  };
  return (
    <AppModule>
      <h1>Todo App</h1>
      <TodoForm onAddTodo={addTodoHandler} />
      {!!todos.length && (
        <TodoActions
          resetTodosHandler={resetTodosHandler}
          deleteCompletedTodosHandler={deleteCompletedTodosHandler}
          ifExistingCompletedTodo={!!completedTodosCount}
        />
      )}
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodoHandler}
        onToggle={toggleTodoHandler}
        onUpdate={updateTodoHandler}
      />

      {completedTodosCount > 0 && (
        <h2>
          You have to completed {completedTodosCount}{" "}
          {completedTodosCount > 1 ? "todos" : "todo"}
        </h2>
      )}
    </AppModule>
  );
};

export default TodoApp;
const AppModule = styled.div`
  & {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }
  h1 {
    font-size: 2.2rem;
    margin-bottom: 40px;
    margin-top: 24px;
  }
`;
