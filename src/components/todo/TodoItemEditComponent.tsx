import { useState } from "react";
import { TodoItemProps } from "../../types/TodoItemType";
import { useDispatch } from "react-redux";
import { TodoActions, updateTodoItem } from "../../slices/TodoSlice";
import { AppDispatch } from "../../store/Store";

const TodoItemEdit = ({ item }: any) => {
  const [description, setDescription] = useState(item.description);
  const dispatch = useDispatch<AppDispatch>();

  const handleOnChange = (event: any) => {
    setDescription(event.target.value);
  };

  const handleOnSubmit = () => {
    try {
      dispatch(updateTodoItem({ id: item.id, description: description }));
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleOnClick = () => {};

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        onChange={handleOnChange}
        value={description}
        onClick={handleOnClick}
      />
    </form>
  );
};

export default TodoItemEdit;
