import React, { useEffect } from "react";
import TodoItem from "./TodoItemComponent";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/Store";
import { useDispatch } from "react-redux";
import { fetchTodo } from "../../slices/TodoSlice";
import TodoItemEdit from "./TodoItemEditComponent";

const TodoList = () => {
  const { data, selectedItem } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTodo(""));
  }, []);
  console.log(selectedItem);
  return (
    <>
      <div>Total {data.length}</div>
      {data.map((todoItem: any) => (
        <React.Fragment key={todoItem.id}>
          {selectedItem === todoItem.id ? (
            <TodoItemEdit item={todoItem} />
          ) : (
            <TodoItem item={todoItem} />
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default TodoList;
