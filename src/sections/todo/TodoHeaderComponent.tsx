import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/Store";
import { PostTodoItem } from "../../slices/TodoSlice";
import { TodoItemStatus } from "../../enums/Todo";

const TodoHeader = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddOnclick = () => {
    console.log("Adding new item");
    dispatch(
      PostTodoItem({
        id: "2",
        description: "new Item",
        status: TodoItemStatus.IN_PROGRESS,
      })
    );
  };

  return (
    <>
      <div>todo header</div>
      <input type="text" />
      <button onClick={handleAddOnclick}>Add</button>
      <div>Total 1</div>
    </>
  );
};

export default TodoHeader;
