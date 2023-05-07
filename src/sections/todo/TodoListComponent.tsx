import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItemComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { TodoItemStatus } from "../../enums/Todo";

const TodoList = () => {
  const { data } = useSelector((state: RootState) => state.todo);
  /*
  const [todoList] = useState([
    { id: "1", description: "First Item", status: TodoItemStatus.IN_PROGRESS },
  ]);

  useEffect(() => {
    todoList.push(data);
  });
*/
  return (
    <>
      {data.map((todoItem: any) => (
        <React.Fragment key={todoItem.id}>
          <TodoItem item={todoItem} />
        </React.Fragment>
      ))}
    </>
  );
};

export default TodoList;
