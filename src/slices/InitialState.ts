import { TodoItemProps } from "../types/TodoItemType"

export type StateProps = {
  data: TodoItemProps[];
  selectedItem: string;
}

export const TodoInitialState: StateProps = {
  data: [],
  selectedItem: "",
}