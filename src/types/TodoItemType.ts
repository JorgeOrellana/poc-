import { TodoItemStatus } from "../enums/Todo";

export type TodoItemProps = {
  id: string,
  description: string;
  status: TodoItemStatus
}

export type TodoItemPropsResponse = {
  _id: string;
  description: string;
  status: TodoItemStatus;
};