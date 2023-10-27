import React from "react";
import Button from "../UI/Button";
import { RiDeleteBack2Line, RiRefreshLine } from "react-icons/ri";

const TodoActions = ({
  resetTodosHandler,
  deleteCompletedTodosHandler,
  ifExistingCompletedTodo,
}) => {
  return (
    <div>
      <Button onClick={resetTodosHandler}>
        <RiRefreshLine />
      </Button>
      <Button
        onClick={deleteCompletedTodosHandler}
        disabled={!ifExistingCompletedTodo}
      >
        <RiDeleteBack2Line />
      </Button>
    </div>
  );
};

export default TodoActions;
