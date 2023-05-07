import { Provider } from "react-redux";
import TodoContainer from "../../components/todo/TodoContainerComponent";
import { store } from "../../store/Store";

const TodoPage = () => (
  <Provider store={store}>
    <TodoContainer />
  </Provider>
);

export default TodoPage;
