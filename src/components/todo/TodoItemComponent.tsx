import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/Store";
import { TodoActions, removeTodoItem } from "../../slices/TodoSlice";
import { TodoApi } from "../../api/todos-api";

const TodoItem = ({ item }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveOnClick = () => {
    console.log("remove item");
    dispatch(removeTodoItem(item.id));
  };

  const handleOnSelectedItem = () => {
    dispatch(TodoActions.selectItem(item.id));
  };

  return (
    <>
      <div onClick={handleOnSelectedItem}>{item.description}</div>
      <button onClick={handleRemoveOnClick}>Remove</button>
    </>
  );
};

export default TodoItem;
