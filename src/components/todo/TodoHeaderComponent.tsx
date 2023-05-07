import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/Store";
import { PostTodoItem } from "../../slices/TodoSlice";
import { TodoItemStatus } from "../../enums/Todo";
import { useState } from "react";

const TodoHeader = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [newTodoItem, setNewTodoItem] = useState({
    description: "",
    status: TodoItemStatus.IN_PROGRESS,
  });

  const handleAddOnclick = () => {
    console.log("Adding new item");
    dispatch(PostTodoItem(newTodoItem));
  };

  const handleOnChange = (event: any) => {
    setNewTodoItem({ ...newTodoItem, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div>todo header</div>
      <input type="text" name="description" onChange={handleOnChange} />
      <button onClick={handleAddOnclick}>Add</button>
    </>
  );
};

export default TodoHeader;
